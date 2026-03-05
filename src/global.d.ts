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
        img: string;
        icon: string;
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
            backend: number;
        };
        lead?: string;
        stacks: Stack[];
        link: {
            github: string;
            deploy: string;
        };
        features: Feature[];
        contributions: string[];
        learn: string[];
    }
}
