import AboutMeListItem from "../atoms/AboutMeListItem";

export default function AboutMeList() {
    return (
        <ul className="w-full lg:w-[80%] flex flex-col gap-5 text-white/90">
            <AboutMeListItem
                body={`2024년 3월부터 2년간 프론트엔드의 기본기를 다지고, 9개의 프로젝트를 완수하면서 책임감을 갖고 성장했습니다.`}
                id="01"
            >
                <p>
                    <span className="font-semibold">TypeScript</span> 기반&nbsp;
                    <span className="font-semibold">React</span>,&nbsp;
                    <span className="font-semibold">Next</span>를 중심으로 웹
                    서비스 개발 경험을 쌓아가고 있어요
                </p>
            </AboutMeListItem>
            <AboutMeListItem
                body={`재사용성과 확장성을 고려해 UI를 설계하며, 비동기 데이터 흐름과 에러 처리, 로딩 상태 관리까지 안정적으로 구현합니다.`}
                id="02"
            >
                <p>
                    <span className="font-semibold">컴포넌트 단위 설계</span>
                    ,&nbsp;
                    <span className="font-semibold">전역 상태 관리</span>,&nbsp;
                    <span className="font-semibold">API 연동</span>에 익숙해요
                </p>
            </AboutMeListItem>
            <AboutMeListItem
                body={`프론트엔드 개발자뿐 아니라 디자이너, 백엔드 개발자와의 팀 프로젝트 경험을 통해 협업 능력을 길렀습니다.
협업 툴과 커뮤니케이션 규칙을 주도적으로 정립해 불필요한 소통 비용을 줄이고 팀의 개발 생산성을 향상시킨 경험이 있습니다.`}
                id="03"
            >
                <p>
                    Git, Figma, Notion 등 다양한&nbsp;
                    <span className="font-semibold">협업 툴</span> 사용과&nbsp;
                    <span className="font-semibold">커뮤니케이션</span>이
                    원활해요
                </p>
            </AboutMeListItem>
            <AboutMeListItem
                body={`사용자 관점에서 체감되는 성능과 흐름을 생각하며, 더 나은 경험을 위해 지속적으로 개선하는 것에 열정을 느낍니다.
스켈레톤 UI와 낙관적 업데이트 등을 적용해 체감 로딩 시간을 줄이고 인터랙션의 즉각성을 향상시킨 경험이 있습니다.`}
                id="04"
            >
                <p>
                    더 나은 <span className="font-semibold">사용자 경험</span>을
                    위해 끊임없이 고민하고 디테일 하나까지 신경써요
                </p>
            </AboutMeListItem>
            <AboutMeListItem
                body={`일상에서 발견한 불편함을 실제 프로덕트로 구현하고, 사용자 피드백을 반영해 지속적으로 개선해 나가는 문제 해결 과정을 중요하게 생각합니다.`}
                id="05"
            >
                <p>
                    일상에서 발견한&nbsp;
                    <span className="font-semibold">
                        불편함이나 아이디어를 개발로 구현
                    </span>
                    하는 과정을 즐겨요
                </p>
            </AboutMeListItem>
        </ul>
    );
}
