/** 챗 입력창 아래 추천 질문 칩 */
export const SUGGESTED_QUESTIONS = [
    "React 경험이 얼마나 되나요?",
    "가장 어려웠던 문제는 뭐였나요?",
    "팀에서는 어떤 식으로 일하나요?",
    "혼자 만든 프로젝트도 있나요?",
] as const;

/**
 * Chrome Built-in AI를 못 쓰는 환경(비-Chrome, Chrome 138 미만, 모델 미설치)에서
 * 챗 자리를 비워두지 않기 위한 정적 답변.
 * 질문 분류는 모델 없이 키워드로 한다.
 */
export const FALLBACK_ANSWERS: Array<{
    keywords: Array<string>;
    answer: string;
}> = [
    {
        keywords: [
            "react",
            "리액트",
            "next",
            "넥스트",
            "typescript",
            "타입스크립트",
            "기술",
            "스택",
            "언어",
            "라이브러리",
            "tailwind",
            "zustand",
        ],
        answer: `TypeScript 기반 React·Next.js가 주력입니다. 13개 프로젝트 중 대부분을 이 조합으로 만들었고, 스타일은 TailwindCSS, 전역 상태는 Zustand를 씁니다.
Studium에서는 프론트엔드 리드로 참여했고, DUNCOP·찜콩은 Next.js로 직접 기획부터 배포까지 했습니다.`,
    },
    {
        keywords: [
            "프로젝트",
            "만든",
            "작업",
            "서비스",
            "duncop",
            "던캅",
            "studium",
            "테이블탑",
            "agent",
            "에이전트",
        ],
        answer: `운영 중인 서비스는 DUNCOP(던전앤파이터 파티 컷 확인)과 테이블탑 온라인(브라우저 보드게임)입니다.
팀 프로젝트로는 Studium, 북적북적, De:caffeine, Devtion이 있고, 오픈소스로 my-little-agent를 npm에 배포했습니다.
아래 Works 섹션에서 각 프로젝트의 기여 내역과 트러블슈팅을 볼 수 있습니다.`,
    },
    {
        keywords: [
            "협업",
            "팀",
            "소통",
            "코드리뷰",
            "리뷰",
            "문화",
            "커뮤니케이션",
            "일하는",
        ],
        answer: `8번의 팀 프로젝트에서 PR 기반 코드리뷰와 브랜치 전략을 운영했습니다.
Studium에서는 구두 논의 때문에 맥락 전달이 새는 문제를 겪고, 담당자를 태그해 텍스트로 남기는 방식으로 프로세스를 바꿨습니다.
De:caffeine에서는 비전공자 팀원을 1:1 멘토링해 스스로 기능을 구현할 수 있는 수준까지 끌어올렸습니다.`,
    },
    {
        keywords: ["ai", "에이아이", "claude", "gemini", "바이브", "도구"],
        answer: `AI는 결과를 맡기는 대상이 아니라 기준을 세워 쓰는 도구로 봅니다.
개인 프로젝트 PR마다 Gemini Code Assist 자동 리뷰 파이프라인을 걸어두고, 테이블탑 온라인은 Claude 중심 바이브 코딩으로 개발·운영 중입니다.
지금 이 챗도 제가 만든 my-little-agent로 브라우저 안에서 돌고 있습니다.`,
    },
];

export const FALLBACK_DEFAULT = `저는 신입 프론트엔드 개발자 강하영입니다.
사용자가 인식하지 못하는 지점까지 의도를 담아 만드는 것을 중요하게 생각합니다.
기술 스택, 프로젝트, 협업 방식 중에 궁금한 걸 물어봐 주세요.`;

export function fallbackAnswer(question: string) {
    const q = question.toLowerCase();
    const hit = FALLBACK_ANSWERS.find((entry) =>
        entry.keywords.some((keyword) => q.includes(keyword)),
    );
    return hit?.answer ?? FALLBACK_DEFAULT;
}
