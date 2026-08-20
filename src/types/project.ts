export interface StackGroup {
    group: string;
    list: Array<{ name: string; description?: string }>;
}

export interface Feature {
    title: string;
    body: string;
    img?: string;
    /** 모바일 화면 스크린샷이 따로 있는 경우 */
    mobileImg?: string;
    icon?: string;
}

export interface Shot {
    title: string;
    src: string;
}

export interface ContributionSummary {
    title: string;
    percent: number;
    body: string;
}

export interface Contribution {
    title: string;
    icon?: string;
    list: Array<{
        title: string;
        body: string;
        img?: string;
        mobileImg?: string;
    }>;
    img?: Array<Shot>;
}

export interface Learn {
    title: string;
    badge: string;
    /** 순수 학습 기록은 problem/solution 없이 learn만 갖는다 */
    problem?: string;
    solution?: string;
    learn: string;
    img?: Array<Shot>;
}

export interface Project {
    id: string;
    title: string;
    /** 대표 스크린샷. 없는 프로젝트는 텍스트 히어로로 렌더된다. */
    image: Array<string>;
    /** 목록에서 이미지 대신 트는 영상(webm 등 public 경로) */
    video?: string;
    intro: string;
    period: string;
    description: string;
    /** 목록 간단설명 아래 #태그 */
    tags?: Array<string>;
    /** 프로젝트 목록에서 태그 대신 보여주는 요약 */
    highlights: Array<string>;
    nav: { prev?: string; next?: string };
    type: string;
    team?: { frontend?: number; backend?: number };
    lead?: string;
    stacks: Array<StackGroup>;
    link: {
        github?: string;
        deploy?: string;
        npm?: string;
        preview?: string;
    };
    features?: Array<Feature>;
    contributionSummary: Array<ContributionSummary>;
    contributions: Array<Contribution>;
    learn: Array<Learn>;
}

/** 상세 페이지 없이 목록으로만 노출하는 작업물 */
export interface SideWork {
    title: string;
    intro: string;
    period: string;
    tags: Array<string>;
    /** 공개된 저장소가 없는 것도 있어서 없을 수 있다 */
    github?: string;
    deploy?: string;
    /** 사이트 안에 상세 페이지가 있는 경우 */
    to?: string;
}
