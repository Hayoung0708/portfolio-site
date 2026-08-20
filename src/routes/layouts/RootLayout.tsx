import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";

import Header from "@/components/Header";
import { destroySmoothScroll, initSmoothScroll, scrollToY } from "@/lib/scroll";

export default function RootLayout() {
    const { pathname, hash } = useLocation();
    const previousPath = useRef<string | null>(null);

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
        const samePage = previousPath.current === pathname;
        previousPath.current = pathname;

        if (!hash) {
            scrollToY(0, false);
            return;
        }

        const jump = (smooth: boolean) => {
            const target = document.querySelector(hash);
            if (!target) return;
            // 섹션의 scroll-mt-16(64px)을 수동 계산에도 반영한다
            scrollToY(
                target.getBoundingClientRect().top + window.scrollY - 64,
                smooth,
            );
        };

        if (samePage) {
            jump(true);
            return;
        }

        jump(false);
        // 폰트가 늦게 붙으면 텍스트가 리플로우되면서 위치가 어긋난다. 한 번 더 맞춘다.
        void document.fonts.ready.then(() => jump(false));
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
