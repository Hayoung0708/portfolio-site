import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";

import Header from "@/components/Header";
import { track } from "@/lib/analytics";
import { destroySmoothScroll, initSmoothScroll, scrollToY } from "@/lib/scroll";

export default function RootLayout() {
    const { pathname, hash } = useLocation();
    const previousPath = useRef<string | null>(null);

    /* SPA 라우트 전환도 GA 페이지뷰로 남긴다 (첫 로드는 gtag config가 집계) */
    useEffect(() => {
        if (previousPath.current !== null) {
            track("page_view", { page_path: pathname });
        }
    }, [pathname]);

    /* 관성(미끄러지는) 스크롤 */
    useEffect(() => {
        initSmoothScroll();
        return () => destroySmoothScroll();
    }, []);

    /*
     * react-router의 ScrollRestoration은 해시를 다루지 않아서,
     * "/#works" 같은 링크로 들어오면 맨 위에 머문다. 직접 처리한다.
     * 같은 페이지 안에서의 앵커 클릭은 부드럽게, 페이지 진입은 즉시.
     */
    useEffect(() => {
        const firstLoad = previousPath.current === null;
        const samePage = previousPath.current === pathname;
        previousPath.current = pathname;

        /* 새로고침·직접 진입은 해시가 있어도 무조건 맨 위에서 시작한다 */
        if (firstLoad) {
            if (hash) history.replaceState(null, "", pathname);
            scrollToY(0, false);
            return;
        }

        if (!hash) {
            scrollToY(0, false);
            return;
        }

        const jump = (smooth: boolean) => {
            // 프로젝트 계열 해시는 해당 블록이 홀딩되는 지점(블록 최상단)으로 보낸다
            const isWork = hash === "#works" || hash.startsWith("#work-");
            const target = document.querySelector(
                hash === "#works" ? "#works [data-block]" : hash,
            );
            if (!target) return;
            // 일반 섹션은 scroll-mt-16(64px)을 수동 계산에도 반영한다
            scrollToY(
                target.getBoundingClientRect().top +
                    window.scrollY -
                    (isWork ? 0 : 64),
                smooth,
            );
        };

        if (samePage) {
            jump(true);
            return;
        }

        /* 페이지 전환: 최상단을 먼저 보여준 뒤 부드럽게 목적지로 내려간다 */
        scrollToY(0, false);
        const timer = window.setTimeout(() => jump(true), 350);
        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}
