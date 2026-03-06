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
        contributionSummary: [],
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
        contributionSummary: [],
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
                body: "DUNDAM API 기반으로 해당 모험단이 컷에 맞는 캐릭터를 충분히 보유하고 있는지 한 눈에 볼 수 있습니다.",
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
                body: "TailwindCSS를 활용해 부드럽게 토글되는 다크모드를 구현했습니다. 첫 진입시 테마는 사용자의 시스템(또는 브라우저) 테마로 적용됩니다.",
                img: duncopFeature6Img,
                icon: "moon",
            },
        ],
        contributionSummary: [
            {
                title: "기획 및 설계",
                percent: 100,
                body: `◦ 프로젝트 기획 및 UI/UX 디자인
◦ 프로젝트 아키텍쳐 설계`,
            },
            {
                title: "개발 구현",
                percent: 100,
                body: `◦ Next.js 기반 프론트엔드 전반 구현
◦ Supabase 기반 DB 구축 및 API 연동`,
            },
        ],
        contributions: [
            {
                title: "기획 및 설계",
                icon: "drafting-compass",
                list: [
                    {
                        title: "기획 및 UI/UX 디자인",
                        body: `◦ 프로젝트 전체 기획
◦ Figma를 활용해 UI/UX 디자인`,
                    },
                    {
                        title: "프로젝트 구조 설계",
                        body: `◦ 소규모 프로젝트로 빠른 개발 속도가 중요했기 때문에 기본적으로 Layer-based Structure를 채택, components 영역은 Feature-based Structure로 관리하는 하이브리드 구조로 프로젝트 구조 설계`,
                    },
                ],
                img: "",
            },
            {
                title: "프론트엔드 개발 및 배포",
                icon: "layout-template",
                list: [
                    {
                        title: "프론트엔드 구현",
                        body: `◦ TypeScript 기반 Next.js 환경에서 모든 페이지 퍼블리싱
◦ DUNDAM API를 가공하고 출력하는 로직 구현
◦ 웹 접근성을 고려하여 semantic tag를 적극 활용해 키보드만으로도 모든 서비스를 이용할 수 있도록 구현
◦ TailwindCSS를 활용해 모바일부터 PC까지 대응하는 반응형 UI, 다크 모드 구현`,
                    },
                    {
                        title: "API 연동 및 에러 핸들링",
                        body: `◦ JavaScript의 fetch API를 활용해 백엔드 API 연동
◦ try/catch와 throw를 활용한 에러 핸들링 적용
◦ 예외 상황 발생 시 에러 상태를 UI에 반영해 사용자에게 상황을 안내할 수 있도록 구현`,
                    },
                    {
                        title: "프로젝트 배포",
                        body: `◦ Vercel을 활용해 프론트엔드 배포`,
                    },
                ],
                img: "",
            },
            {
                title: "데이터베이스 설계 및 구축",
                icon: "database",
                list: [
                    {
                        title: "데이터베이스 설계 및 구축",
                        body: `◦ 서비스에 필요한 데이터베이스 테이블 구조 설계
◦ Supabase Database를 활용해 데이터베이스 구축
◦ Supabase Storage 기능을 활용해 이미지 파일을 저장하고 관리할 수 있도록 구현
◦ RLS(Row Level Security)를 적용해 사용자 권한에 따라 데이터 접근이 제한되도록 설정하여 보안 강화`,
                    },
                    {
                        title: "초기 데이터 삽입",
                        body: `◦ 2024년 12월부터 던전앤파이터 커뮤니티에 박제되어있는 비매너 유저들을 데이터베이스에 삽입`,
                    },
                ],
                img: "",
            },
            {
                title: "사용자 경험(UX) 개선",
                icon: "user-star",
                list: [
                    {
                        title: "다크모드 사용자를 위한 시스템 테마 감지",
                        body: `◦ 사용자의 시스템 테마(prefers-color-scheme)를 감지해 첫 진입시 서비스의 테마가 결정되도록 구현
◦ 페이지 로드 과정에서 라이트 테마가 잠깐 표시되는 깜빡임이 발생하지 않도록 HTML 단계에서 테마를 미리 적용하도록 처리`,
                    },
                    {
                        title: "모바일 UI 데이터 최적화",
                        body: `◦ 모바일 레이아웃에서 과도한 스크롤이 발생하지 않도록 UI에 표시되는 데이터 간소화 (캐릭터 목록을 노출하지 않도록 설계)`,
                    },
                    {
                        title: "요청 처리 개선 및 사용자 피드백 UI 제공",
                        body: `◦ 폼 제출 시 useState를 활용해 버튼이 여러 번 눌려 중복 API가 호출되는 문제 방지
◦ Toast UI를 활용해 요청 성공 및 실패 여부를 사용자에게 즉시 안내하도록 구현`,
                    },
                ],
                img: "",
            },
            {
                title: "검색엔진 최적화",
                icon: "search",
                list: [
                    {
                        title: "SEO를 고려한 기술 선택",
                        body: `◦ 검색 엔진 노출을 고려해 SSR을 지원하는 Next.js 프레임워크 선택`,
                    },
                    {
                        title: "메타데이터 및 구조 최적화",
                        body: `◦ meta 태그와 Open Graph 태그를 작성하여 검색 결과와 SNS 공유 시 표시되는 정보 최적화
◦ viewport 설정 및 semantic HTML 구조를 적용해 검색 엔진이 페이지 구조를 보다 명확하게 인식할 수 있도록 개선`,
                    },
                ],
                img: "",
            },
            {
                title: "실제 서비스 운영",
                icon: "activity",
                list: [
                    {
                        title: "서비스 배포 및 운영",
                        body: `◦ 가비아에서 도메인을 구매한 후 2026년 2월 25일 실제 서비스를 배포 및 운영
◦ 트래픽 증가 상황에서도 서버 장애 없이 안정적으로 서비스 운영`,
                    },
                    {
                        title: "서비스 홍보 및 이용자 집계",
                        body: `◦ Google Analytics를 활용해 사용자 유입 및 이용 통계 수집
◦ 커뮤니티를 통해 플랫폼 홍보, 하루 동안 약 500명의 사용자와 약 1,400회의 페이지 방문을 기록`,
                    },
                ],
                img: "",
            },
        ],
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
        contributionSummary: [],
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
        contributionSummary: [],
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
        contributionSummary: [],
        contributions: [],
        learn: [],
    },
];
