import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef, useState } from "react";

import { PRINCIPLES } from "@/constants/profile";
import { scrollToY } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** 카드 한 장이 차지할 스크롤 높이(화면 높이 배수) */
const SCREENS_PER_CARD = 1.6;

/** 들고 나는 데 쓰는 진행률 폭. 이 구간에서 카드가 화면을 가로지른다 */
const CROSS = 0.1;

/**
 * 왼쪽 제목과 목록은 화면에 붙어 있고, 오른쪽 카드가 스크롤을 따라
 * 아래에서 올라와 잠시 머물다 위로 빠져나간다. 다음 카드가 곧바로 뒤따른다.
 */
export default function Principles() {
    const trackRef = useRef<HTMLElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const context = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            /*
             * 카드: 스크롤 진행률에 맞춰 흘러간다.
             *  데스크톱 — 화면 아래 → 가운데 → 화면 위 (세로)
             *  모바일 — 화면 오른쪽 → 가운데 → 화면 왼쪽 (가로)
             * 세로 가운데 정렬은 yPercent가 맡는다.
             */
            const buildDeck = (horizontal: boolean) => {
                const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
                const offscreen = () =>
                    horizontal ? window.innerWidth : window.innerHeight;
                const axis = horizontal ? "x" : "y";

                gsap.set(cards, {
                    yPercent: -50,
                    x: 0,
                    y: 0,
                    [axis]: offscreen(),
                });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        // 제목과 목록이 다 나온 뒤, 반 화면쯤 더 내려야 첫 카드가 온다
                        trigger: track,
                        start: "top top-=50%",
                        end: "bottom bottom",
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        onUpdate: ({ progress }) =>
                            setActive(
                                Math.min(
                                    PRINCIPLES.length - 1,
                                    Math.floor(progress * PRINCIPLES.length),
                                ),
                            ),
                    },
                });

                // 전체 길이를 1로 고정한다. 아래 위치값이 그대로 진행률이 된다
                timeline.to({}, { duration: 1 }, 0);

                const slot = 1 / PRINCIPLES.length;

                cards.forEach((card, index) => {
                    timeline.to(
                        card,
                        { [axis]: 0, ease: "none", duration: CROSS },
                        Math.max(0, index * slot - CROSS / 2),
                    );
                    if (index < cards.length - 1) {
                        timeline.to(
                            card,
                            {
                                [axis]: () => -offscreen(),
                                ease: "none",
                                duration: CROSS,
                            },
                            (index + 1) * slot - CROSS / 2,
                        );
                    }
                });
            };

            const mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => buildDeck(false));
            mm.add("(max-width: 767px)", () => buildDeck(true));

            if (reduced) return;

            /*
             * 섹션이 화면에 붙고 조금 더 내려야 시작한다.
             * 라벨 → 제목 글자 → 목록 순으로 흐리게 번지며 떠오른다.
             * 마스크로 자르지 않아서 글자가 잘리는 선이 보이지 않는다.
             */
            // 위로 되돌리면 애니메이션도 되감긴다
            const enter = {
                trigger: track,
                start: "top top-=15%",
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

            if (listRef.current) {
                gsap.fromTo(
                    listRef.current.children,
                    { x: -40, autoAlpha: 0, filter: "blur(6px)" },
                    {
                        x: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 0.7,
                        delay: 0.8,
                        stagger: 0.14,
                        ...soft,
                    },
                );
            }
        }, trackRef);

        return () => context.revert();
    }, []);

    /** 눌린 항목이 활성화되는 구간의 한가운데로 보낸다 */
    function jumpTo(index: number) {
        const track = trackRef.current;
        if (!track) return;

        const total = track.offsetHeight - window.innerHeight;
        const ratio = (index + 0.5) / PRINCIPLES.length;
        scrollToY(track.offsetTop + total * ratio);
    }

    return (
        <section
            ref={trackRef}
            id="about"
            className="relative"
            style={{
                height: `${100 + PRINCIPLES.length * SCREENS_PER_CARD * 100}svh`,
            }}
        >
            <div className="sticky top-0 h-svh overflow-hidden">
                <div className="shell grid h-full content-center gap-3 pt-8 pb-6 md:content-normal md:items-center md:gap-8 md:pt-36 md:pb-20 lg:grid-cols-[26rem_1fr] lg:gap-16">
                    <div>
                        <p ref={eyebrowRef} className="eyebrow">
                            About Me
                        </p>
                        <h2 ref={titleRef} className="headline mt-3">
                            이런 자세로 개발해요
                        </h2>

                        <ul ref={listRef} className="mt-10 hidden lg:block">
                            {PRINCIPLES.map((principle, index) => {
                                const on = index === active;

                                return (
                                    <li key={principle.no}>
                                        <button
                                            type="button"
                                            aria-current={on}
                                            onClick={() => jumpTo(index)}
                                            className="flex w-full items-start gap-4 border-b border-line py-6 text-left"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`mt-2.5 h-px shrink-0 transition-[width,background-color] duration-500 ${
                                                    on
                                                        ? "w-8 bg-pink"
                                                        : "w-3 bg-ink/20"
                                                }`}
                                            />
                                            <span
                                                className={`mt-0.5 shrink-0 text-xs font-bold transition-colors duration-500 ${
                                                    on
                                                        ? "text-pink"
                                                        : "text-pink-soft"
                                                }`}
                                            >
                                                {principle.no}
                                            </span>
                                            <span
                                                className={`text-sm leading-snug font-semibold break-keep transition-colors duration-500 ${
                                                    on
                                                        ? "text-ink"
                                                        : "text-muted/60"
                                                }`}
                                            >
                                                {principle.title}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* 카드가 지나가는 무대 */}
                    <div className="relative h-[24rem] md:h-full">
                        {PRINCIPLES.map((principle, index) => (
                            <article
                                key={principle.no}
                                data-card
                                className="card absolute top-1/2 right-0 left-0 p-5 md:p-11"
                            >
                                <span className="text-3xl font-bold text-pink-soft md:text-6xl">
                                    {principle.no}
                                </span>
                                <h3 className="mt-3 text-xl leading-snug font-bold break-keep md:text-[1.7rem]">
                                    <Underlined
                                        text={principle.title}
                                        mark={principle.emphasis}
                                        on={index === active}
                                    />
                                </h3>
                                <p className="mt-4 text-sm leading-[1.75] break-keep whitespace-pre-line text-ink-soft md:mt-5 md:text-base">
                                    {principle.body}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4 md:mt-7 md:pt-6">
                                    {principle.proof
                                        .split(" · ")
                                        .map((item) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center rounded-lg bg-pink-wash px-3 py-1.5 text-xs font-semibold text-pink-strong"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/** 지정한 구절에만 밑줄을 긋는다. 카드가 자리를 잡으면 왼쪽에서 그어진다 */
function Underlined({
    text,
    mark,
    on,
}: {
    text: string;
    mark: string;
    on: boolean;
}) {
    const at = text.indexOf(mark);
    if (at < 0) return <>{text}</>;

    return (
        <>
            {text.slice(0, at)}
            <span className="relative inline-block">
                {mark}
                <span
                    aria-hidden="true"
                    // 가로 폭을 늘린다. scaleX로 늘리면 그리는 동안 확대 렌더링돼
                    // 두꺼워 보이다가 끝에서 제 두께로 돌아가 얇아진 것처럼 보인다
                    className={`absolute bottom-0 left-0 h-[0.17em] rounded-full bg-pink transition-[width] duration-700 ease-out ${
                        on ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: on ? "400ms" : "0ms" }}
                />
            </span>
            {text.slice(at + mark.length)}
        </>
    );
}
