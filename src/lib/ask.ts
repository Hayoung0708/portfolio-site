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

export type RouteKey =
    | "tech"
    | "project"
    | "trouble"
    | "collab"
    | "about"
    | "offtopic"
    | "preference";

export const ROUTE_LABEL: Record<RouteKey, string> = {
    tech: "기술 스택",
    project: "프로젝트",
    trouble: "트러블 슈팅",
    collab: "협업 · 일하는 방식",
    about: "소개 · 성향",
    offtopic: "안내",
    preference: "안내",
};

/** 모델을 거치지 않는 고정 답변 라우트 */
const FIXED_REPLY: Record<"offtopic" | "preference", string> = {
    offtopic:
        "포트폴리오와 관련된 질문에만 답할 수 있어요. 하영님의 기술, 프로젝트, 협업 방식이 궁금하시다면 물어봐 주세요.",
    preference:
        "그 부분은 제가 답변드리기 어려워요. 포트폴리오에 담긴 내용까지만 안내할 수 있어요.",
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
    "(참고: Next.js는 React 기반이므로, Next를 쓴 프로젝트는 React 경험에 포함된다)",
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
                `- ${project.title} 프로젝트의 "${item.title}" — ${(
                    item.problem ?? ""
                )
                    .replace(/\n/g, " ")
                    .slice(0, 160)} (이 사례의 프로젝트 이름은 ${project.title})`,
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
    "- Chrome Built-in AI 기반 멀티 에이전트 프레임워크 my-little-agent를 직접 만들어 npm에 배포했고, 지금 이 챗봇도 그 프레임워크로 브라우저 안에서 동작한다",
    "- 테이블탑 온라인과 이 포트폴리오 사이트는 Claude 기반 바이브 코딩으로 개발·개편했다",
    "- 개인 프로젝트 PR마다 Gemini Code Assist 자동 리뷰 파이프라인을 운영한다",
].join("\n");

/* 고정 답변 라우트(offtopic, preference)는 자료가 없어 여기 없다 */
const KNOWLEDGE: Record<
    Exclude<RouteKey, keyof typeof FIXED_REPLY>,
    { data: string; focus: string }
> = {
    tech: {
        data: `보유 기술:\n${techDigest}\n\n프로젝트별 사용 기술:\n${stackDigest}\n\n${COVER_SKILLS}\n\n${aiDigest}`,
        focus: "질문한 기술이 '프로젝트별 사용 기술' 목록에 실제로 적힌 프로젝트만 골라 답한다. 그 기술이 없는 프로젝트는 절대 언급하지 않되, 그 기술이 적힌 프로젝트는 빠짐없이 모두 나열한다.",
    },
    project: {
        data: `${projectDigest}\n\n프로젝트별 사용 기술:\n${stackDigest}\n\n${COVER_UX}\n\n${aiDigest}`,
        focus: "프로젝트 이름과 기간, 맡은 역할을 구체적으로 답한다. 사례를 말할 때는 자료에서 그 사례에 적힌 프로젝트 이름만 붙인다. 다른 프로젝트 이름을 갖다 붙이면 안 된다.",
    },
    /*
     * 트러블슈팅만 따로 둔다. 프로젝트 소개 문장이 섞여 있으면 작은 모델이
     * 옆 프로젝트의 소개와 이 프로젝트의 문제를 붙여 버린다.
     */
    trouble: {
        data: `${COVER_TROUBLE}\n\n그 밖의 트러블슈팅 기록:\n${troubleDigest}`,
        focus: "자료에 적힌 사례 중 하나를 골라, 어떤 문제였고 어떻게 해결했는지 답한다. 사례에 적힌 프로젝트 이름만 붙이고, 다른 프로젝트 이름이나 프로젝트 소개 문구를 갖다 붙이지 않는다. 가장 어려웠던 문제를 물으면 '가장 어려웠던 문제' 항목을 먼저 답한다.",
    },
    collab: {
        data: `${collabDigest}\n\n${COVER_COLLAB}`,
        focus: [
            "팀에서 어떻게 일하는지, 어떤 문제를 어떻게 개선했는지 중심으로 답한다.",
            "동료 리뷰를 쓸 때는 '동료들은 ~라고 평가합니다'처럼 동료의 말임을 밝히고, 하영님이 스스로 말한 것처럼 쓰지 않는다.",
        ].join(" "),
    },
    about: {
        data: `${aboutDigest}\n\n${COVER_UX}\n\n${aiDigest}`,
        focus: "어떤 개발자인지, 무엇을 중요하게 생각하는지 중심으로 답한다. 사용자 경험을 물으면 '사용자 경험 사례'의 구체적인 사례로 답한다. 가고 싶은 회사·원하는 동료처럼 자료에 없는 희망을 물으면 '그 부분은 제가 답변드리기 어려워요.'라고만 답한다.",
    },
};

/* ------------------------------------------------------------ 워크플로우 */

const BASE_RULES = [
    "너는 프론트엔드 개발자 강하영의 포트폴리오를 안내하는 도우미다.",
    "반드시 아래 [자료]에 있는 내용만 사용한다. 자료에 없으면 모른다고 답한다.",
    "반드시 한국어로, 3문장 이내로, 존댓말로 답한다.",
    "강하영을 3인칭으로 부르지 말고 '하영님'이라고 쓴다.",
    "포트폴리오와 무관한 질문(날씨, 시사, 잡담 등)에는 답할 수 없다는 안내 한 문장으로만 끝낸다. 이때 자료 내용이나 하영님 소개를 덧붙이지 않는다.",
    "[이전 대화]가 있으면 [새 질문]을 그 흐름의 후속 질문으로 이해하고, 직전 답변에서 이미 말한 내용은 반복하지 않고 자료의 다른 내용으로 답한다.",
    "프로젝트 이름과 기술 용어는 자료에 적힌 표기를 한 글자도 바꾸지 않고 그대로 옮겨 쓴다. 예: Studium을 Studying으로, 퍼널 모델을 다른 말로 바꾸면 안 된다.",
    "자료 중 질문과 직접 관련된 부분만 골라 답한다. 질문 주제와 다른 영역(예: 협업 질문에 UX 사례, 기술 질문에 성격 소개)은 섞지 않는다.",
    "원하는 회사상·동료상처럼 자료에 없는 개인적 선호를 물으면 '그 부분은 제가 답변드리기 어려워요.'라고만 답한다.",
    "자료에 없는 협업 도구, 회의 방식, 수치를 지어내지 않는다.",
    "인사말이나 '알겠습니다', '안내해 드리겠습니다' 같은 사족 없이 답변 내용만 바로 쓴다.",
    "사례를 제목만 줄줄이 나열하지 말고, 한두 개를 골라 무엇이 문제였고 어떻게 해결했는지 함께 쓴다.",
].join("\n");

export interface AskHandle {
    /**
     * routeHint를 주면 분류를 건너뛰고 그 라우트로 바로 간다.
     * excludeTitles의 프로젝트는 자료에서 빼고 주입한다 — 후속 질문에서
     * 이미 말한 사례를 모델이 반복하지 못하게 원천 차단하는 용도.
     */
    ask: (
        question: string,
        routeHint?: RouteKey,
        excludeTitles?: Array<string>,
    ) => Promise<string>;
    destroy: () => void;
}

/**
 * 자료에서 특정 프로젝트를 언급하는 블록·불릿을 걷어낸다.
 * 모델에게 "빼고 답하라"고 시키는 것보다 자료에서 빼는 쪽이 확실하다.
 */
function stripMentioned(data: string, exclude: Array<string>): string {
    if (exclude.length === 0) return data;
    const hit = (text: string) =>
        exclude.some((title) =>
            text.toLowerCase().includes(title.toLowerCase()),
        );
    return data
        .split("\n\n")
        .map((block) => {
            // 불릿 없는 서사 블록은 언급되면 통째로 뺀다
            if (!/^\s*-\s/m.test(block)) return hit(block) ? "" : block;
            // 불릿 블록은 항목 단위로 뺀다 (들여쓴 줄은 위 불릿에 딸린 것)
            const entries: Array<Array<string>> = [];
            for (const line of block.split("\n")) {
                if (/^\s*-\s/.test(line) || entries.length === 0) {
                    entries.push([line]);
                } else {
                    entries[entries.length - 1].push(line);
                }
            }
            return entries
                .filter((entry) => !hit(entry.join("\n")))
                .map((entry) => entry.join("\n"))
                .join("\n");
        })
        .filter((block) => block.trim().length > 0)
        .join("\n\n");
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
            "질문이 어떤 주제인지 하나로 분류한다. 가고 싶은 회사, 원하는 동료 등 본인의 희망·선호를 묻는 질문은 반드시 preference다. 포트폴리오와 무관한 잡담은 offtopic이다. 그 외에 확실하지 않으면 about을 고른다.",
        stateless: true,
        temperature: 0,
        topK: 1,
        onDownloadProgress: handlers.onDownloadProgress,
    });

    const agents: Array<Agent> = [classifier];
    // 질문은 한 번에 하나만 흐르므로 호출 단위 상태로 충분하다
    let excludeTitles: Array<string> = [];

    /* 초안을 채점하는 검증자. 기준 미달이면 refine이 피드백과 함께 다시 쓰게 한다 */
    const evaluator = new Agent({
        name: "evaluator",
        instruction: [
            "너는 답변 초안을 검증하는 채점자다. 0~100점으로 채점한다.",
            "감점 기준: [자료]에 없는 내용이 섞임(-40), 프로젝트 이름이나 용어가 자료의 표기와 다름(-40),",
            "질문과 무관한 내용 포함(-30), 3문장 초과 또는 반말(-20), 문장이 어색함(-10).",
            "피드백은 무엇을 고쳐야 하는지 한 문장으로 짧게 쓴다.",
        ].join("\n"),
        stateless: true,
        temperature: 0,
        topK: 1,
    });
    agents.push(evaluator);

    const route = (
        key: Exclude<RouteKey, keyof typeof FIXED_REPLY>,
    ): Runnable => {
        const answerer = new Agent({
            name: key,
            instruction: `${BASE_RULES}\n${KNOWLEDGE[key].focus}`,
            stateless: true,
            // 고유명사를 지어내지 않도록 샘플링을 최대한 좁힌다
            temperature: 0,
            topK: 1,
        });
        agents.push(answerer);

        return chain(
            step((question) => {
                handlers.onRoute?.(key);
                const data = stripMentioned(KNOWLEDGE[key].data, excludeTitles);
                return `[자료]\n${data}\n\n[질문]\n${question}`;
            }, `${key}:자료 조회`),
            /* 답변 → 채점 → 기준 미달이면 피드백 반영해 재작성 (최대 2회) */
            refine({
                worker: answerer,
                evaluator,
                maxRounds: 2,
                minScore: 80,
            }),
            /* 빈 줄 이후는 지시문 유출인 경우가 있어 첫 문단만 남기고,
               작은 모델이 붙이는 인사말·사족과 간혹 섞는 외국 문자를 걷어낸다 */
            step(
                (answer) =>
                    answer
                        .trim()
                        .split(/\n{2,}/)[0]
                        .replace(
                            /[^\p{Script=Hangul}\p{Script=Latin}0-9\s.,·'"“”‘’()[\]%:;!?~\-+/&…]/gu,
                            "",
                        )
                        .replace(
                            /^(안녕하세요|알겠습니다|안내 드립니다|안내해 드리겠습니다|네|아|음|저희는|죄송합니다)[.,!]?\s*/,
                            "",
                        )
                        .trim(),
                `${key}:정리`,
            ),
        );
    };

    const routes: Record<string, Runnable> = Object.fromEntries(
        (
            Object.keys(KNOWLEDGE) as Array<
                Exclude<RouteKey, keyof typeof FIXED_REPLY>
            >
        ).map((key) => [key, route(key)]),
    );
    // 무관 질문·개인적 선호는 모델을 거치지 않고 고정 문구로 답한다 — 빠르고 절대 새지 않는다
    (Object.keys(FIXED_REPLY) as Array<keyof typeof FIXED_REPLY>).forEach(
        (key) => {
            routes[key] = chain(
                step(() => {
                    handlers.onRoute?.(key);
                    return FIXED_REPLY[key];
                }, `${key}:안내`),
            );
        },
    );

    const flow = router({
        classifier,
        routes,
        fallback: routes.about,
        descriptions: {
            tech: "언어, 프레임워크, 라이브러리, 툴 등 기술 스택에 대한 질문. 특정 기술(React 등)을 써 본 프로젝트가 무엇인지 묻는 질문 포함",
            project:
                "만든 서비스, 프로젝트 목록, 맡은 기능, 사용자 경험(UX) 개선 사례에 대한 질문",
            trouble:
                "개발하며 부딪힌 문제, 어려웠던 점, 버그, 장애, 트러블슈팅, 문제를 어떻게 해결했는지에 대한 질문. 예: '가장 어려웠던 문제는 뭐였나요?'",
            collab: "팀에서 일하는 방식, 협업·소통 방법, 코드리뷰, 동료 평가에 대한 질문. 예: '팀에서는 어떤 식으로 일하나요?'",
            about: "성격, 강점과 약점, 가치관, 연락처 등 인물 자체에 대한 질문 (가고 싶은 회사·원하는 동료 질문은 preference)",
            offtopic:
                "포트폴리오와 무관한 질문. 예: 날씨, 시사, 음식, 일상 잡담, 농담",
            preference:
                "본인의 희망이나 선호를 묻는 질문. 예: 가고 싶은 회사, 원하는 동료상, 희망 연봉, 원하는 근무 방식",
        },
    });

    return {
        ask: (question, routeHint, exclude) => {
            excludeTitles = exclude ?? [];
            return routeHint && routes[routeHint]
                ? routes[routeHint].run(question)
                : flow.run(question);
        },
        destroy: () => agents.forEach((instance) => instance.destroy()),
    };
}

/**
 * 모델 상태 조회. 0.2.0의 availability()는 전역이 없어도 'unavailable'을
 * 돌려주지만, 응답이 아예 없는 환경을 대비해 타임아웃을 둔다.
 * 콜드 스타트에서는 모델 서비스가 깨어나는 데 수 초 걸릴 수 있어 넉넉히 잡는다.
 */
export function checkAvailability(): Promise<Availability> {
    return Promise.race([
        availability(),
        new Promise<Availability>((resolve) =>
            setTimeout(() => resolve("unavailable"), 10000),
        ),
    ]);
}
