import portfolioSiteImg from "@/assets/images/portfolio-site.png";
import duncop1Img from "@/assets/images/duncop1.png";
import duncop2Img from "@/assets/images/duncop2.png";
import duncop3Img from "@/assets/images/duncop3.png";
import duncopFeature1Img from "@/assets/images/duncop_feature1.gif";
import duncopFeature2Img from "@/assets/images/duncop_feature2.gif";
import duncopFeature3Img from "@/assets/images/duncop_feature3.png";
import duncopFeature4Img from "@/assets/images/duncop_feature4.gif";
import duncopFeature5Img from "@/assets/images/duncop_feature5.gif";
import duncopFeature6Img from "@/assets/images/duncop_feature6.gif";
import jjimkongImg from "@/assets/images/jjimkong.png";
import studiumImg from "@/assets/images/studium.png";
import bookjeokbookjeokImg from "@/assets/images/bookjeokbookjeok.png";
import deCaffeineImg from "@/assets/images/de-caffeine.png";

export const MAIN_PROJECTS = [
    {
        id: "jjimkong",
        title: "찜콩",
        image: [jjimkongImg],
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
        image: [portfolioSiteImg],
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
        image: [duncop1Img, duncop2Img, duncop3Img],
        intro: "던전앤파이터 유저들을 위한 파티 컷 확인 서비스",
        period: "2026.02.02 - 2026.02.25",
        description: `DUNCOP(던캅) 은 던전앤파이터 유저들이 벞교(버프 교환) 파티를 구성할 때 발생하는 문제를 해결하기 위해 만들어진 서비스입니다.
던전앤파이터 유저들은 일반적으로 DUNDAM(던담) 데이터를 기준으로 캐릭터의 전투력(딜/버프력)을 확인한 뒤 구인·구직을 진행합니다.

하지만 기존 방식에는 몇 가지 한계가 존재합니다 :
    ◦ 던담에서 여러 캐릭터를 직접 확인해야 하므로, 해당 모험단이 컷 이상의 캐릭터를 충분히 보유하고 있는지 한눈에 파악하기 어려움
    ◦ 과거에 비매너 행동(컷 미달 잠입, 업둥이 먹튀 등)을 했던 유저를 사전에 확인하기 어려움

이러한 문제를 해결하기 위해 DUNCOP은 던담 기반 전투력 데이터와 자체 신고 DB를 결합하여 다음과 같은 기능을 제공합니다 :
    ◦ 입력한 딜러컷 / 버퍼컷 충족 여부 검증
    ◦ 신고 및 박제 이력 기반 불량 유저 식별`,
        type: "Solo Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    {
                        name: "TypeScript",
                        description: "language",
                    },
                    {
                        name: "Next",
                        description: "framework",
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
                group: "Routing",
                list: [
                    {
                        name: "App Route",
                    },
                ],
            },
            {
                group: "Database",
                list: [
                    {
                        name: "Supabase",
                    },
                ],
            },
            {
                group: "Data Fetching",
                list: [
                    {
                        name: "Fetch API",
                    },
                ],
            },
            {
                group: "Build",
                list: [
                    {
                        name: "Vite",
                    },
                ],
            },
            {
                group: "Deployment",
                list: [
                    {
                        name: "Vercel",
                    },
                ],
            },
            {
                group: "Tools",
                list: [
                    {
                        name: "VSCode",
                    },
                    {
                        name: "Git / GitHub",
                    },
                    {
                        name: "Figma",
                    },
                    {
                        name: "ESLint",
                    },
                    {
                        name: "Google Analytics",
                    },
                ],
            },
            {
                group: "Library",
                list: [
                    {
                        name: "lucide-react",
                    },
                    {
                        name: "react-toastify",
                    },
                ],
            },
        ],
        link: {
            github: "https://github.com/duncop/duncop",
            deploy: "https://duncop.vercel.app",
        },
        features: [
            {
                title: "모험단 검색",
                body: "해당 모험단이 컷에 맞는 캐릭터를 충분히 보유하고 있는지 한 눈에 볼 수 있습니다.",
                img: duncopFeature1Img,
                icon: "search",
            },
            {
                title: "변동 전투력 자동 계산",
                body: `"무리 사냥의 길잡이" 세트를 장착한 딜러나 인챈트리스같이 파티 인원 수에 따라 전투력이 변동될 경우, 자동으로 계산되어 검색 결과에 포함됩니다.`,
                img: duncopFeature2Img,
                icon: "calculator",
            },
            {
                title: "불량유저 식별",
                body: "Supabase DB에 저장된 불량 유저를 검색 결과에 포함시켜, 모험단명 옆에 붙은 뱃지로 쉽게 불량 유저를 식별할 수 있습니다.",
                img: duncopFeature3Img,
                icon: "triangle-alert",
            },
            {
                title: "불량유저 신고",
                body: "서비스 내 신고 기능으로 비매너 행위를 한 유저를 신고할 수 있습니다.",
                img: duncopFeature4Img,
                icon: "siren",
            },
            {
                title: "반응형 UI",
                body: "TailwindCSS를 활용해 모바일부터 데스크톱까지 다양한 디바이스에 대응하는 반응형 UI를 구현했습니다.",
                img: duncopFeature5Img,
                icon: "monitor-smartphone",
            },
            {
                title: "다크모드",
                body: `TailwindCSS를 활용해 부드럽게 토글되는 다크모드를 구현했습니다.
첫 진입시 테마는 사용자의 시스템(또는 브라우저) 테마로 적용됩니다.`,
                img: duncopFeature6Img,
                icon: "moon",
            },
        ],
        contributions: [],
        learn: [],
    },
    {
        id: "studium",
        title: "Studium",
        image: [studiumImg],
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
        image: [bookjeokbookjeokImg],
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
        image: [deCaffeineImg],
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
