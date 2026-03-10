export declare global {
    interface Skill {
        name: string;
        icon: string;
    }

    interface Stack {
        group: string;
        list: { name: string; description?: string }[];
    }
    interface Feature {
        title: string;
        body: string;
        img?: string;
        icon?: string;
    }
    interface ContributionSummary {
        title: string;
        percent: number;
        body: string;
    }
    interface Image {
        title: string;
        src: string;
    }
    interface Contribution {
        title: string;
        icon: string;
        list: Feature[];
        img?: Image[];
    }
    interface Learn {
        title: string;
        badge: string;
        problem?: string;
        solution?: string;
        learn: string;
        img?: Image[];
    }
    interface Project {
        id: string;
        title: string;
        image: string[];
        intro: string;
        period: string;
        description: string;
        type: string;
        team?: {
            frontend: number;
            backend?: number;
        };
        lead?: string;
        stacks: Stack[];
        link: {
            github: string;
            deploy: string;
        };
        features: Feature[];
        contributionSummary: ContributionSummary[];
        contributions: Contribution[];
        learn: Learn[];
    }
}
