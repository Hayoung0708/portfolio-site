import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";

import { MAIN_PROJECTS, SIDE_WORKS } from "@/constants/projects";
import { scrollToY } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** 목록에 세워 둘 순서. 여기 없는 프로젝트는 "그 외"로 내려간다 */
const ORDER = [
    "my-little-agent",
    "tabletop-online",
    "duncop",
    "studium",
    "de-caffeine",
];

const FEATURED = ORDER.map((id) =>
    MAIN_PROJECTS.find((project) => project.id === id),
).filter((project) => project !== undefined);

export default function Works() {
    const sectionRef = useRef<HTMLElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const sideRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [navVisible, setNavVisible] = useState(false);
    const [frameVisible, setFrameVisible] = useState(false);
    const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

    useLayoutEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const mm = gsap.matchMedia();
        const context = gsap.context(() => {
            if (!reduced) {
                const enter = {
                    trigger: sectionRef.current,
                    start: "top top+=70%",
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
            }

            mm.add("(min-width: 768px)", () => {
                /* 프레임이 보일 때만 영상을 재생한다 */
                ScrollTrigger.create({
                    trigger: wrapRef.current,
                    start: "top 80%",
                    end: "bottom top",
                    onToggle: (self) => setFrameVisible(self.isActive),
                });

                /* 프로젝트 구간 안에서만 왼쪽 점 네비게이션이 보인다 */
                ScrollTrigger.create({
                    trigger: wrapRef.current,
                    start: "top 40%",
                    end: "bottom 75%",
                    onToggle: (self) => setNavVisible(self.isActive),
                });

                /* 텍스트 블록이 화면 중앙을 지나면 그 프로젝트가 활성 */
                gsap.utils
                    .toArray<HTMLElement>("[data-block]")
                    .forEach((block, index) => {
                        ScrollTrigger.create({
                            trigger: block,
                            start: "top 55%",
                            end: "bottom 55%",
                            onToggle: (self) => {
                                if (self.isActive) setActive(index);
                            },
                        });
                    });

                if (reduced) return;

                /*
                 * 섹션 진입 때 프레임이 한 번 날아와 앉는다. 오른쪽 아래
                 * 모서리를 붙잡고 1.26배 — 커진 만큼 전부 왼쪽 화면을 덮고,
                 * rotateY로 왼쪽이 가깝게 기운 채 떠올라 반듯하게 펴진다.
                 */
                gsap.fromTo(
                    frameRef.current,
                    {
                        yPercent: 50,
                        scale: 1.26,
                        rotateY: 10,
                        transformOrigin: "100% 100%",
                    },
                    {
                        yPercent: 0,
                        scale: 1,
                        rotateY: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrapRef.current,
                            start: "top 66%",
                            end: "top top",
                            scrub: 0.6,
                        },
                    },
                );

                /*
                 * 마지막 프로젝트를 지나면 프레임이 살짝 줄며 위로 떠난다.
                 * 크게 날아와서 작게 떠나는 수미상관.
                 */
                gsap.fromTo(
                    frameRef.current,
                    { scale: 1, yPercent: 0, autoAlpha: 1 },
                    {
                        scale: 0.92,
                        yPercent: -10,
                        autoAlpha: 0,
                        ease: "none",
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: sideRef.current,
                            start: "top 96%",
                            end: "top 45%",
                            scrub: 0.6,
                        },
                    },
                );
            });

            if (reduced) return;

            /* 그 외 프로젝트 행이 아래에서 하나씩 밀려 올라온다 */
            gsap.utils
                .toArray<HTMLElement>("[data-side-row]")
                .forEach((row) => {
                    gsap.fromTo(
                        row,
                        { y: 44, autoAlpha: 0 },
                        {
                            y: 0,
                            autoAlpha: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: row,
                                start: "top 96%",
                                end: "top 76%",
                                scrub: 0.5,
                            },
                        },
                    );
                });
        }, sectionRef);

        return () => {
            mm.revert();
            context.revert();
        };
    }, []);

    /* 활성 슬라이드가 바뀔 때마다 그 영상만 처음부터 다시 재생한다 */
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;
            if (frameVisible && index === active) {
                video.currentTime = 0;
                void video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, [active, frameVisible]);

    const jump = (index: number) => {
        const block =
            sectionRef.current?.querySelectorAll("[data-block]")[index];
        if (!block) return;
        scrollToY(block.getBoundingClientRect().top + window.scrollY);
    };

    return (
        <section
            ref={sectionRef}
            id="works"
            className="scroll-mt-16 py-24 md:py-32"
        >
            <div className="shell">
                <p ref={eyebrowRef} className="eyebrow">
                    Works
                </p>
                <h2 ref={titleRef} className="headline mt-4">
                    만든 것들을 소개할게요
                </h2>
            </div>

            <div
                ref={wrapRef}
                className="relative mt-12 md:mt-16 md:grid md:grid-cols-[1fr_60vw] md:pb-[18svh]"
            >
                {/* 화면 왼쪽 끝에 붙는 점 네비게이션. 프로젝트 구간에서만 나타난다 */}
                <nav
                    aria-label="프로젝트 목록"
                    className={`fixed top-1/2 left-5 z-40 hidden -translate-y-1/2 md:block ${navVisible ? "" : "pointer-events-none"}`}
                >
                    <ul className="flex flex-col items-center gap-3.5">
                        {FEATURED.map((project, index) => (
                            <li
                                key={project.id}
                                className={`transition-all duration-500 ease-out ${
                                    navVisible
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-3 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: navVisible
                                        ? `${index * 55}ms`
                                        : "0ms",
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => jump(index)}
                                    aria-label={`${project.title}로 이동`}
                                    aria-current={index === active}
                                    className="group relative flex h-4 w-4 items-center justify-center"
                                >
                                    <span
                                        className={`block rounded-full transition-all duration-300 ${
                                            index === active
                                                ? "h-3 w-3 bg-pink"
                                                : "h-2 w-2 bg-ink/20 group-hover:bg-pink/60"
                                        }`}
                                    />
                                    <span className="pointer-events-none absolute left-6 rounded-full bg-ink px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        {project.title}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <div
                        aria-hidden="true"
                        className="hidden md:block md:h-[70svh]"
                    />

                    {FEATURED.map((project) => (
                        /* 텍스트가 중앙에 앉아 홀딩됐다가 다음 프로젝트에 밀려난다 */
                        <div
                            key={project.id}
                            id={`work-${project.id}`}
                            data-block
                            className="md:h-[150svh]"
                        >
                            <div className="max-w-xl px-6 py-14 md:sticky md:top-0 md:flex md:h-svh md:flex-col md:justify-center md:py-0 md:pt-16 md:pr-10 md:pl-16 lg:pl-24">
                                <p className="text-sm text-muted">
                                    <span className="font-semibold text-pink">
                                        {project.type}
                                    </span>
                                    <span className="mx-2" aria-hidden="true">
                                        ·
                                    </span>
                                    {project.period}
                                </p>

                                <h3 className="mt-2 text-3xl leading-tight font-bold tracking-tight break-keep md:text-4xl">
                                    {project.title}
                                </h3>
                                <p className="body-text mt-4">
                                    {project.intro}
                                </p>

                                {project.tags && (
                                    <p className="mt-3 flex flex-wrap gap-x-2.5 gap-y-1 text-sm font-semibold text-pink">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>#{tag}</span>
                                        ))}
                                    </p>
                                )}

                                <ul className="mt-8 space-y-3 border-t border-line pt-8">
                                    {project.highlights.map((line) => (
                                        <li
                                            key={line}
                                            className="flex gap-3 text-sm break-keep text-ink-soft md:text-base"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-3 h-px w-3 shrink-0 bg-current"
                                            />
                                            {line}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-9 flex flex-wrap items-center gap-3">
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink"
                                    >
                                        자세히 보기
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </Link>
                                    {project.link.github && (
                                        <a
                                            href={project.link.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-pink hover:text-pink"
                                        >
                                            <Github size={16} />
                                            GitHub
                                        </a>
                                    )}
                                    {project.link.deploy && (
                                        <a
                                            href={project.link.deploy}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-pink hover:text-pink"
                                        >
                                            <ExternalLink size={16} />
                                            바로가기
                                        </a>
                                    )}
                                </div>

                                {/* 모바일은 프레임 대신 본문 아래에 이미지 */}
                                <Link
                                    to={`/project/${project.id}`}
                                    aria-label={`${project.title} 자세히 보기`}
                                    tabIndex={-1}
                                    className="mt-10 block overflow-hidden rounded-[1.5rem] border border-line shadow-[0_10px_28px_-18px_rgba(47,47,47,0.16)] md:hidden"
                                >
                                    <div className="flex aspect-video items-center justify-center overflow-hidden bg-pink-wash">
                                        {project.video ? (
                                            <video
                                                src={project.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="h-full w-full object-cover"
                                            />
                                        ) : project.image[0] ? (
                                            <img
                                                src={project.image[0]}
                                                alt=""
                                                loading="lazy"
                                                className="h-full w-full object-cover object-top"
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-pink-strong">
                                                {project.title}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 섹션 전체를 따라다니는 이미지 프레임. 스크롤에 맞춰 교체된다 */}
                <div className="hidden md:block">
                    <div className="sticky top-0 flex h-svh items-center pt-16 pr-6">
                        <div className="w-full [perspective:1400px]">
                            <div
                                ref={frameRef}
                                className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-line bg-pink-wash shadow-[0_10px_28px_-18px_rgba(47,47,47,0.16)]"
                            >
                                {FEATURED.map((project, index) => (
                                    <div
                                        key={project.id}
                                        aria-hidden={index !== active}
                                        className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-700 ease-out ${
                                            index === active
                                                ? "scale-100 opacity-100"
                                                : "scale-[1.04] opacity-0"
                                        }`}
                                    >
                                        {project.video ? (
                                            <video
                                                ref={(element) => {
                                                    videoRefs.current[index] =
                                                        element;
                                                }}
                                                src={project.video}
                                                muted
                                                loop
                                                playsInline
                                                preload="metadata"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : project.image[0] ? (
                                            <img
                                                src={project.image[0]}
                                                alt=""
                                                loading="lazy"
                                                className="h-full w-full object-cover object-top"
                                            />
                                        ) : (
                                            <span className="text-4xl font-bold text-pink-strong">
                                                {project.title}
                                            </span>
                                        )}
                                    </div>
                                ))}

                                <Link
                                    to={`/project/${FEATURED[active].id}`}
                                    aria-label={`${FEATURED[active].title} 자세히 보기`}
                                    tabIndex={-1}
                                    className="absolute inset-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={sideRef} className="shell mt-20 md:mt-28">
                <h3 className="reveal-fade text-sm font-semibold tracking-[0.16em] text-muted uppercase">
                    그 외 프로젝트
                </h3>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                    {SIDE_WORKS.map((work) => (
                        <li
                            key={work.title}
                            data-side-row
                            className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:gap-6"
                        >
                            <span className="w-36 shrink-0 text-sm text-muted">
                                {work.period}
                            </span>
                            <span className="w-44 shrink-0 font-bold">
                                {work.to ? (
                                    <Link
                                        to={work.to}
                                        className="transition-colors hover:text-pink"
                                    >
                                        {work.title}
                                    </Link>
                                ) : (
                                    work.title
                                )}
                            </span>
                            <span className="flex-1 text-sm break-keep text-ink-soft">
                                {work.intro}
                            </span>

                            <span className="flex shrink-0 items-center gap-1.5">
                                {work.to && (
                                    <Link
                                        to={work.to}
                                        className="group mr-1 inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-pink hover:text-pink"
                                    >
                                        자세히 보기
                                        <ArrowRight
                                            size={13}
                                            className="transition-transform group-hover:translate-x-0.5"
                                        />
                                    </Link>
                                )}
                                {work.github && (
                                    <a
                                        href={work.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${work.title} GitHub`}
                                        className="rounded-full p-2 text-muted transition-colors hover:bg-pink-wash hover:text-pink"
                                    >
                                        <Github size={16} />
                                    </a>
                                )}
                                {work.deploy && (
                                    <a
                                        href={work.deploy}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${work.title} 배포된 서비스`}
                                        className="rounded-full p-2 text-muted transition-colors hover:bg-pink-wash hover:text-pink"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
