import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

import { TECH_STACKS } from "@/constants/techStack";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** 마지막 카드가 멈춘 뒤 화면을 더 붙잡아 두는 길이. 화면 높이 기준 */
const HOLD = 0.9;

const ICON_OF = Object.fromEntries(
    TECH_STACKS.flatMap((group) =>
        group.skills.map((skill) => [skill.name, skill.icon]),
    ),
);

/**
 * 배경에서 바닥부터 떠오르는 아이콘들. 벚꽃과 달리 그룹 없이 하나씩,
 * 속도·크기·깊이(z)가 전부 다르다. 중요한 기술일수록 크고 앞에 온다.
 *  depth 0 = 최전면 · 1 = 중간 · 2 = 뒤(작고 흐리게)
 *  x는 화면 왼쪽 기준 %, lag는 출발을 늦추는 여분 거리(px)
 */
const FLOATERS: Array<{
    name: string;
    size: number;
    x: number;
    depth: 0 | 1 | 2;
    speed: number;
    lag: number;
}> = [
    { name: "React", size: 92, x: 8, depth: 0, speed: 1.5, lag: 0 },
    { name: "TypeScript", size: 84, x: 76, depth: 0, speed: 1.32, lag: 140 },
    { name: "Next.js", size: 80, x: 31, depth: 0, speed: 1.18, lag: 320 },
    { name: "TailwindCSS", size: 76, x: 55, depth: 0, speed: 1.42, lag: 520 },
    { name: "Claude Code", size: 76, x: 90, depth: 0, speed: 1.24, lag: 240 },
    { name: "JavaScript", size: 60, x: 17, depth: 1, speed: 1.08, lag: 460 },
    { name: "HTML5", size: 50, x: 43, depth: 1, speed: 0.92, lag: 120 },
    { name: "CSS3", size: 50, x: 67, depth: 1, speed: 1.12, lag: 640 },
    { name: "Zustand", size: 56, x: 3, depth: 1, speed: 0.96, lag: 300 },
    {
        name: "TanStack Query",
        size: 56,
        x: 84,
        depth: 1,
        speed: 1.02,
        lag: 560,
    },
    { name: "Supabase", size: 54, x: 50, depth: 1, speed: 0.86, lag: 80 },
    { name: "Git / GitHub", size: 42, x: 12, depth: 2, speed: 0.76, lag: 220 },
    { name: "Figma", size: 40, x: 62, depth: 2, speed: 0.8, lag: 420 },
    { name: "Vercel", size: 38, x: 25, depth: 2, speed: 0.7, lag: 90 },
    { name: "Notion", size: 38, x: 95, depth: 2, speed: 0.78, lag: 360 },
    { name: "Slack", size: 34, x: 38, depth: 2, speed: 0.72, lag: 540 },
    { name: "Jira", size: 34, x: 72, depth: 2, speed: 0.68, lag: 180 },
    { name: "Netlify", size: 34, x: 88, depth: 2, speed: 0.66, lag: 480 },
    {
        name: "Google Analytics",
        size: 32,
        x: 5,
        depth: 2,
        speed: 0.62,
        lag: 260,
    },
    { name: "Ollama", size: 40, x: 46, depth: 2, speed: 0.82, lag: 700 },
    {
        name: "Chrome Built-in AI",
        size: 42,
        x: 21,
        depth: 2,
        speed: 0.88,
        lag: 600,
    },
];

const DEPTH_CLASS = {
    0: "z-[3]",
    1: "z-[2] opacity-75",
    2: "z-[1] opacity-55 blur-[1.5px]",
} as const;

/**
 * 제목이 흐리게 떠오른 뒤, 세로로 긴 카드들이 스크롤을 따라
 * 오른쪽에서 왼쪽으로 흘러간다. 화면은 그동안 붙잡혀 있다.
 */
export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const context = gsap.context(() => {
            const section = sectionRef.current;
            const track = trackRef.current;
            if (!section || !track) return;

            /*
             * 카드 줄을 왼쪽으로 민다. 마지막 카드가 자리를 잡은 뒤에도
             * HOLD 만큼은 화면을 붙잡아 둔 다음에야 고정이 풀린다
             */
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () =>
                        "+=" +
                        (section.offsetHeight -
                            window.innerHeight * (1 + HOLD)),
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                },
            });

            if (reduced) return;

            /* 배경 아이콘이 바닥에서 화면 위로, 저마다의 속도로 지나간다 */
            gsap.utils
                .toArray<HTMLElement>("[data-floater]")
                .forEach((floater, index) => {
                    const item = FLOATERS[index];
                    gsap.to(floater, {
                        y: () =>
                            -(window.innerHeight + item.size * 2 + item.lag) *
                            item.speed,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.5,
                            invalidateOnRefresh: true,
                        },
                    });
                });

            const enter = {
                trigger: section,
                start: "top top-=10%",
                toggleActions: "play none none reverse",
            };
            const soft = { ease: "power3.out", scrollTrigger: enter };

            gsap.fromTo(
                eyebrowRef.current,
                { y: 14, autoAlpha: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: 0.6,
                    ...soft,
                },
            );

            void document.fonts.ready.then(() => {
                if (!titleRef.current) return;

                const split = SplitText.create(titleRef.current, {
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
                        delay: 0.15,
                        stagger: 0.035,
                        ...soft,
                    },
                );

                ScrollTrigger.refresh();
            });
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section ref={sectionRef} id="tech" className="relative h-[470svh]">
            <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
                {/* 카드 뒤 배경에서 떠오르는 아이콘들 */}
                <div aria-hidden="true" className="absolute inset-0">
                    {FLOATERS.map((item) => (
                        <img
                            key={item.name}
                            data-floater
                            src={ICON_OF[item.name]}
                            alt=""
                            width={item.size}
                            height={item.size}
                            loading="lazy"
                            className={`absolute object-contain ${DEPTH_CLASS[item.depth]}`}
                            style={{
                                left: `${item.x}%`,
                                top: `calc(100% + ${item.lag}px)`,
                                width: item.size,
                                height: item.size,
                            }}
                        />
                    ))}
                </div>

                <div className="shell relative z-10">
                    <p ref={eyebrowRef} className="eyebrow">
                        Tech Stack
                    </p>
                    <h2 ref={titleRef} className="headline mt-3">
                        사용하는 기술들이에요
                    </h2>
                </div>

                <div
                    ref={trackRef}
                    className="relative z-10 mt-12 flex w-max gap-5"
                >
                    {/* 카드가 화면 오른쪽 바깥에서 들어오도록 화면 한 폭을 비워 둔다 */}
                    <div className="w-screen shrink-0" />

                    {TECH_STACKS.map((group) => (
                        <article
                            key={group.title}
                            className="card flex h-[21rem] w-[14rem] shrink-0 flex-col p-5 md:h-[28rem] md:w-[19rem] md:p-7"
                        >
                            <h3 className="text-base font-medium tracking-[0.02em] text-pink/85 md:text-lg">
                                {group.title}
                            </h3>

                            <ul className="mt-5 space-y-4 md:mt-7 md:space-y-6">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill.name}
                                        className="text-sm font-semibold break-keep md:text-lg"
                                    >
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}

                    <div className="w-6 shrink-0 md:w-10" />
                </div>
            </div>
        </section>
    );
}
