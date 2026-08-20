import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import { CHRONOLOGY_NODES } from "@/constants/chronology";
import { CERTIFICATES } from "@/constants/profile";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const context = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>("[data-node]");

            /* 세로선이 지금 읽는 위치까지만 그어진다 */
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0, transformOrigin: "top" },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 72%",
                        end: "bottom 78%",
                        scrub: 0.4,
                    },
                },
            );

            items.forEach((item) => {
                const enter = {
                    trigger: item,
                    start: "top 74%",
                    toggleActions: "play none none reverse",
                };

                /* 선이 닿을 때 점이 톡 하고 켜진다 */
                gsap.fromTo(
                    item.querySelector("[data-dot]"),
                    { scale: 0, autoAlpha: 0 },
                    {
                        scale: 1,
                        autoAlpha: 1,
                        duration: 0.4,
                        ease: "back.out(2.5)",
                        scrollTrigger: enter,
                    },
                );

                /* 내용 블록이 왼쪽에서 흐릿하게 크게 미끄러져 들어오고 */
                gsap.fromTo(
                    item.querySelector("[data-entry]"),
                    { x: -64, autoAlpha: 0, filter: "blur(10px)" },
                    {
                        x: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: enter,
                    },
                );

                /* 그 안의 제목·본문·목록·카드가 순서대로 쌓인다 */
                gsap.fromTo(
                    item.querySelector("[data-entry]")?.children ?? [],
                    { y: 26, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.55,
                        delay: 0.12,
                        stagger: 0.09,
                        ease: "power3.out",
                        scrollTrigger: enter,
                    },
                );

                /* 날짜도 반대편에서 살짝 */
                gsap.fromTo(
                    item.querySelector("[data-date]"),
                    { x: 24, autoAlpha: 0 },
                    {
                        x: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: enter,
                    },
                );

                /* 다 읽고 지나간 항목은 한 발 물러난다 */
                ScrollTrigger.create({
                    trigger: item,
                    start: "bottom 38%",
                    onEnter: () =>
                        gsap.to(item, { opacity: 0.45, duration: 0.4 }),
                    onLeaveBack: () =>
                        gsap.to(item, { opacity: 1, duration: 0.4 }),
                });
            });
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="career"
            className="scroll-mt-16 py-24 md:py-32"
        >
            <div className="shell">
                <Fade className="eyebrow">Career</Fade>
                <TitleReveal className="mt-4">이런 경험을 했어요</TitleReveal>

                <ol className="relative mt-16 md:mt-24">
                    {/* 스크롤을 따라 그려지는 세로선 */}
                    <div
                        ref={lineRef}
                        aria-hidden="true"
                        className="absolute top-3 bottom-3 left-[5px] w-px bg-pink-soft lg:left-[13.5rem]"
                    />

                    {CHRONOLOGY_NODES.map((node) => (
                        <li
                            key={`${node.date}-${node.title}`}
                            data-node
                            className="relative grid gap-3 pb-16 pl-7 last:pb-0 lg:grid-cols-[13.5rem_1fr] lg:gap-0 lg:pl-0"
                        >
                            {/* 기간은 해당 항목을 읽는 동안 화면에 붙어 있는다 */}
                            <div
                                data-date
                                className="lg:sticky lg:top-24 lg:self-start lg:pr-10 lg:text-right"
                            >
                                <time className="text-sm font-semibold text-muted">
                                    {node.date}
                                </time>
                            </div>

                            <span
                                data-dot
                                aria-hidden="true"
                                className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full bg-pink lg:top-[7px] lg:left-[13.5rem] lg:-translate-x-[5px]"
                            />

                            <div data-entry className="min-w-0 lg:pl-10">
                                <h3 className="text-lg font-bold break-keep md:text-2xl">
                                    {node.title}
                                </h3>
                                <p className="mt-2 text-sm whitespace-pre-line text-ink-soft md:text-base">
                                    {node.body}
                                </p>

                                {node.list && (
                                    <ul className="mt-5 space-y-2">
                                        {node.list.map((item) => (
                                            <li
                                                key={item}
                                                className="relative pl-4 text-sm break-keep text-muted before:absolute before:top-2.5 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-pink-soft md:text-base"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {node.projects && (
                                    <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                                        {node.projects.map((project) => (
                                            <div
                                                key={project.name}
                                                className="card px-4 py-3.5"
                                            >
                                                <p className="text-[10px] font-semibold tracking-[0.14em] text-pink uppercase">
                                                    {project.title}
                                                    {project.lead &&
                                                        ` · ${project.lead} LEAD`}
                                                </p>
                                                <p className="mt-1 text-sm font-bold">
                                                    {project.name}
                                                </p>
                                                {project.body && (
                                                    <p className="mt-0.5 text-xs text-muted">
                                                        {project.body}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {node.badges && (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {node.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className="inline-flex items-center rounded-lg bg-pink-wash px-3 py-1.5 text-xs font-semibold text-pink-strong"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="reveal mt-14 flex flex-wrap gap-3 border-t border-line pt-8">
                    {CERTIFICATES.map((certificate) => (
                        <div
                            key={certificate.name}
                            className="inline-flex items-center rounded-lg bg-pink-wash px-3 py-1.5 text-xs font-semibold text-pink-strong"
                        >
                            {certificate.name}
                            <span className="ml-2 font-medium text-pink-strong/60">
                                {certificate.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
