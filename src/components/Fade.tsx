import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/** 토스처럼 흐릿하게 떠오르는 블록. 위로 되돌리면 되감긴다 */
export default function Fade({
    children,
    className,
    delay = 0,
    y = 22,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const context = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { y, autoAlpha: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: 0.7,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        }, ref);

        return () => context.revert();
    }, [delay, y]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
