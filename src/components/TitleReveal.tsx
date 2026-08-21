import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** 다른 섹션 제목과 같은, 글자가 흐리게 떠오르는 헤드라인 */
export default function TitleReveal({
    children,
    className,
    once = false,
}: {
    children: React.ReactNode;
    className?: string;
    /** true면 한 번 나타난 뒤 스크롤을 되돌려도 사라지지 않는다 */
    once?: boolean;
}) {
    const ref = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const context = gsap.context(() => {
            void document.fonts.ready.then(() => {
                if (!ref.current) return;

                const split = SplitText.create(ref.current, {
                    type: "chars",
                });

                gsap.fromTo(
                    split.chars,
                    { yPercent: 55, autoAlpha: 0, filter: "blur(12px)" },
                    {
                        yPercent: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 0.7,
                        ease: "power3.out",
                        stagger: 0.035,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 82%",
                            toggleActions: once
                                ? "play none none none"
                                : "play none none reverse",
                        },
                    },
                );

                ScrollTrigger.refresh();
            });
        }, ref);

        return () => context.revert();
    }, [once]);

    return (
        <h2 ref={ref} className={`headline ${className ?? ""}`}>
            {children}
        </h2>
    );
}
