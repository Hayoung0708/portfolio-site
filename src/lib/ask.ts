import {
    agent,
    availability,
    chain,
    router,
    step,
    type Availability,
    type Runnable,
} from "my-little-agent";

import { CHRONOLOGY_NODES } from "@/constants/chronology";
import { PEER_REVIEWS } from "@/constants/peerReview";
import { PRINCIPLES, PROFILE } from "@/constants/profile";
import { MAIN_PROJECTS, SIDE_WORKS } from "@/constants/projects";
import { TECH_STACKS } from "@/constants/techStack";

/**
 * "하영에게 물어보기" — Chrome Built-in AI 위에서 도는 라우팅 워크플로우.
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
    ...MAIN_PROJECTS.map((project) => {
        const stacks = project.stacks
            .flatMap((group) => group.list.map((item) => item.name))
            .join(", ");
        const roles = project.contributions
            .map((contribution) => contribution.title)
            .join(" / ");
        return [
            `- ${project.title} (${project.period}, ${project.type}${project.lead ? `, ${project.lead} 리드` : ""})`,
            `  한 줄: ${project.intro}`,
            `  스택: ${stacks}`,
            `  담당: ${roles}`,
        ].join("\n");
    }),
    ...SIDE_WORKS.map(
        (work) => `- ${work.title} (${work.period}) ${work.intro}`,
    ),
].join("\n");

const troubleDigest = MAIN_PROJECTS.flatMap((project) =>
    project.learn.map((item) => {
        const detail = (item.problem ?? item.learn).replace(/\n/g, " ");
        return `- [${project.title}] ${item.title} (${item.badge})\n  ${detail}`;
    }),
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
    ...PRINCIPLES.map((principle) => `- ${principle.title}\n  ${principle.proof}`),
    "",
    "강점: 사용자 경험과 개발자 경험을 함께 고려하는 꼼꼼함. 반복 로직은 커스텀 훅으로 추상화하고, 입력값은 브라우저 기본 속성·정규식·상태 기반 검증을 함께 적용해 예외를 다각도로 방어한다.",
    "약점: 세부 설계에 집중하다 초기 개발 속도가 늦어지는 점. 현재는 MVP를 먼저 만들고 점진적으로 개선하는 방식으로 전환 중.",
].join("\n");

const collabDigest = [
    careerDigest,
    "",
    "협업 경험:",
    "- 팀 프로젝트 8회. PR 기반 코드리뷰, 이슈 중심 브랜치 전략, 커밋 컨벤션 운영.",
    "- Studium: 프론트엔드 리드. 구두 논의로 맥락이 새는 문제를 담당자 태그 + 텍스트 기록 방식으로 전환해 반복 질문 감소.",
    "- De:caffeine: 비전공자 팀원 1:1 멘토링. 업무 대행이 아니라 스스로 구현할 수 있는 수준까지 끌어올림.",
    "- 졸업 프로젝트: 역할 분담이 새는 문제를 JIRA 칸반 도입으로 정리.",
    "",
    "동료 리뷰:",
    reviewDigest,
].join("\n");

/* ------------------------------------------------------------ 에이전트 */

const BASE_RULES = [
    "너는 프론트엔드 개발자 강하영의 포트폴리오를 안내하는 도우미다.",
    "반드시 아래 [자료]에 있는 내용만 사용한다. 자료에 없으면 모른다고 답한다.",
    "반드시 한국어로, 3문장 이내로, 존댓말로 답한다.",
    "강하영을 3인칭으로 부르지 말고 '하영님'이라고 쓴다.",
    "목록이 필요하면 최대 3개까지만 쓴다.",
].join("\n");

function knowledgeRoute(
    key: RouteKey,
    knowledge: string,
    focus: string,
    onStep?: (key: RouteKey) => void,
) {
    const answerer = agent({
        name: key,
        instruction: `${BASE_RULES}\n${focus}`,
        stateless: true,
        temperature: 0.2,
        topK: 3,
    });

    const runnable = chain(
        step((question) => {
            onStep?.(key);
            return `[자료]\n${knowledge}\n\n[질문]\n${question}`;
        }, `${key}:자료 조회`),
        answerer,
    );

    return { runnable, answerer };
}

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
    const classifier = agent({
        name: "classifier",
        instruction:
            "질문이 어떤 주제인지 하나로 분류한다. 확실하지 않으면 about을 고른다.",
        stateless: true,
        temperature: 0,
        topK: 1,
        onDownloadProgress: handlers.onDownloadProgress,
    });

    const built = {
        tech: knowledgeRoute(
            "tech",
            `${techDigest}\n\n프로젝트별 사용 스택:\n${projectDigest}`,
            "어떤 기술을 어느 정도 다뤄봤는지, 어떤 프로젝트에서 썼는지 중심으로 답한다.",
            handlers.onRoute,
        ),
        project: knowledgeRoute(
            "project",
            `${projectDigest}\n\n트러블슈팅:\n${troubleDigest}`,
            "프로젝트 이름과 기간, 맡은 역할을 구체적으로 답한다.",
            handlers.onRoute,
        ),
        collab: knowledgeRoute(
            "collab",
            collabDigest,
            "팀에서 어떻게 일하는지, 어떤 문제를 어떻게 개선했는지 중심으로 답한다.",
            handlers.onRoute,
        ),
        about: knowledgeRoute(
            "about",
            aboutDigest,
            "어떤 개발자인지, 무엇을 중요하게 생각하는지 중심으로 답한다.",
            handlers.onRoute,
        ),
    };

    const routes = Object.fromEntries(
        Object.entries(built).map(([key, value]) => [key, value.runnable]),
    ) as Record<RouteKey, Runnable>;

    const flow = router({
        classifier,
        routes,
        fallback: routes.about,
        descriptions: {
            tech: "언어, 프레임워크, 라이브러리, 툴 등 기술 스택과 사용 경험에 대한 질문",
            project: "만든 서비스, 프로젝트 목록, 맡은 기능, 트러블슈팅에 대한 질문",
            collab: "팀 프로젝트, 협업 방식, 코드리뷰, 커뮤니케이션, 동료 평가에 대한 질문",
            about: "성격, 강점과 약점, 가치관, 학력, 연락처 등 인물 자체에 대한 질문",
        },
    });

    return {
        ask: (question) => flow.run(question),
        destroy: () => {
            classifier.destroy();
            Object.values(built).forEach((route) => route.answerer.destroy());
        },
    };
}

/**
 * 모델 상태 조회. 응답이 없는 환경(헤드리스, 정책으로 막힌 브라우저)에서 무한정
 * "확인 중"에 머무르지 않도록 3초를 넘기면 미지원으로 본다.
 */
export function checkAvailability(): Promise<Availability> {
    return Promise.race([
        availability(),
        new Promise<Availability>((resolve) =>
            setTimeout(() => resolve("unavailable"), 3000),
        ),
    ]);
}
