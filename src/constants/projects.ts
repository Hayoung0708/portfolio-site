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
import duncopEx1Img from "@/assets/images/duncop_ex1.png";
import duncopEx2Img from "@/assets/images/duncop_ex2.png";
import duncopEx3Img from "@/assets/images/duncop_ex3.png";
import jjimkongImg from "@/assets/images/jjimkong.png";
import studiumImg from "@/assets/images/studium.png";
import bookjeokbookjeok1Img from "@/assets/images/bookjeokbookjeok1.png";
import bookjeokbookjeok2Img from "@/assets/images/bookjeokbookjeok2.png";
import bookjeokbookjeok3Img from "@/assets/images/bookjeokbookjeok3.png";
import bookjeokbookjeok4Img from "@/assets/images/bookjeokbookjeok4.png";
import bookjeokbookjeok5Img from "@/assets/images/bookjeokbookjeok5.png";
import bookjeokbookjeokFeature1Img from "@/assets/images/bookjeokbookjeok_feature1.png";
import bookjeokbookjeokFeature2Img from "@/assets/images/bookjeokbookjeok_feature2.png";
import bookjeokbookjeokFeature3Img from "@/assets/images/bookjeokbookjeok_feature3.gif";
import bookjeokbookjeokFeature4Img from "@/assets/images/bookjeokbookjeok_feature4.png";
import bookjeokbookjeokFeature5Img from "@/assets/images/bookjeokbookjeok_feature5.png";
import deCaffeine1Img from "@/assets/images/de-caffeine1.png";
import deCaffeine2Img from "@/assets/images/de-caffeine2.png";
import deCaffeine3Img from "@/assets/images/de-caffeine3.png";
import deCaffeineFeature1Img from "@/assets/images/de-caffeine_feature1.gif";
import deCaffeineFeature2Img from "@/assets/images/de-caffeine_feature2.png";
import deCaffeineFeature3Img from "@/assets/images/de-caffeine_feature3.png";
import deCaffeineFeature4Img from "@/assets/images/de-caffeine_feature4.gif";
import deCaffeineFeature5Img from "@/assets/images/de-caffeine_feature5.png";
import deCaffeineFeature6Img from "@/assets/images/de-caffeine_feature6.gif";
import deCaffeineFeature7Img from "@/assets/images/de-caffeine_feature7.gif";
import deCaffeineEx1Img from "@/assets/images/de-caffeine_ex1.gif";
import deCaffeineEx2Img from "@/assets/images/de-caffeine_ex2.png";
import deCaffeineEx3Img from "@/assets/images/de-caffeine_ex3.png";
import deCaffeineEx4Img from "@/assets/images/de-caffeine_ex4.png";

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
                        title: "요청 처리 개선 및 사용자 피드백 UI 제공",
                        body: `◦ 폼 제출 시 useState를 활용해 버튼이 여러 번 눌려 중복 API가 호출되는 문제 방지
◦ Toast UI를 활용해 요청 성공 및 실패 여부를 사용자에게 즉시 안내하도록 구현`,
                    },
                    {
                        title: "모바일 UI 데이터 간소화",
                        body: `◦ 모바일 레이아웃에서 과도한 스크롤이 발생하지 않도록 UI에 표시되는 데이터 간소화 (캐릭터 목록을 노출하지 않도록 설계)`,
                        img: duncopFeature5Img,
                    },
                ],
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
                img: [
                    { title: "Google 검색 결과", src: duncopEx1Img },
                    { title: "카카오톡 Open Graph", src: duncopEx2Img },
                ],
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
                img: [{ title: "Google Analytics 그래프", src: duncopEx3Img }],
            },
        ],
        learn: [
            {
                title: "외부 API CORS 우회",
                badge: "Trouble Shooting",
                problem: `DUNDAM API 연동 중, 허용된 도메인('dundam.xyz')이 아닌 곳에서 브라우저가 직접 요청을 보낼 때 차단되는 문제 발생`,
                solution: `◦ Postman에서는 정상 호출되나 브라우저에서만 실패하는 현상을 통해 브라우저 보안 정책이 원인임을 파악
◦ Next.js API Route를 활용한 서버 프록시 구조로, 브라우저가 아닌 서버 단에서 API를 호출하도록 우회`,
                learn: `◦ CORS 정책이 브라우저 단의 제약임을 체득
◦ Next.js API Route를 활용한 서버 프록시(BFF) 패턴 구현 경험
◦ 클라이언트와 서버 간의 책임 분리`,
            },
            {
                title: "비공식 API의 지식재산권",
                badge: "Ethic",
                problem: `프로젝트 배포 후 커뮤니티 피드백을 통해, 사전 협의되지 않은 외부 서비스(DUNDAM)의 API를 활용하는 것이 지식재산권 위배 소지가 있음을 인지`,
                solution: `◦ 문제의 소지를 확인한 즉시, 데이터 원작자의 권리를 존중하여 배포된 서비스를 내리는 빠른 조치
◦ DUNDAM 측에 API 무단 사용에 대한 정중한 사과문 전달, 정식 API 사용 권한 및 협업을 요청하는 제안서 발송`,
                learn: `◦ 기술적 구현 가능성과 윤리적/법적 허용 여부는 다르다는 점을 깊이 체감
◦ 개발자로서 지식재산권(IP)을 존중하고 책임감 있게 데이터를 다루는 태도 학습
◦ 개발 과정의 실수를 회피하지 않고, 서비스 중단 및 대안 제시(협업 제안)를 통해 책임감 있게 대처하는 문제 해결 역량 성장`,
            },
        ],
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
        image: [
            bookjeokbookjeok1Img,
            bookjeokbookjeok2Img,
            bookjeokbookjeok3Img,
            bookjeokbookjeok4Img,
            bookjeokbookjeok5Img,
        ],
        intro: "독서를 기록하고 공유하는 독서 커뮤니티 플랫폼",
        period: "2025.05.30 - 2025.06.19",
        description: `북적북적은 독서 다이어리를 작성하고, 관심사에 맞는 북클럽을 개설하거나 참여하며, 자유롭게 의견을 나누는 게시판 활동을 통해 다른 독자들과 소통할 수 있는 독서 커뮤니티 플랫폼입니다.

알라딘 오픈 API를 활용해 실시간 베스트셀러, 연관 도서, 도서 검색 기능을 제공하여 사용자들이 다양한 책 정보를 손쉽게 확인하고 공유할 수 있도록 지원합니다.

◦ 현재는 알라딘 API KEY 및 Supabase 플랜이 만료돼 데이터가 보여지지 않습니다`,
        type: "Team Project",
        team: {
            frontend: 5,
        },
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
                group: "Styling",
                list: [
                    {
                        name: "TailwindCSS",
                    },
                ],
            },
            {
                group: "State Management",
                list: [
                    {
                        name: "Zustand",
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
                        name: "Axios",
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
                        name: "Netlify",
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
                        name: "Notion",
                    },
                    {
                        name: "Slack",
                    },
                ],
            },
            {
                group: "Library",
                list: [
                    {
                        name: "mui",
                    },
                    {
                        name: "react-icons",
                    },
                    {
                        name: "react-toastify",
                    },
                    {
                        name: "dayjs",
                    },
                ],
            },
        ],
        link: {
            github: "https://github.com/Programmers-FE5-VueFinder/bookjeokbookjeok",
            deploy: "https://bookjeokbookjeok.netlify.app/",
        },
        features: [
            {
                title: "로그인 및 회원가입",
                body: "서비스 내 로그인 기능 및 소셜 로그인을 구현하며 사용자 인증을 통해 권한을 분리했습니다. 비로그인 사용자는 게시물 열람만 가능하며, 핵심 기능은 로그인 후 이용할 수 있습니다.",
                img: bookjeokbookjeokFeature1Img,
                icon: "user-key",
            },
            {
                title: "게시물 & 댓글 작성 및 좋아요",
                body: "독서 다이어리 또는 자유 게시판에 게시물을 작성할 수 있으며, 댓글 및 대댓글, 좋아요 기능을 통해 사용자 간 자유로운 의견 교환이 가능합니다.",
                img: bookjeokbookjeokFeature2Img,
                icon: "heart-handshake",
            },
            {
                title: "도서 상세 정보 제공",
                body: "알라딘 API 및 자체 데이터베이스를 활용해 도서에 대한 후기와 평균 별점, 관련 도서, 해당 도서로 작성된 게시물 등의 정보를 제공합니다.",
                img: bookjeokbookjeokFeature3Img,
                icon: "book-open-text",
            },
            {
                title: "북클럽 및 실시간 채팅",
                body: "원하는 주제로 활동하는 독서모임인 북클럽에서 승인된 유저들끼리 소통할 수 있으며, 실시간 채팅을 할 수 있는 단체 채팅방을 제공합니다.",
                img: bookjeokbookjeok5Img,
                icon: "message-circle-more",
            },
            {
                title: "유저 페이지",
                body: "개인 유저 페이지에서 작성한 글, 댓글, 좋아요 내역을 한눈에 모아볼 수 있습니다. 관심 있는 사용자를 팔로우/언팔로우하며 네트워킹을 형성할 수 있습니다.",
                img: bookjeokbookjeokFeature4Img,
                icon: "user-plus",
            },
            {
                title: "알림",
                body: "내 게시물에 달린 댓글, 좋아요, 새로운 팔로우 등 서비스 내 주요 상호작용 발생 시 사용자에게 알림을 제공합니다.",
                img: bookjeokbookjeokFeature5Img,
                icon: "bell",
            },
        ],
        contributionSummary: [
            {
                title: "기획 및 설계",
                percent: 40,
                body: `◦ 프로젝트 기획 참여
◦ 데이터 구조 설계`,
            },
            {
                title: "개발 구현",
                percent: 25,
                body: `◦ React 기반 프론트엔드 구현
◦ Supabase 기반 백엔드 구축 및 API 연동`,
            },
        ],
        contributions: [
            {
                title: "기획 및 설계",
                icon: "drafting-compass",
                list: [
                    {
                        title: "기획",
                        body: `◦ 프로젝트 기획 참여`,
                    },
                ],
            },
            {
                title: "프론트엔드 개발",
                icon: "layout-template",
                list: [
                    {
                        title: "프론트엔드 구현",
                        body: `◦ TypeScript 기반 React 환경에서 채팅 페이지, 알림 모달 퍼블리싱
◦ 북클럽 페이지 리팩토링 및 북클럽 생성, 수정, 삭제 로직 구현
◦ 북클럽 모집글 등록, 신청/승인/거절/탈퇴 등 북클럽 참여 및 탈퇴 기능 구현
◦ 알림 읽음 처리 / 모두 읽음 처리 / 알림 유형별 멘트 출력 및 링크 이동 등 전반적인 알림 시스템 구현`,
                    },
                    {
                        title: "실시간 채팅 기능 구현",
                        body: `◦ Supabase의 Realtime 기능을 활용해 실시간 단체 채팅 기능 구현
◦ 채팅 출력 및 전송 로직 구현으로 실시간 커뮤니케이션 환경 구축`,
                    },
                ],
            },
            {
                title: "백엔드 설계 및 구축",
                icon: "database",
                list: [
                    {
                        title: "데이터베이스 설계 및 구축",
                        body: `◦ 서비스에 필요한 데이터베이스 테이블 구조 설계
◦ Supabase Database를 활용해 데이터베이스 구축
◦ RLS(Row Level Security)를 적용해 사용자 권한에 따라 데이터 접근이 제한되도록 설정하여 보안 강화
◦ 데이터 출력 및 제어를 위한 SQL 쿼리문 작성`,
                    },
                    {
                        title: "소셜 로그인 구현",
                        body: `◦ Oauth 기능을 활용해 구글, 카카오 소셜 로그인 구현
◦ 소셜 로그인 시, 이미 해당 이메일을 사용하고 있는 서비스 내 계정이 있다면 연동되게끔 구현`,
                    },
                ],
            },
        ],
        learn: [
            {
                title: "데이터베이스와 데이터통신의 이해",
                badge: "Learn",
                learn: `◦ Supabase를 처음 사용해보면서 데이터베이스 아키텍처 설계부터 쿼리 작성까지의 RDBMS 기반 데이터베이스를 구축하며 데이터 흐름에 대한 이해도 향상
◦ Realtime 기능을 적용하며 실시간 데이터 동기화 및 반영에 대한 경험`,
            },
            {
                title: "레거시 코드의 존중과 개선",
                badge: "Refactoring",
                problem: `다른 팀원이 작성한 퍼블리싱 코드의 컴포넌트화 부재 및 잦은 코드 중복으로 인해, 기능 수정 시 어려움 발생`,
                solution: `◦ 코드를 전면 재작성하기보다 기존 구현 의도와 코드를 최대한 존중하면서 반복되는 부분을 컴포넌트 단위로 분리
◦ 불필요하게 중복된 코드을 제거하고 전체 구조를 단순화하여 코드의 가독성과 재사용성 향상`,
                learn: `◦ 타인의 코드를 분석하고 이해하는 코드 리뷰 및 협업 역량 강화
◦ 단순히 '작동하는 코드'를 넘어 '유지보수하기 좋은 코드'로 개선하는 리팩토링의 가치 체득`,
            },
            {
                title: "데이터 접근 권한 이슈",
                badge: "Security",
                problem: `프론트엔드 로직 및 네트워크 호출에 이상이 없음에도 데이터 패칭이 거부되거나 조회가 되지 않는 문제 발생`,
                solution: `◦ Supabase에서 사용자 권한에 맞는 RLS(Row Level Security) Policy 추가`,
                learn: `◦ 백엔드에서 제공되는 데이터의 구조와 권한 설정에 대한 깊은 이해
◦ 데이터 접근 권한과 인증/인가 프로세스에 대한 실무적 감각 습득`,
            },
        ],
    },
    {
        id: "de-caffeine",
        title: "De:caffeine",
        image: [deCaffeine1Img, deCaffeine2Img, deCaffeine3Img],
        intro: "개발자들을 위한 커뮤니티 플랫폼",
        period: "2025.04.25 - 2025.05.19",
        description: `de:caffeine(디:카페인)은 개발자들이 자신의 개발 일지를 SNS처럼 공유하고, 서로의 질문과 답변을 주고받을 수 있는 개발자 커뮤니티 플랫폼입니다.

◦ 프로그래머스 OPEN API 사용 (현재는 프로그래머스 API 제공 기간이 끝나 데이터가 보여지지 않습니다)`,
        type: "Team Project",
        team: {
            frontend: 5,
        },
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
                group: "Styling",
                list: [
                    {
                        name: "TailwindCSS",
                    },
                ],
            },
            {
                group: "State Management",
                list: [
                    {
                        name: "Zustand",
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
                group: "Data Fetching",
                list: [
                    {
                        name: "Axios",
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
                        name: "Netlify",
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
                        name: "Slack",
                    },
                    {
                        name: "Notion",
                    },
                ],
            },
            {
                group: "Library",
                list: [
                    {
                        name: "react-toastify",
                    },
                ],
            },
        ],
        link: {
            github: "https://github.com/de-caffeine/de-caffeine",
            deploy: "https://funny-crumble-1516b7.netlify.app/",
        },
        features: [
            {
                title: "로그인 및 회원가입",
                body: "서비스 내 로그인 기능을 구현하며 사용자 인증을 통해 권한을 분리했습니다. 비로그인 사용자는 게시물 열람만 가능하며, 게시물 작성 등 핵심 기능은 로그인 후 이용할 수 있습니다.",
                img: deCaffeineFeature1Img,
                icon: "user-key",
            },
            {
                title: "게시물 & 댓글 작성 및 좋아요",
                body: "게시물 및 댓글 작성 기능을 통해 사용자 간 자유로운 의견 교환이 가능하며, '좋아요' 기능을 제공하여 콘텐츠에 대한 활발한 상호작용을 유도했습니다.",
                img: deCaffeineFeature2Img,
                icon: "heart-handshake",
            },
            {
                title: "알림",
                body: "내 게시물에 달린 댓글, 좋아요, 새로운 팔로우 등 서비스 내 주요 상호작용 발생 시 사용자에게 알림을 제공합니다.",
                img: deCaffeineFeature3Img,
                icon: "bell",
            },
            {
                title: "실시간 채팅",
                body: "실시간 채팅 기능을 도입하여, 다른 사용자들과 즉각적이고 원활한 1:1 또는 그룹 소통이 가능하도록 지원합니다.",
                img: deCaffeineFeature4Img,
                icon: "message-circle-more",
            },
            {
                title: "유저 페이지",
                body: "개인 유저 페이지에서 작성한 글, 댓글, 좋아요 내역을 한눈에 모아볼 수 있습니다. 관심 있는 사용자를 팔로우/언팔로우하며 네트워킹을 형성할 수 있습니다.",
                img: deCaffeineFeature5Img,
                icon: "user-plus",
            },
            {
                title: "반응형 UI",
                body: "ailwindCSS를 활용해 모바일부터 데스크톱까지 다양한 디바이스에 대응하는 반응형 UI를 구현했습니다.",
                img: deCaffeineFeature6Img,
                icon: "monitor-smartphone",
            },
            {
                title: "다크모드",
                body: "TailwindCSS를 활용해 부드럽게 토글되는 다크모드를 구현했습니다.",
                img: deCaffeineFeature7Img,
                icon: "moon",
            },
        ],
        contributionSummary: [
            {
                title: "기획 및 설계",
                percent: 90,
                body: `◦ 프로젝트 기획 및 UI/UX 디자인
◦ 프로젝트 아키텍쳐 설계`,
            },
            {
                title: "개발 구현",
                percent: 40,
                body: `◦ React 기반 프론트엔드 구현
◦ UX 개선 및 배포`,
            },
        ],
        contributions: [
            {
                title: "기획 및 설계",
                icon: "drafting-compass",
                list: [
                    {
                        title: "기획 및 UI/UX 디자인",
                        body: `◦ 프로젝트 기획 주도
◦ Figma를 활용해 UI/UX 디자인`,
                    },
                    {
                        title: "프로젝트 구조 설계",
                        body: `◦ atomic 디자인 패턴 기반으로 페이지 단위의 컴포넌트 구조를 설계하여, 유지보수가 쉽고 재사용 가능한 아키텍처 구현`,
                    },
                ],
            },
            {
                title: "프론트엔드 개발 및 배포",
                icon: "layout-template",
                list: [
                    {
                        title: "라우팅 구조 설계",
                        body: `◦ react-router-dom을 활용해 동적 라우팅 구조 설계
◦ 경로 오류 발생 시 404 에러 페이지로 자연스러운 안내와 이탈 최소화 유도`,
                    },
                    {
                        title: "프론트엔드 구현",
                        body: `◦ TypeScript 기반 React 환경에서 메인, 커뮤니티, 코드질문, 검색, 404 에러 페이지 및 알림 모달 퍼블리싱
◦ 좋아요 순, 최신 순 정렬 로직 구현으로 포스트 목록 동적 출력
◦ 좋아요 로직 구현
◦ 사용자 입력 기반 필터링 로직으로 검색 기능 구현
◦ 알림 필터링, 읽음 처리 로직 구현
◦ Zustand와 LocalStorage를 활용한 로그인 전역 상태 관리 및 세션 유지 처리`,
                    },
                    {
                        title: "프로젝트 배포",
                        body: `◦ Netlify을 활용해 프론트엔드 배포`,
                    },
                ],
            },
            {
                title: "사용자 경험(UX) 개선",
                icon: "user-star",
                list: [
                    {
                        title: "낙관적 업데이트 적용",
                        body: `◦ 좋아요 아이콘 클릭 시 서버 응답 지연으로 인해 발생하는 UI 답답함을 낙관적 업데이트 로직으로 해결하여 즉각적인 클릭 피드백 구현`,
                    },
                    {
                        title: "스켈레톤 UI 적용",
                        body: `◦ 데이터 로딩 중 발생하는 빈 화면 대신 스켈레톤 컴포넌트를 먼저 렌더링하여, 체감 대기 시간을 단축하고 시각적 안정감 제공`,
                        img: deCaffeineEx1Img,
                    },
                    {
                        title: "동적 레이아웃 구현",
                        body: `◦ 브라우저 화면 너비(Viewport) 변화를 감지해 한 줄에 렌더링할 포스트 개수를 동적으로 계산하는 로직을 구현하여, 더 매끄러운 반응형 화면 구현`,
                        img: deCaffeineFeature6Img,
                    },
                ],
            },
        ],
        learn: [
            {
                title: "프로젝트의 모든 프로세스 경험",
                badge: "Learn",
                learn: `◦ 기획부터 디자인, 개발, 배포까지 전 과정을 직접 기여하며 프로젝트 전반의 개발 프로세스와 협업 흐름 이해
◦ TypeScript 기반 React를 활용해 프로젝트를 완성하는 과정에서 기술 역량 성장`,
            },
            {
                title: "OS별 텍스트 렌더링 차이 개선",
                badge: "UI/UX",
                problem: `Windows와 Mac OS 환경의 폰트 렌더링 방식 차이로 인해 동일한 폰트임에도 다르게 출력되는 현상 발견`,
                solution: `◦ CSS 'transform' 속성을 이용해 텍스트를 미세하게 회전시켜 안티앨리어싱 효과 시도`,
                learn: `◦ OS에 따른 그래픽 렌더링 원리와 안티앨리어싱에 대한 개념 학습
◦ 단순한 기능 구현을 넘어, 다양한 사용자 환경(OS 및 브라우저)에서 일관된 시각적 경험을 제공하는 디테일의 중요성 체감`,
                img: [
                    { title: "Window 개선 전", src: deCaffeineEx2Img },
                    { title: "Window 개선 후", src: deCaffeineEx3Img },
                    { title: "Mac", src: deCaffeineEx4Img },
                ],
            },
        ],
    },
];
