import portfolioSiteImg from "@/assets/images/portfolio-site.png";
import duncop1Img from "@/assets/images/duncop1.png";
import duncop2Img from "@/assets/images/duncop2.png";
import duncop3Img from "@/assets/images/duncop3.png";
import duncopFeature1Img from "@/assets/images/duncop_feature1.png";
import duncopFeature2Img from "@/assets/images/duncop_feature2.gif";
import duncopFeature3Img from "@/assets/images/duncop_feature3.png";
import duncopFeature4Img from "@/assets/images/duncop_feature4.gif";
import duncopFeature5Img from "@/assets/images/duncop_feature5.gif";
import duncopFeature6Img from "@/assets/images/duncop_feature6.gif";
import duncopEx1Img from "@/assets/images/duncop_ex1.png";
import duncopEx2Img from "@/assets/images/duncop_ex2.png";
import duncopEx3Img from "@/assets/images/duncop_ex3.png";
// import jjimkongImg from "@/assets/images/jjimkong.png";
import studium1Img from "@/assets/images/studium1.png";
import studium2Img from "@/assets/images/studium2.png";
import studium3Img from "@/assets/images/studium3.png";
import studium4Img from "@/assets/images/studium4.png";
import studium5Img from "@/assets/images/studium5.png";
import studium6Img from "@/assets/images/studium6.png";
import studiumFeature1Img from "@/assets/images/studium_feature1.gif";
import studiumFeature2Img from "@/assets/images/studium_feature2.gif";
import studiumFeature3Img from "@/assets/images/studium_feature3.gif";
import studiumFeature4Img from "@/assets/images/studium_feature4.gif";
import studiumFeature5Img from "@/assets/images/studium_feature5.gif";
import studiumFeature6Img from "@/assets/images/studium_feature6.gif";
import studiumFeature7Img from "@/assets/images/studium_feature7.gif";
import studiumEx1Img from "@/assets/images/studium_ex1.png";
import studiumExImg from "@/assets/images/studiums.png";
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
import type { Project, SideWork } from "@/types/project";

export const MAIN_PROJECTS: Array<Project> = [
    {
        id: "tabletop-online",
        title: "테이블탑 온라인",
        image: [],
        video: "/videos/tabletop-online.webm",
        intro: "브라우저에서 즐기는 클래식 테이블탑 게임",
        tags: ["바이브 코딩", "Next.js"],
        highlights: [
            "Claude 기반 바이브 코딩으로 Next.js·Node.js 환경에서 개발",
            "AI가 만든 애니메이션의 어색한 부분을 잡아 자연스러운 움직임으로 개선",
            "코딩 컨벤션을 문서화해 AI 산출물에도 일관된 코드 스타일 유지",
            "프로젝트 기획 및 설계",
        ],
        period: "2026.08.05 - 운영중",
        description: `카드게임을 하려면 사람이 한자리에 모여야 한다는 제약이 있습니다. 기존에 이미 있던 온라인 서비스들은 원하는 게임이 없거나, 화면 구성과 조작 흐름이 불편해 사용하기 어려웠습니다.

이러한 생각에서 시작된 테이블탑 온라인은 가볍게 브라우저에서 접속해 바로 함께 게임을 즐기는 것을 목표로 만든 서비스입니다. 오프라인에서 마주 앉아 하던 경험을 옮겨오는 것이 목적이었기에 화면 안에서 발생하는 반응과 몰입감을 중요하게 다뤘습니다.`,
        features: [
            {
                title: "회원가입 없는 게스트 입장",
                icon: "user-plus",
                img: "/features/tabletop-guest.gif",
                body: "회원가입 없이 쿠키 기반 익명 ID로 바로 입장해 게임을 시작할 수 있습니다.",
            },
            {
                title: "Socket.IO 기반 실시간 멀티플레이",
                icon: "activity",
                img: "/features/tabletop-multiplay.gif",
                body: "Socket.IO 기반으로 모든 플레이어의 화면이 즉시 동기화되어, 야찌, 싯헤드, 원카드 등 여러 게임을 함께 즐길 수 있습니다.",
            },
            {
                title: "실시간 감정표현",
                icon: "message-circle-more",
                img: "/features/tabletop-emotion.gif",
                body: "버튼 하나로 영상과 이미지, 효과음 리액션을 주고받고, 재사용 대기 시간으로 도배를 막습니다.",
            },
            {
                title: "인터렉티브 경험",
                icon: "sparkles",
                img: "/features/tabletop-interaction.gif",
                body: "카드가 실제로 날아가는 애니메이션과 효과음으로 오프라인의 손맛을 재현했습니다.",
            },
        ],
        nav: {
            prev: "my-little-agent",
            next: "duncop",
        },
        type: "Solo Project",
        stacks: [
            {
                group: "Programming",
                list: [
                    { name: "TypeScript", description: "language" },
                    { name: "Next.js", description: "framework" },
                    { name: "Node.js", description: "runtime" },
                ],
            },
            { group: "Database", list: [{ name: "Prisma" }] },
            { group: "Styling", list: [{ name: "TailwindCSS" }] },
            {
                group: "AI",
                list: [{ name: "Claude", description: "vibe coding" }],
            },
            { group: "Library", list: [{ name: "animate.css" }] },
            {
                group: "Tools",
                list: [{ name: "VSCode" }, { name: "Git / GitHub" }],
            },
        ],
        link: {
            github: "https://github.com/Hayoung0708/tabletop-online",
            deploy: "https://tabletop-online-ppzz.onrender.com/lobby",
        },
        contributionSummary: [
            {
                title: "기획 및 개발",
                percent: 100,
                body: `◦ 서비스 기획 및 구조 설계
◦ Claude 기반 바이브 코딩으로 전체 구현`,
            },
            {
                title: "운영",
                percent: 100,
                body: `◦ 운영 중인 서비스에 영향이 없도록 브랜치를 분리해 순차 확장`,
            },
        ],
        contributions: [
            {
                title: "기획 및 바이브 코딩",
                icon: "bot",
                list: [
                    {
                        title: "Claude 기반 바이브 코딩",
                        body: `◦ TypeScript 기반 Next.js, Node.js 환경에서 Claude를 개발의 중심에 두고 프로젝트 개발`,
                    },
                    {
                        title: "브랜치 분리 확장",
                        body: `◦ 운영 중인 서비스에 영향이 가지 않도록 브랜치를 나눠 게임을 순차적으로 확장 중`,
                    },
                    {
                        title: "AI 작업 지시 문서화",
                        body: `◦ 프로젝트 구조와 코드 컨벤션을 문서로 정리해, 생성되는 코드의 일관성과 품질을 유지하도록 환경 구성`,
                    },
                ],
            },
            {
                title: "몰입감을 위한 인터렉션 개선",
                icon: "sparkles",
                list: [
                    {
                        title: "카드 애니메이션 디렉팅",
                        body: `◦ AI가 생성한 애니메이션의 어색한 부분을 파악해 카드 이동 방향과 순서, z-index를 세밀하게 조정하며 자연스러운 움직임으로 개선`,
                    },
                    {
                        title: "실시간 감정 표현 기능",
                        body: `◦ 텍스트 입력 없이도 상대의 리액션이 화면에 전달되도록 감정표현 기능 추가`,
                    },
                ],
            },
            {
                title: "요청 처리 및 개발 리소스 관리",
                icon: "gauge",
                list: [
                    {
                        title: "구체적 기준 제시",
                        body: `◦ 추상적인 요청보다 방향, 순서, CSS 속성 등 구체적인 기준을 제시할수록 결과 품질이 높아지므로 요구사항을 구현 단위로 분해해 전달`,
                    },
                    {
                        title: "검증된 라이브러리 도입",
                        body: `◦ 정형화된 효과는 animate.css 등 기존 라이브러리로 처리해 시간과 토큰 비용 등의 개발 리소스 절약`,
                    },
                    {
                        title: "요청 빈도 제한",
                        body: `◦ 서버 부하를 낮추기 위해 감정 표현처럼 짧은 시간에 반복 입력되기 쉬운 기능은 재사용 대기 시간을 두어 요청 빈도를 제한`,
                    },
                ],
            },
        ],
        learn: [
            {
                title: "AI 도구를 다루는 기준",
                badge: "Learn",
                problem: `AI에 추상적인 요청을 넘길수록 결과물이 기대에서 멀어지고 세부 조정을 반복하는 동안 시간과 토큰 비용이 함께 늘어나는 문제 발생`,
                solution: `◦ 방향과 순서, CSS 속성처럼 구체적인 기준을 함께 제시하는 방식으로 전환
◦ 요구사항을 구현 단위로 분해해 전달
◦ 정형화된 효과는 직접 조정하지 않고 검증된 라이브러리를 도입해 반복 작업 제거`,
                learn: `◦ AI는 결과를 맡기는 대상이 아니라 기준을 세워 쓰는 도구라는 점을 체감
◦ 요청을 얼마나 잘게 쪼개는지가 결과 품질과 비용을 함께 결정한다는 것을 학습`,
            },
            {
                title: "주사위 굴리기 횟수가 사라지는 이슈",
                badge: "Bug",
                problem: `야찌에서 특정 사용자만 주사위 굴리기 횟수가 한 번에 2회씩 사라지는 문제 발생`,
                solution: `◦ 서버 로그를 확인했으나 정상 처리된 요청은 기록이 남지 않아 재현 테스트를 진행
◦ 버튼을 빠르게 연타하자 disabled가 뚫리는 것을 확인하고, 서버 응답이 도착한 뒤에야 버튼이 비활성화되는 원인 파악
◦ UI, 요청, 서버 3중 방어로 중복 요청을 차단하고 무시된 요청은 로그로 기록`,
                learn: `◦ AI가 구현한 결과는 화면 동작이 아니라 코드로 직접 확인해야 하는 검증 과정의 중요성 체감
◦ UI 한 층의 방어로는 부족하며 요청과 서버 계층까지 겹겹이 막는 3중 방어 설계 경험`,
            },
        ],
    },
    {
        id: "my-little-agent",
        title: "my little agent",
        image: [],
        video: "/videos/my-little-agent.webm",
        intro: "Chrome Built-in AI 기반 멀티 에이전트 프레임워크",
        tags: ["No Server", "No API Key", "No Cost"],
        highlights: [
            "온디바이스 소형 모델의 품질 한계를 역할 분담으로 극복하는 구조로 설계",
            "Agent, Workflow, Task의 인터페이스를 통일해 어댑터 없이 중첩 조립",
            "에이전트별 독립 컨텍스트 창과 브라우저 저장소로 긴 작업에서도 맥락 유지",
            "Claude 기반 바이브 코딩으로 개발하고 npm에 배포",
        ],
        period: "2026.08.17 - 운영중",
        description: `LLM을 붙이려면 서버, API 키, 토큰 비용이 따라옵니다. Chrome Built-in AI(Gemini Nano)는 이 비용이 없는 대신 모델이 작기 때문에 복잡한 작업에서 품질이 무너집니다.

my little agent는 Gemini Nano를 기반으로 단순한 Built-in 에이전트 사용부터 멀티 에이전트까지 만들어 낼 수 있는 프레임워크입니다. 역할별로 에이전트를 정의하고 블록처럼 이어 붙이면 쉽게 워크플로우를 만들 수 있습니다. npm에서 간단하게 인스톨해 어떤 웹 프로젝트에서든 바로 쓸 수 있습니다.

지금 보고 계신 포트폴리오 사이트의 "챗봇에게 물어보세요"도 이 프레임워크로 만들었습니다.`,
        features: [
            {
                title: "온디바이스 AI",
                icon: "bot",
                img: "/features/mla-ondevice.gif",
                body: "서버도 API 키도 비용도 없이 모든 추론이 브라우저 안에서 끝나고, 오프라인에서도 동작합니다.",
            },
            {
                title: "멀티 에이전트 조립",
                icon: "layout-template",
                img: "/features/mla-runnable.gif",
                body: "에이전트와 도구, 워크플로우가 전부 같은 모양이라 별도의 어댑터 없이 레고처럼 중첩해 조합할 수 있습니다.",
            },
            {
                title: "컨텍스트 관리",
                icon: "database",
                img: "/features/mla-memory.gif",
                body: "에이전트마다 컨텍스트 창을 따로 쓰고, 창에 담기 어려운 기억은 브라우저 저장소에 두어 새로고침 뒤에도 이어 갑니다.",
            },
        ],
        nav: {
            next: "tabletop-online",
        },
        type: "Open Source",
        stacks: [
            {
                group: "Programming",
                list: [{ name: "TypeScript", description: "language" }],
            },
            {
                group: "AI",
                list: [
                    {
                        name: "Chrome Built-in AI",
                        description: "Prompt API / Gemini Nano",
                    },
                ],
            },
            {
                group: "Build",
                list: [{ name: "Vite" }, { name: "esbuild" }],
            },
            {
                group: "Test",
                list: [{ name: "Vitest" }, { name: "Playwright" }],
            },
            {
                group: "Distribution",
                list: [{ name: "npm" }, { name: "publint" }],
            },
            {
                group: "Tools",
                list: [{ name: "VSCode" }, { name: "Git / GitHub" }],
            },
        ],
        link: {
            github: "https://github.com/Hayoung0708/my-little-agent",
            npm: "https://www.npmjs.com/package/my-little-agent",
        },
        contributionSummary: [
            {
                title: "설계 및 배포",
                percent: 100,
                body: `◦ 아키텍쳐 설계부터 바이브 코딩, 테스트, 문서화, npm 배포까지 전 과정 단독 진행`,
            },
        ],
        contributions: [
            {
                title: "아키텍쳐 설계 및 바이브 코딩",
                icon: "drafting-compass",
                list: [
                    {
                        title: "멀티 에이전트 분업",
                        body: `◦ 온디바이스 소형 모델의 품질 한계를 역할 분담으로 극복하는 것을 목표로 방향 설정`,
                    },
                    {
                        title: "어댑터 없는 중첩 조립",
                        body: `◦ Agent, Workflow, Task 모델의 인터페이스를 통일해 서로 쉽게 끼워 맞출 수 있는 형태로 설계`,
                    },
                    {
                        title: "Claude 기반 바이브 코딩",
                        body: `◦ TypeScript 환경에서 Claude를 개발의 중심에 두고 프레임워크 개발`,
                    },
                ],
            },
            {
                title: "컨텍스트 관리 설계",
                icon: "database",
                list: [
                    {
                        title: "에이전트별 독립 컨텍스트 창",
                        body: `◦ 에이전트를 엮을수록 컨텍스트가 빠르게 소진되므로, 에이전트가 독립된 창으로 동작하도록 설계`,
                    },
                    {
                        title: "Task 모델 활용",
                        body: `◦ 번역, 요약처럼 Chrome Task 모델로 처리 가능한 작업은 그쪽에 넘겨 에이전트의 창을 소비하지 않도록 설계`,
                    },
                    {
                        title: "브라우저 저장소 활용",
                        body: `◦ 창에 담을 수 없는 정보는 저장소에 두고 필요할 때만 꺼내 쓰도록 설계`,
                    },
                ],
            },
            {
                title: "내장 기능 확장",
                icon: "layout-template",
                list: [
                    {
                        title: "Chrome Task API 편입",
                        body: `◦ 번역, 요약처럼 Chrome Task 모델이 처리하는 작업을 일반 Agent와 동일한 인터페이스로 통합
◦ 미지원 환경에서는 대체 Agent로 자동 우회시켜 파이프라인이 중단되지 않도록 처리`,
                    },
                    {
                        title: "취약 작업 도구 내장",
                        body: `◦ 계산기, 페이지 읽기, 오늘 날짜 주입처럼 자주 필요한 도구를 미리 만들어 두어 편의성 향상`,
                    },
                ],
            },
            {
                title: "테스트 전략 수립 및 배포",
                icon: "package",
                list: [
                    {
                        title: "4층 테스트 체계",
                        body: `◦ 유닛, 타입, 패키징, E2E를 요구사항으로 정하고 총 98개 테스트 확보`,
                    },
                    {
                        title: "사용자, 기여자 문서 분리",
                        body: `◦ 사용법은 README에, 설계 규칙과 로드맵, 알려진 약점은 AGENTS에 나눠 사용자는 바로 도입할 수 있도록, 기여자와 AI 코딩 도구는 규칙을 지키며 수정하도록 구성`,
                    },
                    {
                        title: "npm 패키지 배포",
                        body: `◦ npm i my-little-agent 한 줄로 어떤 프로젝트에서든 사용 가능`,
                    },
                ],
            },
        ],
        learn: [],
    },
    {
        id: "portfolio-site",
        title: "Portfolio Site",
        image: [portfolioSiteImg],
        video: "/videos/portfolio-site.webm",
        intro: "강하영 포트폴리오 사이트",
        highlights: [
            "Stitch AI로 디자인하고 직접 구현한 첫 버전 제작",
            "Claude Code와 협업해 스크롤 인터렉션 중심으로 전면 개편",
            "CSS 스크롤 타임라인과 GSAP으로 스크롤 연출 구현",
            "Chrome Built-in AI 기반 포트폴리오 질의응답 기능 탑재",
        ],
        period: "2026.02 - 2026.08",
        description: `프론트엔드 개발자의 진정한 역량은 정적인 문서가 아닌, 사용자가 직접 경험할 수 있는 '웹' 그 자체로 보여주어야 한다고 생각합니다.

기존의 PDF 포트폴리오는 규격과 페이지 제한으로 인해 다채로운 프로젝트 경험을 담아내기 어렵고, GIF나 영상을 첨부할 수 없어 제가 고민했던 디테일한 UI/UX 인터랙션을 온전히 전달하기에 한계가 있었습니다.
이에, 저만의 기술적 고민과 매끄러운 인터랙션을 어떠한 제약 없이 자유롭게 펼쳐 보이고자 이 웹 포트폴리오를 기획하고 개발했습니다.

첫 버전은 AI 디자인 툴 Stitch로 UI를 잡고 직접 구현해 단기간에 완성했습니다.
이후 Claude Code와 협업해 스크롤 기반 인터렉션과 온디바이스 AI 챗봇을 더한 지금의 버전으로 전면 개편했습니다. 기획부터 디자인, 개발까지 전 과정에서 AI를 도구로 활용하는 워크플로우를 직접 검증한 프로젝트입니다.`,
        nav: {
            prev: "de-caffeine",
            next: "bookjeokbookjeok",
        },
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
                        name: "React Router",
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
                        name: "Claude Code",
                    },
                    {
                        name: "Stitch",
                    },
                    {
                        name: "Google Analytics",
                    },
                    {
                        name: "Microsoft Clarity",
                    },
                ],
            },
            {
                group: "Library",
                list: [
                    {
                        name: "gsap",
                    },
                    {
                        name: "lenis",
                    },
                    {
                        name: "my-little-agent",
                    },
                    {
                        name: "lucide-react",
                    },
                    {
                        name: "react-hangul-motion",
                    },
                ],
            },
        ],
        link: {
            github: "https://github.com/Hayoung0708/portfolio-site",
            deploy: "https://portfolio-site-xi-virid.vercel.app/",
        },
        contributionSummary: [
            {
                title: "기획 및 설계",
                percent: 100,
                body: `◦ 프로젝트 기획 및 AI를 활용한 UI/UX 디자인
◦ 콘텐츠 및 인터렉션 설계`,
            },
            {
                title: "개발 및 배포",
                percent: 100,
                body: `◦ React 기반 프론트엔드 전반 구현
◦ Claude 기반 바이브 코딩으로 개편`,
            },
        ],
        contributions: [
            {
                title: "기획 및 AI 워크플로우",
                icon: "drafting-compass",
                list: [
                    {
                        title: "기획",
                        body: `◦ 프로젝트 전체 기획`,
                    },
                    {
                        title: "Claude Code 협업 전면 개편",
                        body: `◦ 스크롤 인터렉션 중심의 현재 버전으로 Claude Code와 협업해 전면 개편
◦ 디자인 방향과 우선순위 결정 및 결과물 검수는 직접, 구현은 AI와 분담
◦ 프로젝트 소개 문구와 시연 영상까지 AI로 제작해 기획-디자인-개발-콘텐츠 전 과정을 AI 워크플로우로 완결`,
                    },
                ],
            },
            {
                title: "스크롤 인터렉션 구현",
                icon: "sparkles",
                list: [
                    {
                        title: "GSAP 기반 섹션 연출",
                        body: `◦ GSAP ScrollTrigger와 CSS sticky로 섹션 고정, 시차, 크로스페이드 등 스크롤 연출 구현
◦ Lenis 관성 스크롤과 앵커 이동 통합`,
                    },
                    {
                        title: "모션 접근성과 성능",
                        body: `◦ prefers-reduced-motion 사용자를 위한 애니메이션 비활성화 전면 대응
◦ 시연 영상을 webm으로 압축해 로딩 부담 최소화`,
                    },
                ],
            },
            {
                title: "온디바이스 AI 챗봇",
                icon: "bot",
                list: [
                    {
                        title: "my-little-agent 파이프라인",
                        body: `◦ 직접 만든 오픈소스 my-little-agent로 질문 분류 → 자료 주입 → 답변 생성 파이프라인 구성
◦ 서버 요청과 API 키 없이 모든 추론을 브라우저 안에서 처리`,
                    },
                    {
                        title: "폴백 설계",
                        body: `◦ 모델 미지원 환경은 키워드 기반 준비 답변으로 자동 전환
◦ 모델 다운로드 상태와 기기 요건을 안내하는 UI 제공`,
                    },
                ],
            },
            {
                title: "문의 파이프라인 및 배포",
                icon: "message-circle-more",
                list: [
                    {
                        title: "카카오톡 문의 수신",
                        body: `◦ Vercel 서버리스 함수와 카카오 "나에게 보내기" API로 문의 폼 내용을 카카오톡으로 수신`,
                    },
                    {
                        title: "프로젝트 배포",
                        body: `◦ Vercel을 활용해 프론트엔드 배포`,
                    },
                ],
            },
        ],
        learn: [
            {
                title: "Make It Work",
                badge: "Learn",
                learn: `◦ 처음부터 완벽한 코드를 목표로 하기보다, 핵심 기능을 빠르게 구현해 '동작하는 프로토타입'을 우선 확보하는 것의 중요성 체감
◦ 오버엔지니어링을 지양하고, 기능 구현과 코드 최적화의 단계를 분리하는 애자일한 마인드셋 학습`,
            },
            {
                title: "AI와 협업하는 법",
                badge: "Learn",
                learn: `◦ AI에게 맡길 일과 직접 결정할 일(디자인 방향, 문구 톤, 우선순위)을 구분하는 것이 결과물의 품질을 결정한다는 점을 체감
◦ 스크린샷 검증처럼 AI 산출물을 눈으로 직접 확인하는 검수 루프의 중요성 학습`,
            },
        ],
    },
    {
        id: "duncop",
        title: "DUNCOP",
        image: [duncop1Img, duncop2Img, duncop3Img],
        video: "/videos/duncop.webm",
        intro: "던전앤파이터 유저들을 위한 파티 컷 확인 서비스",
        tags: ["Next.js", "외부 API"],
        highlights: [
            "외부 API를 서버 프록시로 우회해 CORS 제약 없이 안정적으로 연동",
            "Supabase 기반 데이터베이스 설계 및 구축",
            "사용자 테마 감지, FOUC 제거, 반응형 UI와 데이터 양 조절로 UX 개선",
            "Next.js SSR과 Open Graph로 SEO 개선, 하루 500명 유입",
        ],
        period: "2026.02.02 - 2026.02.25",
        description: `DUNCOP(던캅) 은 던전앤파이터 유저들이 벞교(버프 교환) 파티를 구성할 때 발생하는 문제를 해결하기 위해 만들어진 서비스입니다.
던전앤파이터 유저들은 일반적으로 DUNDAM(던담) 데이터를 기준으로 캐릭터의 전투력(딜/버프력)을 확인한 뒤 구인구직을 진행합니다.

하지만 기존 방식에는 몇 가지 한계가 존재합니다 :
    ◦ 던담에서 여러 캐릭터를 직접 확인해야 하므로, 해당 모험단이 컷 이상의 캐릭터를 충분히 보유하고 있는지 한눈에 파악하기 어려움
    ◦ 과거에 비매너 행동(컷 미달 잠입, 업둥이 먹튀 등)을 했던 유저를 사전에 확인하기 어려움

이러한 문제를 해결하기 위해 DUNCOP은 던담 기반 전투력 데이터와 자체 신고 DB를 결합하여 다음과 같은 기능을 제공합니다 :
    ◦ 입력한 딜러컷 / 버퍼컷 충족 여부 검증
    ◦ 신고 및 박제 이력 기반 불량 유저 식별`,
        nav: {
            prev: "tabletop-online",
            next: "studium",
        },
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
                        body: `◦ Vercel을 활용해 프론트엔드 배포 및 배포 자동화`,
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
            {
                title: "AI 코드 리뷰 도입",
                icon: "bot",
                list: [
                    {
                        title: "AI 코드 리뷰 자동화",
                        body: `◦ Gemini Code Assistants를 활용한 Pull Request 자동 코드 리뷰 파이프라인 구축
◦ 휴먼 에러 사전 필터링 및 코드 품질 향상`,
                    },
                ],
            },
        ],
        learn: [
            {
                title: "외부 API CORS 우회",
                badge: "Trouble Shooting",
                problem: `DUNDAM API 연동 중, 허용된 도메인('dundam.xyz')이 아닌 곳에서 브라우저가 직접 요청을 보낼 때 차단되는 문제 발생`,
                solution: `◦ Postman에서는 정상 호출되나 브라우저에서만 실패하는 현상을 통해 브라우저 보안 정책이 원인임을 파악
◦ Next.js API Route를 활용한 서버 프록시 구조로 브라우저가 아닌 서버 단에서 API를 호출하도록 우회`,
                learn: `◦ CORS 정책이 브라우저 단의 제약임을 체득
◦ Next.js API Route를 활용한 서버 프록시(BFF) 패턴 구현 경험
◦ 클라이언트와 서버 간의 책임 분리`,
            },
            {
                title: "비공식 API의 지식재산권",
                badge: "Ethic",
                problem: `프로젝트 배포 후 커뮤니티 피드백을 통해, 사전 협의되지 않은 외부 서비스의 API를 활용하는 것이 지식재산권 위배 소지가 있음을 인지`,
                solution: `◦ 문제의 소지를 확인한 즉시 데이터 원작자의 권리를 존중하여 배포된 서비스를 내리는 빠른 조치
◦ DUNDAM 측에 API 무단 사용에 대한 정중한 사과문 전달, 정식 API 사용 권한 및 협업을 요청하는 제안서 발송`,
                learn: `◦ 기술적 구현 가능성과 윤리적/법적 허용 여부는 다르다는 점을 깊이 체감
◦ 개발자로서 지식재산권을 존중하고 책임감 있게 데이터를 다루는 태도 학습
◦ 개발 과정의 실수를 회피하지 않고, 서비스 중단 및 대안 제시를 통해 책임감 있게 대처하는 문제 해결 역량 성장`,
            },
        ],
    },
    {
        id: "studium",
        title: "Studium",
        video: "/videos/studium.webm",
        image: [
            studium1Img,
            studium2Img,
            studium3Img,
            studium4Img,
            studium5Img,
            studium6Img,
        ],
        intro: "목표 기반 스터디 관리 플랫폼",
        tags: ["Next.js", "프론트엔드 리드"],
        highlights: [
            "SSE 기반 실시간 알림 시스템 구축",
            "퍼널 모델, 낙관적 업데이트, 알림 수신 즉각 피드백 UI로 UX 개선",
            "Auth 기반 세션 관리 구현",
            "담당자 태그와 텍스트 기록 중심의 커뮤니케이션 프로세스 구축",
        ],
        period: "2025.06.27 - 2025.08.04",
        description: `스터디움 Studium은 공통의 목표를 설정하고, 구성원과 함께 꾸준히 학습할 수 있도록 돕는 🎯 목표 기반 스터디 관리 플랫폼입니다!

출석 체크, 목표 달성, 리워드 시스템, 서바이벌 스터디 등을 통해 스터디의 몰입도와 지속성을 높이는 데 중점을 둡니다.

◦ 현재는 서버 제공 기간이 끝나 데이터가 보여지지 않습니다`,
        nav: {
            prev: "duncop",
            next: "de-caffeine",
        },
        type: "Team Project",
        team: {
            frontend: 4,
            backend: 5,
        },
        lead: "FrontEnd",
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
                group: "State Management",
                list: [
                    {
                        name: "Zustand",
                    },
                ],
            },
            {
                group: "Data Fetching",
                list: [
                    {
                        name: "Axios",
                    },
                    {
                        name: "TanStack",
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
                        name: "Notion",
                    },
                    {
                        name: "Discord",
                    },
                    {
                        name: "Piskel",
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
                        name: "lottiefiles",
                    },
                    {
                        name: "dayjs",
                    },
                    {
                        name: "react-day-picker",
                    },
                    {
                        name: "react-mobile-picker",
                    },
                    {
                        name: "react-toastify",
                    },
                ],
            },
        ],
        link: {
            github: "https://github.com/prgrms-web-devcourse-final-project/WEB4_5_9to6_FE",
            deploy: "https://studium-9to6.vercel.app/",
            preview: "https://www.youtube.com/watch?v=G-fUFeWH3Ak",
        },
        features: [
            {
                title: "로그인 및 회원가입",
                body: "서비스 내 로그인 기능 및 소셜 로그인을 구현하며 사용자 인증을 통해 권한을 분리했습니다. 비로그인 사용자는 스터디 목록 열람만 가능하며, 핵심 기능은 로그인 후 이용할 수 있습니다.",
                mobileImg: studiumFeature1Img,
                icon: "user-key",
            },
            {
                title: "스터디",
                body: "출석 체크와 목표 달성 체크 등의 활동을 통해 리워드를 얻을 수 있습니다. 또한, 내장된 타이머 기능을 통해 학습에 집중한 시간을 측정하고 기록할 수 있습니다.",
                mobileImg: studiumFeature2Img,
                icon: "book-open-text",
            },
            {
                title: "실시간 채팅",
                body: `스터디원들과 원활하게 소통할 수 있도록 실시간 단체 채팅 및 1:1 귓속말 기능을 제공합니다.`,
                mobileImg: studiumFeature3Img,
                icon: "message-circle-more",
            },
            {
                title: "서바이벌 스터디",
                body: "플랫폼 자체적으로 분야별 서바이벌 스터디를 진행합니다. 참가자는 LLM을 활용해 매주 새롭게 생성되는 퀴즈를 풀며 생존 경쟁을 하고, 생존 시 특별한 리워드를 획득할 수 있습니다.",
                mobileImg: studiumFeature4Img,
                icon: "swords",
            },
            {
                title: "실시간 알림",
                body: "스터디 가입 신청, 수락 및 거절 등 서비스 내 주요 상호작용 발생 시 사용자에게 실시간으로 알림을 제공합니다.",
                mobileImg: studiumFeature5Img,
                icon: "bell",
            },
            {
                title: "리워드 상점",
                body: "스터디 활동으로 얻은 리워드를 사용해 앱 테마, 스터디룸 테마, 아바타를 구매할 수 있습니다.",
                mobileImg: studiumFeature6Img,
                icon: "store",
            },
            {
                title: "테마 변경",
                body: "TailwindCSS를 활용해 여러 색상의 테마를 자유롭게 변경할 수 있는 기능을 구현했습니다.",
                mobileImg: studiumFeature7Img,
                icon: "palette",
            },
        ],
        contributionSummary: [
            {
                title: "기획 및 설계",
                percent: 50,
                body: `◦ 프로젝트 기획 주도`,
            },
            {
                title: "개발 구현",
                percent: 40,
                body: `◦ Next.js 기반 프론트엔드 구현`,
            },
        ],
        contributions: [
            {
                title: "기획 및 설계",
                icon: "drafting-compass",
                list: [
                    {
                        title: "기획 및 와이어프레임 설계",
                        body: `◦ 프로젝트 기획을 주도하며 서비스 구조와 플로우 설계
◦ 프론트엔드 팀장으로서 개발 상황을 정리하며 팀의 진행 방향 관리, 백엔드 팀과 주도적으로 소통
◦ 로그인/회원가입 및 스터디 생성 페이지의 와이어프레임 설계`,
                    },
                    {
                        title: "에셋 제작",
                        body: `◦ Piskel을 활용하여 프로젝트 아이덴티티인 캐릭터 에셋 제작`,
                        img: studiumEx1Img,
                    },
                ],
            },
            {
                title: "프론트엔드 개발 및 배포",
                icon: "layout-template",
                list: [
                    {
                        title: "프론트엔드 구현",
                        body: `◦ 로그인, 회원가입, 스터디 생성/수정, 알림 페이지 퍼블리싱
◦ 소셜 로그인 및 이메일 로그인 로직 구현
◦ 회원가입, 스터디 생성/수정 로직 구현
◦ 사용자별 알림 필터링, 읽음 처리 로직 구현
◦ react-day-picker 라이브러리를 활용해 달력 UI 스타일링 및 날짜 선택 로직 구현
◦ react-mobile-picker 라이브러리를 활용해 휠 선택 UI 스타일링 및 로직 구현`,
                    },
                    {
                        title: "Auth 세션 관리",
                        body: `◦ cookie와 Zustand를 활용해 로그인 세션 저장
◦ AuthInitializer 컴포넌트를 제작해 새로고침 또는 페이지 재접속 시 로그인 세션 불러오는 로직 구현`,
                    },
                    {
                        title: "실시간 알림 기능 구현",
                        body: `◦ SSE를 활용해 실시간으로 업데이트되는 알림 기능 구현
◦ 사용자가 새로운 알림을 시각적으로 즉시 확인할 수 있는 UI 구축`,
                    },
                    {
                        title: "프로젝트 배포",
                        body: `◦ Vercel을 활용해 프론트엔드 배포 및 배포 자동화`,
                    },
                ],
            },
            {
                title: "사용자 경험(UX) 개선",
                icon: "user-star",
                list: [
                    {
                        title: "낙관적 업데이트 적용",
                        body: `◦ API 응답 대기시 낙관적 업데이트를 적용해 중복 요청이나 에러 발생 예방, 로딩 스트레스 저하`,
                    },
                    {
                        title: "퍼널 모델 적용",
                        body: `◦ 회원가입 및 스터디 생성 페이지에 퍼널 모델을 적용하고 자연스러운 애니메이션을 추가해 UI/UX 개선`,
                    },
                ],
            },
            {
                title: "커뮤니케이션 프로세스 개선",
                icon: "message-circle-more",
                img: [
                    {
                        title: "디스코드에서의 담당자 지정 커뮤니케이션",
                        src: studiumExImg,
                    },
                ],
                list: [
                    {
                        title: "담당자 지정 및 소통 규칙 정립",
                        body: `◦ 불특정 다수에게 질문하던 기존 방식을 개선하여, 디스코드에 기능별 담당자를 명시하고 해당 담당자만 태그하여 소통하는 프로세스 제안
◦ 구두로 진행되던 모호한 논의를 글로 명확히 정리하여 질문하도록 소통 규칙 정립
◦ 관련 없는 팀원의 불필요한 시간 소모를 방지하고, 문제 해결에 드는 소통 비용과 시간을 크게 단축`,
                    },
                ],
            },
        ],
        learn: [
            {
                title: "다른 직군과의 커뮤니케이션",
                badge: "Learn",
                learn: `◦ 프론트엔드 팀장으로서 다수의 백엔드 개발자와 협업하며, 원활한 프로젝트 진행을 위해 타 직군의 기술 스택과 아키텍처에 대한 이해가 필수적임을 체감
◦ 직군 간의 관점 차이를 조율하고 원활하게 소통하는 소프트 스킬의 중요성 체감
◦ 백엔드 전반의 프로세스와 용어에 대한 이해도 향상`,
            },
            {
                title: "로그인 상태 관리 이슈",
                badge: "Auth",
                problem: `◦ 서비스 내 로그인이 아닌 OAuth 로그인 시 서버가 response값을 주는 게 아닌 리다이렉트 방식으로 동작해, 기존 response값에 따라 동작하는 로직으로는 로그인 여부를 확인하기 어려운 문제 발생`,
                solution: `◦ URL 쿼리 파라미터로 토큰을 전달받는 방식을 요청했으나, 보안 취약점을 방지하고자 하는 백엔드 팀의 의견 수용
◦ 백엔드에서 cookie로 인증/인가를 처리하고 있다는 점을 활용해, 프로젝트 진입점에 AuthInitializer 컴포넌트를 구성하고, useEffect로 유저 정보를 fetch하여 전역 로그인 상태를 동기화하는 로직 구현`,
                learn: `◦ 인가 코드 발급부터 토큰 교환으로 이어지는 OAuth의 흐름과 서버-클라이언트 간의 역할 분담에 대한 이해도 향상
◦ LocalStorage와 cookie의 보안적 차이를 학습하고, 프론트엔드 관점에서의 안전한 인증 토큰 처리 방식 체득
◦ 앱 초기화 단계에서 유저 세션을 검증하고 라우팅을 제어하는 Auth Flow 아키텍처 설계 경험`,
            },
        ],
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
        highlights: [
            "Vue 기반으로 게시물과 댓글, 좋아요, 북클럽, 유저 페이지 퍼블리싱",
            "실시간 채팅 기능 구현",
            "데이터베이스 설계와 소셜 로그인 구축",
            "레거시 코드를 존중하며 점진적으로 개선",
        ],
        period: "2025.05.30 - 2025.06.19",
        description: `북적북적은 독서 다이어리를 작성하고, 관심사에 맞는 북클럽을 개설하거나 참여하며, 자유롭게 의견을 나누는 게시판 활동을 통해 다른 독자들과 소통할 수 있는 독서 커뮤니티 플랫폼입니다.

알라딘 오픈 API를 활용해 실시간 베스트셀러, 연관 도서, 도서 검색 기능을 제공하여 사용자들이 다양한 책 정보를 손쉽게 확인하고 공유할 수 있도록 지원합니다.

◦ 현재는 알라딘 API KEY 및 Supabase 플랜이 만료돼 데이터가 보여지지 않습니다`,
        nav: {
            prev: "portfolio-site",
        },
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
                percent: 30,
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
                        title: "기획 및 UI/UX 디자인",
                        body: `◦ 프로젝트 기획 참여
◦ 디자인 참여`,
                    },
                    {
                        title: "데이터 구조 설계",
                        body: `◦ 서비스에 필요한 데이터베이스 테이블 구조 설계`,
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
        video: "/videos/de-caffeine.webm",
        image: [deCaffeine1Img, deCaffeine2Img, deCaffeine3Img],
        intro: "개발자들을 위한 커뮤니티 플랫폼",
        tags: ["React", "UX 개선"],
        highlights: [
            "react-router 기반 동적 라우팅과 페이지 구조 설계",
            "Viewport 변화를 감지해 한 줄 렌더링 개수를 계산하는 동적 레이아웃 구현",
            "스켈레톤 UI와 낙관적 업데이트로 로딩 스트레스 감소",
            "OS별 폰트 렌더링 차이를 안티앨리어싱으로 완화",
        ],
        period: "2025.04.25 - 2025.05.19",
        description: `de:caffeine(디:카페인)은 개발자들이 자신의 개발 일지를 SNS처럼 공유하고, 서로의 질문과 답변을 주고받을 수 있는 개발자 커뮤니티 플랫폼입니다.

◦ 프로그래머스 OPEN API 사용 (현재는 프로그래머스 API 제공 기간이 끝나 데이터가 보여지지 않습니다)`,
        nav: {
            prev: "studium",
            next: "portfolio-site",
        },
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
                percent: 80,
                body: `◦ 프로젝트 기획 및 UI/UX 디자인
◦ 프로젝트 아키텍쳐 설계`,
            },
            {
                title: "개발 구현",
                percent: 50,
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
            {
                title: "개발 문화 정립 및 팀 성장 주도",
                icon: "flag",
                list: [
                    {
                        title: "협업 프로세스 체계화",
                        body: `◦ 커밋 메시지 규칙 및 브랜치 전략 컨벤션 수립
◦ Pull Request 기반 협업 문화 도입 및 코드 리뷰 의무화를 통한 코드 품질 상향 평준화`,
                    },
                    {
                        title: "동반 성장 주도",
                        body: `◦ 기술적 어려움을 겪는 비전공자 팀원 1:1 멘토링
◦ 업무 대행이 아닌 지식 공유를 통해 팀원의 기술적 자립과 프로젝트 기여도 향상 유도`,
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

/** 상세 페이지 없이 목록으로만 노출하는 작업물. 시작한 순서의 역순 */
export const SIDE_WORKS: Array<SideWork> = [
    {
        title: "Portfolio Site",
        intro: "지금 보고 계신 포트폴리오 사이트",
        period: "2026.02 - 2026.08",
        tags: ["TypeScript", "React", "TailwindCSS", "Vite"],
        github: "https://github.com/Hayoung0708/portfolio-site",
        to: "/project/portfolio-site",
    },
    {
        title: "찜콩",
        intro: "리뷰 클렌징 없는 나만의 솔직 리뷰 저장소",
        period: "2025.10 - 진행중",
        tags: ["TypeScript", "React", "Team Project"],
        github: "https://github.com/JjimKong/Frontend",
        deploy: "https://jjimkong.vercel.app/",
    },
    {
        title: "북적북적",
        intro: "독서를 기록하고 공유하는 독서 커뮤니티 플랫폼",
        period: "2025.05 - 2025.06",
        tags: ["Vue", "Team Project"],
        github: "https://github.com/Programmers-FE5-VueFinder/bookjeokbookjeok",
        deploy: "https://bookjeokbookjeok.netlify.app/",
        to: "/project/bookjeokbookjeok",
    },
    {
        title: "Devtion",
        intro: "Notion 클론 코딩",
        period: "2025.04",
        tags: ["React", "Team Project"],
        github: "https://github.com/Hayoung0708/devcourse-fe5-project1",
    },
    {
        title: "basic pink theme",
        intro: "VSCode Light+, Dark+ 테마 기반 핑크 테마",
        period: "2025.04 - 운영중",
        tags: ["VSCode", "Theme"],
        github: "https://github.com/Hayoung0708/basic-pink-theme",
    },
    {
        title: "베누스 파티 메이커",
        intro: "던전앤파이터 유저들을 위한 베누스 던전 파티 자동 생성 서비스",
        period: "2025.03 - 2025.09",
        tags: ["React", "Team Project"],
        github: "https://github.com/VenusPartyMaker/venus-party-maker-FE",
        deploy: "https://venus-party-maker.vercel.app/",
    },
    {
        title: "Filly",
        intro: "감정을 담아 다같이 만드는 플레이리스트 · 한국공학대학교 무박 2일 해커톤",
        period: "2024.06",
        tags: ["ChatGPT API", "JavaScript", "Team Project"],
    },
    {
        title: "INUsed",
        intro: "인천대학교 학생들을 위한 중고거래 웹 애플리케이션 · 졸업 프로젝트",
        period: "2024.03 - 2024.06",
        tags: ["TypeScript", "React", "Redux", "Emotion", "MUI"],
        github: "https://github.com/C-KOMACHI/INUsed",
    },
];
