export const PROFILE = {
    name: "강하영",
    nameEn: "Hayoung Kang",
    role: "프론트엔드 개발자",
    tagline: "화면이 기다리게 두지 않습니다",
    intro: `사용자가 인식하지 못하는 지점까지 의도를 담아 만듭니다.
2024년 3월부터 13개의 프로젝트를 진행하며 TypeScript 기반 React·Next.js 환경에서 웹 서비스를 만들어 왔습니다.`,
    email: "rkdgkdudsam@naver.com",
    github: "https://github.com/Hayoung0708",
    resume: "https://github.com/Hayoung0708",
} as const;

/** About 섹션에서 탭으로 넘겨 보는 3가지 */
export const PRINCIPLES = [
    {
        no: "01",
        title: "불편함이 반복되지 않도록 도구를 만듭니다",
        emphasis: "불편함이 반복되지 않도록",
        body: `반복해야 하는 일은 한 번에 원하는 결과만 얻도록 자동화하고, 원하는 서비스나 기능이 없으면 직접 만듭니다. 불편을 감수하며 익숙해지기보다, 그 일을 대신할 것을 만드는 편이 효율적이기 때문입니다.`,
        proof: "서비스 · 프레임워크 · 테마",
    },
    {
        no: "02",
        title: "의도된 디테일에서 서비스의 신뢰도가 나옵니다",
        emphasis: "의도된 디테일",
        body: `플로우와 UI 디테일이 좋은 UX를 만들고, 그 경험이 사용자가 느끼는 서비스의 완성도를 결정한다고 생각합니다. 그래서 사용자가 인식하지 못하는 지점까지 의도를 담아 개발합니다.`,
        proof: "스켈레톤 UI · 낙관적 업데이트 · 사용자 테마 감지 · FOUC 제거",
    },
    {
        no: "03",
        title: "AI 결과물에도 기준이 필요하다고 생각합니다",
        emphasis: "AI 결과물에도 기준이 필요",
        body: `AI는 개발자가 다룰 수 있는 범위와 개발 속도를 크게 넓혀주었지만, 결과물의 검증과 판단은 결국 사람의 몫입니다. 기준을 먼저 문서로 정해두고, 결과물의 부족한 지점을 직접 짚어 다듬습니다.`,
        proof: "코드 컨벤션 문서화",
    },
] as const;

/** 프론트엔드 개발을 시작한 날 */
const CAREER_START = new Date(2024, 2, 1);

/** 오늘 기준 경력을 "n년 n개월"로. 매일 알아서 늘어난다. */
export function careerDuration(today = new Date()) {
    let months =
        (today.getFullYear() - CAREER_START.getFullYear()) * 12 +
        (today.getMonth() - CAREER_START.getMonth());
    if (today.getDate() < CAREER_START.getDate()) months -= 1;

    const years = Math.floor(months / 12);
    const rest = months % 12;

    if (years === 0) return `${rest}개월`;
    if (rest === 0) return `${years}년`;
    return `${years}년 ${rest}개월`;
}

// 프로젝트가 늘면 여기만 고치면 된다. 팀 8 + 개인 5 = 13.
export const STATS: Array<{ label: string; value: string }> = [
    { label: "프론트엔드 개발", value: careerDuration() },
    { label: "팀 프로젝트", value: "8개" },
    { label: "개인 프로젝트", value: "5개" },
    { label: "운영 중인 서비스", value: "2개" },
];

export const CERTIFICATES = [
    { name: "TOEIC Speaking IM1", date: "2025.01" },
    { name: "정보처리기사 필기", date: "2025.03" },
] as const;
