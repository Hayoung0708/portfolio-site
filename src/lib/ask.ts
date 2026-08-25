import {
    Agent,
    availability,
    chain,
    refine,
    router,
    step,
    type Availability,
    type Runnable,
} from "my-little-agent";

import { CHRONOLOGY_NODES } from "@/constants/chronology";
import {
    COVER_COLLAB,
    COVER_SKILLS,
    COVER_TROUBLE,
    COVER_UX,
} from "@/constants/coverLetter";
import { PEER_REVIEWS } from "@/constants/peerReview";
import { PRINCIPLES, PROFILE } from "@/constants/profile";
import { MAIN_PROJECTS, SIDE_WORKS } from "@/constants/projects";
import { TECH_STACKS } from "@/constants/techStack";

/**
 * "챗봇에게 물어보세요" — my-little-agent 0.2.0 기반 라우팅 워크플로우.
 *
 * 온디바이스 모델은 사실 정확도가 약하다. 그래서 모델에게 기억을 맡기지 않고
 * 분류(router)로 필요한 자료만 고른 뒤, step()으로 그 자료를 프롬프트에 넣어
 * 모델은 "주어진 자료를 한국어 문장으로 다듬는 일"만 하게 한다.
 */

export type RouteKey = "tech" | "project" | "collab" | "about";

export const ROUTE_LABEL: Record<RouteKey, string> = {
    tech: "기술 스택",
    project: "프로젝트",
    collab: "협업 · 일하는 방식",
    about: "소개 · 성향",
};

/* ---------------------------------------------------------------- 자료 */

const techDigest = TECH_STACKS.map(
    (group) =>
        `${group.title}: ${group.skills.map((skill) => skill.name).join(", ")}`,
).join("\n");

const projectDigest = [
    ...MAIN_PROJECTS.map((project) =>
        [
            `- ${project.title} (${project.period}, ${project.type})`,
            `  한 줄: ${project.intro}`,
            `  요약: ${project.highlights.join(" / ")}`,
        ].join("\n"),
    ),
    ...SIDE_WORKS.map(
        (work) => `- ${work.title} (${work.period}) ${work.intro}`,
    ),
].join("\n");

/** 프로젝트별로 실제 사용한 기술 목록. "React 써봤어요?" 류 질문의 근거 */
const stackDigest = [
    ...MAIN_PROJECTS.map(
        (project) =>
            `- ${project.title}: ${project.stacks
                .flatMap((group) => group.list.map((item) => item.name))
                .join(", ")}`,
    ),
    ...SIDE_WORKS.map((work) => `- ${work.title}: ${work.tags.join(", ")}`),
].join("\n");

/** 실제 트러블슈팅 기록. "어려웠던 문제" 류 질문의 근거 */
const troubleDigest = MAIN_PROJECTS.flatMap((project) =>
    project.learn
        .filter((item) => item.problem)
        .map(
            (item) =>
                `- [${project.title}] ${item.title}: ${(item.problem ?? "")
                    .replace(/\n/g, " ")
                    .slice(0, 160)}`,
        ),
).join("\n");

const careerDigest = CHRONOLOGY_NODES.map(
    (node) => `- ${node.date} ${node.title}: ${node.body.replace(/\n/g, " ")}`,
).join("\n");

const reviewDigest = PEER_REVIEWS.slice(0, 6)
    .map((review) => `- [${review.project}] ${review.body.replace(/\n/g, " ")}`)
    .join("\n");

const aboutDigest = [
    `이름: ${PROFILE.name} (${PROFILE.nameEn}), ${PROFILE.role}`,
    `연락: ${PROFILE.email}`,
    "",
    ...PRINCIPLES.map(
        (principle) => `- ${principle.title}\n  ${principle.proof}`,
    ),
].join("\n");

const collabDigest = [careerDigest, "", "동료 리뷰:", reviewDigest].join("\n");

/** AI 활용 방식. "AI 어떻게 쓰나" 류 질문은 분류가 흔들려서 여러 라우트에 공급 */
const aiDigest = [
    "AI 활용 방식:",
    "- AI는 결과를 맡기는 대상이 아니라 기준을 세워 쓰는 도구로 본다",
    "- Chrome Built-in AI 기반 멀티 에이전트 라이브러리 my-little-agent를 직접 만들어 npm에 배포했고, 지금 이 챗봇도 그 라이브러리로 브라우저 안에서 동작한다",
    "- 테이블탑 온라인과 이 포트폴리오 사이트는 Claude 기반 바이브 코딩으로 개발·개편했다",
    "- 개인 프로젝트 PR마다 Gemini Code Assist 자동 리뷰 파이프라인을 운영한다",
].join("\n");

const KNOWLEDGE: Record<RouteKey, { data: string; focus: string }> = {
    tech: {
        data: `보유 기술:\n${techDigest}\n\n프로젝트별 사용 기술:\n${stackDigest}\n\n${COVER_SKILLS}\n\n${aiDigest}`,
        focus: "질문한 기술이 '프로젝트별 사용 기술' 목록에 실제로 적힌 프로젝트만 골라 답한다. 그 기술이 없는 프로젝트는 절대 언급하지 않는다.",
    },
    project: {
        data: `${projectDigest}\n\n${COVER_TROUBLE}\n\n${COVER_UX}\n\n${aiDigest}\n\n기타 트러블슈팅 기록:\n${troubleDigest}`,
        focus: "프로젝트 이름과 기간, 맡은 역할을 구체적으로 답한다. 가장 어렵거나 힘들었던 문제를 물으면 '가장 어려웠던 문제' 항목을 우선해 답한다.",
    },
    collab: {
        data: `${collabDigest}\n\n${COVER_COLLAB}`,
        focus: "팀에서 어떻게 일하는지, 어떤 문제를 어떻게 개선했는지 중심으로 답한다.",
    },
    about: {
        data: `${aboutDigest}\n\n${COVER_UX}\n\n${aiDigest}`,
        focus: "어떤 개발자인지, 무엇을 중요하게 생각하는지 중심으로 답한다. 사용자 경험을 물으면 '사용자 경험 사례'의 구체적인 사례로 답한다.",
    },
};

/* ------------------------------------------------------------ 워크플로우 */

const BASE_RULES = [
    "너는 프론트엔드 개발자 강하영의 포트폴리오를 안내하는 도우미다.",
    "반드시 아래 [자료]에 있는 내용만 사용한다. 자료에 없으면 모른다고 답한다.",
    "반드시 한국어로, 3문장 이내로, 존댓말로 답한다.",
    "강하영을 3인칭으로 부르지 말고 '하영님'이라고 쓴다.",
    "포트폴리오와 무관한 질문(날씨, 시사, 잡담 등)에는 답할 수 없다는 안내 한 문장으로만 끝낸다. 이때 자료 내용이나 하영님 소개를 덧붙이지 않는다.",
].join("\n");

export interface AskHandle {
    ask: (question: string) => Promise<string>;
    destroy: () => void;
}

/**
 * 워크플로우를 만든다. 세션은 첫 질문 때 lazy 생성되므로,
 * 이 함수를 호출하는 것만으로는 모델을 붙잡지 않는다.
 */
export function createAsk(handlers: {
    onRoute?: (key: RouteKey) => void;
    onDownloadProgress?: (loaded: number) => void;
}): AskHandle {
    const classifier = new Agent({
        name: "classifier",
        instruction:
            "질문이 어떤 주제인지 하나로 분류한다. 확실하지 않으면 about을 고른다.",
        stateless: true,
        temperature: 0,
        topK: 1,
        onDownloadProgress: handlers.onDownloadProgress,
    });

    const agents: Array<Agent> = [classifier];

    /* 초안을 채점하는 검증자. 기준 미달이면 refine이 피드백과 함께 다시 쓰게 한다 */
    const evaluator = new Agent({
        name: "evaluator",
        instruction: [
            "너는 답변 초안을 검증하는 채점자다. 0~100점으로 채점한다.",
            "감점 기준: [자료]에 없는 내용이 섞임(-40), 질문과 무관한 내용 포함(-30),",
            "3문장 초과 또는 반말(-20), 문장이 어색함(-10).",
            "피드백은 무엇을 고쳐야 하는지 한 문장으로 짧게 쓴다.",
        ].join("\n"),
        stateless: true,
        temperature: 0,
        topK: 1,
    });
    agents.push(evaluator);

    const route = (key: RouteKey): Runnable => {
        const answerer = new Agent({
            name: key,
            instruction: `${BASE_RULES}\n${KNOWLEDGE[key].focus}`,
            stateless: true,
            temperature: 0.2,
            topK: 3,
        });
        agents.push(answerer);

        return chain(
            step((question) => {
                handlers.onRoute?.(key);
                return `[자료]\n${KNOWLEDGE[key].data}\n\n[질문]\n${question}`;
            }, `${key}:자료 조회`),
            /* 답변 → 채점 → 기준 미달이면 피드백 반영해 재작성 (최대 2회) */
            refine({
                worker: answerer,
                evaluator,
                maxRounds: 2,
                minScore: 80,
            }),
        );
    };

    const routes = Object.fromEntries(
        (Object.keys(KNOWLEDGE) as Array<RouteKey>).map((key) => [
            key,
            route(key),
        ]),
    );

    const flow = router({
        classifier,
        routes,
        fallback: routes.about,
        descriptions: {
            tech: "언어, 프레임워크, 라이브러리, 툴 등 기술 스택과 사용 경험에 대한 질문",
            project:
                "만든 서비스, 프로젝트 목록, 맡은 기능, 어려웠던 문제와 트러블슈팅, 사용자 경험(UX) 개선 사례에 대한 질문",
            collab: "팀 프로젝트, 협업 방식, 코드리뷰, 동료 평가에 대한 질문",
            about: "성격, 강점과 약점, 가치관, 연락처 등 인물 자체에 대한 질문",
        },
    });

    return {
        ask: (question) => flow.run(question),
        destroy: () => agents.forEach((instance) => instance.destroy()),
    };
}

/**
 * 모델 상태 조회. 0.2.0의 availability()는 전역이 없어도 'unavailable'을
 * 돌려주지만, 응답이 아예 없는 환경을 대비해 3초 타임아웃만 유지한다.
 */
export function checkAvailability(): Promise<Availability> {
    return Promise.race([
        availability(),
        new Promise<Availability>((resolve) =>
            setTimeout(() => resolve("unavailable"), 3000),
        ),
    ]);
}
