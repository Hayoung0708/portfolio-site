import { useEffect, useState } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import type { Feature } from "@/types/project";

import ProjectIcon from "./ProjectIcon";

/** 한 기능을 보여주는 시간(ms). 지나면 자동으로 옆으로 돌아간다 */
const AUTO_MS = 5000;

export default function ProjectFeatures({
    features,
}: {
    features: Array<Feature>;
}) {
    const [active, setActive] = useState(0);
    // 직접 고르면 자동 넘김 타이머를 처음부터 다시 센다
    const [round, setRound] = useState(0);

    useEffect(() => {
        if (features.length < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const timer = window.setInterval(() => {
            setActive((current) => (current + 1) % features.length);
        }, AUTO_MS);
        return () => clearInterval(timer);
    }, [features.length, round]);

    const select = (index: number) => {
        setActive(index);
        setRound((value) => value + 1);
    };

    if (features.length === 0) return null;

    const count = features.length;

    /** 활성 카드 기준 상대 위치. 가장 짧은 쪽으로 돈다 */
    const offsetOf = (index: number) => {
        let offset = index - active;
        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;
        return offset;
    };

    return (
        <section
            id="features"
            className="scroll-mt-16 overflow-hidden py-20 md:py-28"
        >
            <div className="shell">
                <Fade once className="eyebrow">
                    Features
                </Fade>
                <TitleReveal once className="mt-3 text-2xl md:text-3xl">
                    핵심 기능
                </TitleReveal>

                <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12">
                    {/* 기능 목록. 누르면 바로, 그냥 두면 자동으로 넘어간다 */}
                    <Fade once>
                        <ul className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
                            {features.map((feature, index) => {
                                const on = index === active;
                                return (
                                    <li
                                        key={feature.title}
                                        className="shrink-0"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => select(index)}
                                            aria-current={on}
                                            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold break-keep whitespace-nowrap transition-colors md:text-base lg:whitespace-normal ${
                                                on
                                                    ? "bg-paper text-ink shadow-[0_6px_18px_-12px_rgba(47,47,47,0.35)]"
                                                    : "text-muted hover:text-ink"
                                            }`}
                                        >
                                            <span className="flex items-center gap-2.5">
                                                {feature.icon && (
                                                    <span
                                                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-colors ${
                                                            on
                                                                ? "bg-pink-wash text-pink"
                                                                : "bg-line/60 text-muted"
                                                        }`}
                                                    >
                                                        <ProjectIcon
                                                            name={feature.icon}
                                                            size={15}
                                                        />
                                                    </span>
                                                )}
                                                {feature.title}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </Fade>

                    {/* 가운데가 제일 크고, 위아래 카드가 비스듬히 뒤로 물러나 세로로 돈다 */}
                    <Fade once delay={0.1}>
                        <div className="relative h-[30rem] [perspective:1400px] md:h-[34rem]">
                            {features.map((feature, index) => {
                                const offset = offsetOf(index);
                                const depth = Math.abs(offset);
                                const on = offset === 0;

                                return (
                                    <button
                                        key={feature.title}
                                        type="button"
                                        onClick={() => select(index)}
                                        aria-hidden={!on}
                                        tabIndex={on ? -1 : 0}
                                        aria-label={`${feature.title} 보기`}
                                        className="absolute top-1/2 left-1/2 h-[24rem] w-full max-w-[36rem] transition-[transform,opacity] duration-600 ease-out md:h-[27rem]"
                                        style={{
                                            transform: `translate(-50%, -50%) translateY(${offset * 44}%) rotateX(${offset * -14}deg) scale(${1 - depth * 0.1})`,
                                            zIndex: 20 - depth,
                                            opacity:
                                                depth > 1
                                                    ? 0
                                                    : 1 - depth * 0.45,
                                            pointerEvents:
                                                depth > 1 ? "none" : "auto",
                                            cursor: on ? "default" : "pointer",
                                        }}
                                    >
                                        <article className="card flex h-full flex-col overflow-hidden text-left">
                                            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden border-b border-line bg-pink-wash/60">
                                                {feature.img ||
                                                feature.mobileImg ? (
                                                    <img
                                                        src={
                                                            feature.img ??
                                                            feature.mobileImg
                                                        }
                                                        alt={`${feature.title} 화면`}
                                                        loading="lazy"
                                                        className="h-full w-full object-cover object-top"
                                                    />
                                                ) : (
                                                    <span className="text-sm font-semibold text-pink-strong/45">
                                                        이미지 준비 중
                                                    </span>
                                                )}
                                            </div>
                                            {/* 텍스트 영역 높이를 고정해 카드마다 들쭉날쭉하지 않게 */}
                                            <div className="h-28 shrink-0 overflow-hidden p-5 md:h-32 md:p-6">
                                                <h3 className="text-base font-bold md:text-lg">
                                                    {feature.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-2 text-sm break-keep text-ink-soft">
                                                    {feature.body}
                                                </p>
                                            </div>
                                        </article>
                                    </button>
                                );
                            })}
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
