import Lenis from "lenis";

/** 관성 스크롤 인스턴스. 모션 최소화 환경에서는 만들지 않는다 */
export let lenis: Lenis | null = null;

export function initSmoothScroll() {
    if (
        lenis ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }
    lenis = new Lenis({ autoRaf: true });
}

export function destroySmoothScroll() {
    lenis?.destroy();
    lenis = null;
}

/** 관성 스크롤과 충돌하지 않는 스크롤 이동 */
export function scrollToY(top: number, smooth = true) {
    if (lenis) {
        lenis.scrollTo(top, smooth ? undefined : { immediate: true });
        return;
    }
    window.scrollTo({ top, behavior: smooth ? "smooth" : "instant" });
}
