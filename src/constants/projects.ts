import portfolioSiteImg from "@/assets/images/portfolio-site.png";
import duncopImg from "@/assets/images/duncop.png";
import jjimkongImg from "@/assets/images/jjimkong.png";
import studiumImg from "@/assets/images/studium.png";
import bookjeokbookjeokImg from "@/assets/images/bookjeokbookjeok.png";
import deCaffeineImg from "@/assets/images/de-caffeine.png";

export const MAIN_PROJECTS = [
    {
        id: "jjimkong",
        title: "찜콩",
        image: jjimkongImg,
        intro: "리뷰 클렌징 없는 나만의 솔직 리뷰 저장소",
        period: "2025.10.02 - 개발중",
        description: "",
        type: "Team Project",
        team: {
            frontend: 1,
            backend: 1,
        },
        lead: "Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "React",
                    },
                ],
            },
        ],
        link: {
            github: "",
            deploy: "",
        },
        features: [],
        contributions: [],
        learn: [],
    },
    {
        id: "portfolio-site",
        title: "Portfolio Site",
        image: portfolioSiteImg,
        intro: "강하영 포트폴리오 사이트",
        period: "2026.02.26 - 개발중",
        description: "",
        type: "Solo Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "React",
                    },
                ],
            },
            {
                group: "Routing",
                list: [
                    {
                        name: "React Router",
                    },
                ],
            },
            {
                group: "Styling",
                list: [
                    {
                        name: "TailwindCSS",
                    },
                ],
            },
            {
                group: "Deployment",
                list: [
                    {
                        name: "Vite",
                    },
                ],
            },
            {
                group: "Tools",
                list: [
                    {
                        name: "Vite",
                        description: "Deployment",
                    },
                ],
            },
            {
                group: "Librarys",
                list: [
                    {
                        name: "Vite",
                        description: "Deployment",
                    },
                ],
            },
        ],
        link: {
            github: "",
            deploy: "",
        },
        features: [],
        contributions: [],
        learn: [],
    },
    {
        id: "duncop",
        title: "DUNCOP",
        image: duncopImg,
        intro: "던전앤파이터 유저들을 위한 파티 컷 확인 서비스",
        period: "2026.02.02 - 2026.02.25",
        description: "",
        type: "Solo Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "Next",
                    },
                ],
            },
        ],
        link: {
            github: "",
            deploy: "",
        },
        features: [],
        contributions: [],
        learn: [],
    },
    {
        id: "studium",
        title: "Studium",
        image: studiumImg,
        intro: "목표 기반 스터디 관리 플랫폼",
        period: "2025.06.27 - 2025.08.24",
        description: "",
        type: "Team Project",
        lead: "FrontEnd",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "Next",
                    },
                ],
            },
        ],
        link: {
            github: "",
            deploy: "",
        },
        features: [],
        contributions: [],
        learn: [],
    },
    {
        id: "bookjeokbookjeok",
        title: "북적북적",
        image: bookjeokbookjeokImg,
        intro: "독서를 기록하고 공유하는 독서 커뮤니티 플랫폼",
        period: "2025.05.30 - 2025.06.19",
        description: "",
        type: "Team Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "React",
                    },
                ],
            },
        ],
        link: {
            github: "",
            deploy: "",
        },
        features: [],
        contributions: [],
        learn: [],
    },
    {
        id: "de-caffeine",
        title: "De:caffeine",
        image: deCaffeineImg,
        intro: "개발자들을 위한 커뮤니티 플랫폼",
        period: "2025.04.25 - 2025.05.19",
        description: "",
        type: "Team Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                    },
                    {
                        name: "React",
                    },
                ],
            },
        ],
        link: {
            github: "",
            deploy: "",
        },
        features: [],
        contributions: [],
        learn: [],
    },
];
