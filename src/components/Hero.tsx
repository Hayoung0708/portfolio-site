import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Sparkles } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getTextTypingSteps } from "react-hangul-motion";

import profileImg from "@/assets/images/profile.jpg";
import Blossoms from "@/components/Blossoms";
import { BLOSSOMS } from "@/constants/blossoms";
import { PROFILE, STATS } from "@/constants/profile";

gsap.registerPlugin(ScrollTrigger);

/** 제목. 강조할 조각을 나눠 두고, 글자 위치로 색을 입힌다 */
const TITLE_PARTS = [
    { text: "경험", pink: true },
    { text: "을 만드는" },
    { text: "\n" },
    { text: "프론트엔드", pink: true },
    { text: ` ${PROFILE.name}입니다` },
];

const TITLE = TITLE_PARTS.map((part) => part.text).join("");

/** 조각마다 "제목의 몇 번째 글자부터인지" */
const PARTS = (() => {
    let cursor = 0;
    return TITLE_PARTS.map((part) => {
        const start = cursor;
        cursor += part.text.length;
        return { ...part, start };
    });
})();

/** 자모 단위로 조립되는 단계들: ㄱ → 겨 → 경 → 경ㅎ → 경허 → 경험 */
const STEPS = getTextTypingSteps(TITLE, true);
const TYPE = { startMs: 200, stepMs: 22 };

/** 타이핑이 끝난 뒤 이어지는 순서 (ms) */
const AFTER = { body: 0, buttons: 120, stats: 260, statStep: 90 };

/** 속도 차이를 거리로 바꿀 때 쓰는 기준값(px) */
const TRAVEL = 420;

export default function Hero() {
    const [reduced] = useState(
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
    const step = useTypedStep(reduced);
    const done = step >= STEPS.length - 1;

    const sectionRef = useRef<HTMLElement>(null);

    /*
     * 내용은 그냥 스크롤된다. 벚꽃만 저마다 다른 속도로 움직이고,
     * 화면 뒤에 깔린 판의 색이 다음 섹션 색으로 바뀐다.
     * 배경을 섹션이 아니라 고정된 판에 칠하므로 섹션 경계에 선이 생기지 않는다.
     */
    useLayoutEffect(() => {
        if (reduced) return;

        const context = gsap.context(() => {
            const scrollTrigger = {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.4,
            };

            BLOSSOMS.forEach((item, index) => {
                gsap.to(`[data-blossom="${index}"]`, {
                    // 느린 꽃은 아래로 끌리고, 빠른 꽃은 위로 앞질러 사라진다
                    y: (1 - item.speed) * TRAVEL,
                    ease: "none",
                    scrollTrigger,
                });
            });
        }, sectionRef);

        // 폰트가 늦게 붙으면 높이가 달라져 구간이 어긋난다
        void document.fonts.ready.then(() => ScrollTrigger.refresh());

        return () => context.revert();
    }, [reduced]);

    /** 타이핑이 끝나기 전에는 자리만 잡아 두고 숨긴다 */
    const after = (delay: number, classes: string) =>
        done
            ? {
                  className: `fade-up ${classes}`,
                  style: { animationDelay: `${delay}ms` },
              }
            : { className: `opacity-0 ${classes}` };

    return (
        <>
            <section
                ref={sectionRef}
                id="hero"
                className="relative flex min-h-svh flex-col justify-center overflow-hidden py-20"
            >
                <Blossoms />

                <div className="shell relative z-10">
                    <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
                        <div className="min-w-0 flex-1">
                            <p className="fade-up flex flex-wrap items-center gap-x-2 text-sm text-muted md:text-base">
                                <span className="font-semibold text-ink">
                                    {PROFILE.name}
                                </span>
                                <span aria-hidden="true">·</span>
                                <span>{PROFILE.nameEn}</span>
                            </p>

                            <h1
                                aria-label={TITLE.replace("\n", " ")}
                                className="mt-5 min-h-[2.28em] text-[clamp(2.2rem,5.6vw,4.2rem)] leading-[1.14] font-bold tracking-[-0.035em] break-keep"
                            >
                                <TypedTitle step={STEPS[step] ?? ""} />
                            </h1>

                            <p
                                {...after(
                                    AFTER.body,
                                    "mt-7 max-w-2xl text-base leading-[1.6] break-keep text-ink-soft md:text-lg",
                                )}
                            >
                                일상에서 느낀 불편함을 서비스와 도구로 만들어
                                해결해왔습니다.
                                <br />
                                만드는 데서 멈추지 않고 사용자 피드백과 UI
                                디테일, 플로우 설계를 통해 계속 다듬으며 더 나은
                                경험을 만들어갑니다.
                            </p>

                            <div
                                {...after(
                                    AFTER.buttons,
                                    "mt-8 flex flex-wrap gap-2.5",
                                )}
                            >
                                <a
                                    href={PROFILE.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink md:text-base"
                                >
                                    <Github size={16} />
                                    GitHub
                                </a>
                                <a
                                    href="#ask"
                                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-pink hover:text-pink md:text-base"
                                >
                                    <Sparkles size={16} className="text-pink" />
                                    AI에게 물어보기
                                </a>
                            </div>
                        </div>

                        <div className="pop-in relative shrink-0">
                            <div
                                aria-hidden="true"
                                className="absolute -top-4 -right-4 h-full w-full rounded-[2.5rem] bg-pink-soft/60"
                            />
                            <img
                                src={profileImg}
                                alt={`${PROFILE.name} 프로필 사진`}
                                width={228}
                                height={288}
                                className="relative h-[15rem] w-[12rem] rounded-[2.5rem] object-cover md:h-[17rem] md:w-[13.5rem]"
                            />
                        </div>
                    </div>

                    <dl className="mt-14 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4">
                        {STATS.map((stat, index) => (
                            <div
                                key={stat.label}
                                {...after(
                                    AFTER.stats + index * AFTER.statStep,
                                    "rounded-2xl bg-wash px-5 py-5 md:px-6 md:py-6",
                                )}
                            >
                                <dt className="text-xs text-muted md:text-sm">
                                    {stat.label}
                                </dt>
                                <dd className="mt-1.5 text-[1.75rem] leading-tight font-bold tracking-[0.04em] md:text-[2.25rem]">
                                    <PinkNumbers>{stat.value}</PinkNumbers>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>
        </>
    );
}

/**
 * 지금까지 찍힌 만큼만 그린다.
 * 글자 위치로 잘라내므로 강조 색은 찍히는 순간부터 그대로 핑크다.
 */
function TypedTitle({ step }: { step: string }) {
    return (
        <span aria-hidden="true">
            {PARTS.map((part, index) =>
                part.text === "\n" ? (
                    step.length > part.start ? (
                        <br key={index} />
                    ) : null
                ) : (
                    <span
                        key={index}
                        className={part.pink ? "text-pink" : undefined}
                    >
                        {step.slice(part.start, part.start + part.text.length)}
                    </span>
                ),
            )}
        </span>
    );
}

/** 한 단계씩 세어 올린다. 애니메이션을 끈 환경에서는 처음부터 다 보여준다 */
function useTypedStep(reduced: boolean) {
    const [step, setStep] = useState(() => (reduced ? STEPS.length - 1 : 0));

    useEffect(() => {
        if (reduced) return;

        let interval = 0;
        let count = 0;

        const start = window.setTimeout(() => {
            interval = window.setInterval(() => {
                count += 1;
                setStep(count);
                if (count >= STEPS.length - 1) window.clearInterval(interval);
            }, TYPE.stepMs);
        }, TYPE.startMs);

        return () => {
            window.clearTimeout(start);
            window.clearInterval(interval);
        };
    }, [reduced]);

    return step;
}

/** 숫자만 핑크로, 나머지 글자는 그대로 둔다 */
function PinkNumbers({ children }: { children: string }) {
    return (
        <>
            {children.split(/(\d+)/).map((part, index) =>
                /^\d+$/.test(part) ? (
                    <span key={index} className="text-pink">
                        {part}
                    </span>
                ) : (
                    <span
                        key={index}
                        className="text-lg font-semibold md:text-xl"
                    >
                        {part}
                    </span>
                ),
            )}
        </>
    );
}
