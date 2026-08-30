import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import type { Contribution, ContributionSummary } from "@/types/project";

import ProjectIcon from "./ProjectIcon";

gsap.registerPlugin(ScrollTrigger);

/** 도넛 그래프 반지름·둘레 */
const RADIUS = 30;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProjectContribution({
    summary,
    contributions,
}: {
    summary: Array<ContributionSummary>;
    contributions: Array<Contribution>;
}) {
    const sectionRef = useRef<HTMLElement>(null);

    /* 화면에 들어오면 도넛이 퍼센트만큼 차오른다 */
    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let context: gsap.Context | undefined;
        let frame = 0;
        let waited = 0;

        /*
         * 다른 프로젝트로 넘어온 직후에는 아직 이전 스크롤 위치가 남아 있다.
         * 그대로 걸면 트리거가 이미 지나간 것으로 계산돼 도넛이 처음부터
         * 차 있는 채로 나온다. 관성 스크롤이 맨 위에 닿은 뒤에 건다.
         */
        const build = () => {
            if (window.scrollY > 4 && waited < 30) {
                waited += 1;
                frame = requestAnimationFrame(build);
                return;
            }

            context = gsap.context(() => {
                gsap.utils
                    .toArray<SVGCircleElement>("[data-ring]")
                    .forEach((ring) => {
                        const percent = Number(ring.dataset.percent ?? 0);
                        gsap.fromTo(
                            ring,
                            { strokeDashoffset: CIRCUMFERENCE },
                            {
                                strokeDashoffset:
                                    CIRCUMFERENCE * (1 - percent / 100),
                                duration: 1.1,
                                delay: 0.2,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: ring,
                                    start: "top 85%",
                                    toggleActions: "play none none none",
                                },
                            },
                        );
                    });
            }, sectionRef);
        };

        frame = requestAnimationFrame(build);

        return () => {
            cancelAnimationFrame(frame);
            context?.revert();
        };
        // 프로젝트가 바뀌면 도넛 개수와 값이 달라져 다시 건다
    }, [summary]);

    return (
        <section
            ref={sectionRef}
            id="contribution"
            className="scroll-mt-16 py-20 md:py-28"
        >
            <div className="shell">
                <Fade once className="eyebrow">
                    Contribution
                </Fade>
                <TitleReveal once className="mt-3 text-2xl md:text-3xl">
                    프로젝트 기여
                </TitleReveal>

                {/* 요약 카드가 본문 폭을 전부 나눠 가진다 */}
                <div
                    className="mt-12 grid gap-4 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
                    style={
                        {
                            "--cols": Math.min(summary.length, 3),
                        } as React.CSSProperties
                    }
                >
                    {summary.map((item, index) => (
                        <Fade once key={item.title} delay={index * 0.08}>
                            <div className="card flex h-full items-center gap-5 p-6">
                                <div className="relative h-20 w-20 shrink-0">
                                    <svg
                                        viewBox="0 0 72 72"
                                        className="h-full w-full -rotate-90"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            cx="36"
                                            cy="36"
                                            r={RADIUS}
                                            fill="none"
                                            strokeWidth="8"
                                            className="stroke-line"
                                        />
                                        <circle
                                            data-ring
                                            data-percent={item.percent}
                                            cx="36"
                                            cy="36"
                                            r={RADIUS}
                                            fill="none"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray={CIRCUMFERENCE}
                                            strokeDashoffset={CIRCUMFERENCE}
                                            className="stroke-pink"
                                        />
                                    </svg>
                                    <span className="absolute inset-0 grid place-items-center text-sm font-bold text-pink">
                                        {item.percent}%
                                    </span>
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-bold break-keep">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm whitespace-pre-line text-ink-soft">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                <div className="mt-16 space-y-14 md:mt-20">
                    {contributions.map((contribution) => (
                        <Fade once key={contribution.title}>
                            <article>
                                <div className="flex items-center gap-3">
                                    {contribution.icon && (
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pink-wash text-pink">
                                            <ProjectIcon
                                                name={contribution.icon}
                                                size={17}
                                            />
                                        </span>
                                    )}
                                    <h3 className="text-lg font-bold break-keep md:text-xl">
                                        {contribution.title}
                                    </h3>
                                </div>

                                <div className="mt-6 space-y-5 border-l-2 border-pink-soft pl-6 md:ml-4 md:pl-8">
                                    {contribution.list.map((item, itemIndex) => (
                                        <div key={item.title || itemIndex}>
                                            {/* 소제목 없이 항목만 두는 프로젝트도 있다 */}
                                            {item.title && (
                                                <h4 className="text-sm font-semibold text-pink md:text-base">
                                                    {item.title}
                                                </h4>
                                            )}
                                            <p className="text-sm leading-relaxed break-keep whitespace-pre-line text-ink-soft not-first:mt-2 md:text-base">
                                                {item.body}
                                            </p>
                                            {item.img && (
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="mt-4 max-h-60 max-w-full rounded-xl border border-line object-contain"
                                                />
                                            )}
                                        </div>
                                    ))}

                                    {contribution.img && (
                                        <div className="snap-row pt-1">
                                            {contribution.img.map((image) => (
                                                <figure
                                                    key={image.src}
                                                    className="shrink-0"
                                                >
                                                    <img
                                                        src={image.src}
                                                        alt={image.title}
                                                        loading="lazy"
                                                        className="h-44 w-auto max-w-full rounded-xl border border-line md:h-56"
                                                    />
                                                    <figcaption className="mt-2 text-center text-xs text-muted">
                                                        {image.title}
                                                    </figcaption>
                                                </figure>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
}
