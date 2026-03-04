export declare global {
    interface Skill {
        name: string;
        icon: string;
    }

    interface Stack {
        group: string;
        list: { name: string; description?: string }[];
    }

    interface Project {
        id: string;
        title: string;
        image: string;
        intro: string;
        description: string;
        type: string;
        lead?: string;
        stacks: Stack[];
        link: {
            github: string;
            deploy: string;
        };
        features: string[];
        contributions: string[];
        learn: string[];
    }
}
