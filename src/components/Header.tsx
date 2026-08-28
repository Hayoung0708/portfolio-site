import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import { principleScrollY } from "@/components/Principles";
import { MAIN_PROJECTS } from "@/constants/projects";
import { scrollToY } from "@/lib/scroll";

/** 마우스 휠 한 칸이 굴리는 거리(px) */
const WHEEL = 100;

const NAV = [
    { id: "about", label: "About Me" },
    { id: "tech", label: "Tech Stack" },
    { id: "works", label: "Works" },
    { id: "career", label: "Career" },
    { id: "ask", label: "Ask AI" },
];

export default function Header() {
    const { pathname } = useLocation();
    const isMain = pathname === "/";
    const [activeId, setActiveId] = useState("");

    /* 프로젝트 상세: 프로젝트명 + 섹션 내비를 헤더에 얹는다 */
    const project = MAIN_PROJECTS.find(
        (item) => pathname === `/project/${item.id}`,
    );
    const detailNav = project
        ? [
              { id: "overview", label: "Overview" },
              ...(project.features?.length
                  ? [{ id: "features", label: "Features" }]
                  : []),
              { id: "contribution", label: "Contribution" },
              ...(project.learn.length
                  ? [{ id: "learn", label: "Trouble Shooting" }]
                  : []),
          ]
        : [];
    const navItems = isMain ? NAV : detailNav;

    /* 관성 스크롤과 어긋나지 않게 앵커 이동을 직접 처리한다 */
    const go = (event: React.MouseEvent, id: string) => {
        // Works는 섹션 머리글이 아니라 첫 프로젝트가 홀딩되는 지점으로 보낸다
        const target =
            id === "works"
                ? document.querySelector("#works [data-block]")
                : document.getElementById(id);
        if (!target) return;
        event.preventDefault();

        // About Me는 섹션 머리글이 아니라 첫 원칙 카드가 자리 잡는 지점으로 보낸다
        if (id === "about") {
            scrollToY(principleScrollY(target as HTMLElement, 0) + WHEEL * 2);
            return;
        }

        // works는 홀딩 지점, 기여와 트러블 슈팅은 휠 한 칸 더 내려간 위치가 보기 좋다.
        // Tech Stack은 제목만 걸리면 휑해서 휠 열세 칸만큼 더 내려간다
        const offset =
            id === "works" || id === "ask" || id === "contact"
                ? 0
                : id === "contribution" || id === "learn"
                  ? -20
                  : id === "tech"
                    ? 88 - WHEEL * 13
                    : 88;
        scrollToY(target.getBoundingClientRect().top + window.scrollY - offset);
    };

    /* 보고 있는 섹션의 메뉴 글자에 색을 준다 */
    useEffect(() => {
        if (navItems.length === 0) return;

        let ticking = false;
        const update = () => {
            ticking = false;
            const line = window.scrollY + window.innerHeight * 0.4;
            let current = "";
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (!section) continue;
                const top =
                    section.getBoundingClientRect().top + window.scrollY;
                if (line >= top && line < top + section.offsetHeight) {
                    current = item.id;
                }
            }
            setActiveId(current);
        };
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
            {isMain ? (
                <div className="shell flex h-16 items-center justify-between gap-6">
                    <Link
                        to="/"
                        // 이미 메인이면 라우팅 대신 부드럽게 맨 위로 되돌린다
                        onClick={(event) => {
                            event.preventDefault();
                            scrollToY(0);
                        }}
                        className="text-sm font-bold tracking-tight md:text-base"
                    >
                        FE<span className="text-pink">.</span>Hayoung
                    </Link>

                    <nav className="hidden items-center gap-7 md:flex">
                        {NAV.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(event) => go(event, item.id)}
                                className={`text-sm font-medium transition-colors hover:text-pink ${
                                    activeId === item.id
                                        ? "text-pink"
                                        : "text-muted"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#contact"
                        onClick={(event) => go(event, "contact")}
                        className="rounded-full bg-pink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pink/75"
                    >
                        Contact
                    </a>
                </div>
            ) : (
                <div className="shell flex h-16 items-center gap-5">
                    <Link
                        to={
                            project
                                ? [
                                      "portfolio-site",
                                      "bookjeokbookjeok",
                                  ].includes(project.id)
                                    ? "/#side-works"
                                    : `/#work-${project.id}`
                                : "/#works"
                        }
                        aria-label="프로젝트 목록의 이 프로젝트 위치로 돌아가기"
                        className="-ml-2 rounded-full p-2 text-ink-soft transition-colors hover:bg-pink-wash hover:text-pink"
                    >
                        <ArrowLeft size={18} />
                    </Link>
                    <span className="truncate text-sm font-bold tracking-tight md:text-base">
                        {project?.title}
                    </span>

                    <nav className="ml-auto hidden items-center gap-7 md:flex">
                        {detailNav.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(event) => go(event, item.id)}
                                className={`text-sm font-medium transition-colors hover:text-pink ${
                                    activeId === item.id
                                        ? "text-pink"
                                        : "text-muted"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            <div
                className="scroll-progress h-0.5 w-full bg-pink"
                aria-hidden="true"
            />
        </header>
    );
}
