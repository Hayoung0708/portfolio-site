import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PAPER = "#ffffff";
const WASH = "#fff5f7";

/**
 * 화면 전체에 깔린 고정 판. 배경색을 섹션이 아니라 이 판에 칠하므로
 * 섹션 경계에 선이 생기지 않고, 스크롤을 따라 서서히 물든다.
 *  흰색 → (히어로가 밀려나는 동안) 연분홍 → (기술 스택이 올라오는 동안) 흰색
 */
export default function Backdrop() {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const context = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { backgroundColor: PAPER },
                {
                    backgroundColor: WASH,
                    ease: "none",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: "#hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.4,
                    },
                },
            );

            gsap.fromTo(
                ref.current,
                { backgroundColor: WASH },
                {
                    backgroundColor: PAPER,
                    ease: "none",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: "#tech",
                        start: "top bottom",
                        end: "top top",
                        scrub: 0.4,
                    },
                },
            );

            /* 동료 리뷰 구간에서 다시 연분홍으로 물들었다가 빠진다 */
            gsap.fromTo(
                ref.current,
                { backgroundColor: PAPER },
                {
                    backgroundColor: WASH,
                    ease: "none",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: "#review",
                        start: "top bottom",
                        end: "top top",
                        scrub: 0.4,
                    },
                },
            );

            gsap.fromTo(
                ref.current,
                { backgroundColor: WASH },
                {
                    backgroundColor: PAPER,
                    ease: "none",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: "#review",
                        start: "bottom bottom",
                        end: "bottom top",
                        scrub: 0.4,
                    },
                },
            );
        });

        return () => context.revert();
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-paper"
        />
    );
}
