import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import { PROFILE } from "@/constants/profile";
import { scrollToY } from "@/lib/scroll";

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

    /* 관성 스크롤과 어긋나지 않게 앵커 이동을 직접 처리한다 */
    const go = (event: React.MouseEvent, id: string) => {
        const section = document.getElementById(id);
        if (!section) return;
        event.preventDefault();
        scrollToY(section.getBoundingClientRect().top + window.scrollY - 64);
    };

    /* 보고 있는 섹션의 메뉴 글자에 색을 준다 */
    useEffect(() => {
        if (!isMain) return;

        let ticking = false;
        const update = () => {
            ticking = false;
            const line = window.scrollY + window.innerHeight * 0.4;
            let current = "";
            for (const item of NAV) {
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
    }, [isMain]);

    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
            <div className="shell flex h-16 items-center justify-between gap-6">
                <Link
                    to="/"
                    className="text-sm font-bold tracking-tight md:text-base"
                >
                    {PROFILE.name}
                    <span className="ml-1.5 text-pink">.</span>
                </Link>

                {isMain && (
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
                )}

                <a
                    href={isMain ? "#contact" : "/#contact"}
                    onClick={
                        isMain ? (event) => go(event, "contact") : undefined
                    }
                    className="rounded-full bg-pink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pink/75"
                >
                    Contact
                </a>
            </div>

            <div
                className="scroll-progress h-0.5 w-full bg-pink"
                aria-hidden="true"
            />
        </header>
    );
}
