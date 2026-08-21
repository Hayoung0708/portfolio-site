import { CircleAlert, Lightbulb, Wrench } from "lucide-react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import type { Learn } from "@/types/project";

const BLOCKS = [
    { key: "problem", label: "Problem", icon: CircleAlert },
    { key: "solution", label: "Solution", icon: Wrench },
    { key: "learn", label: "Learn", icon: Lightbulb },
] as const;

export default function ProjectLearn({ learn }: { learn: Array<Learn> }) {
    if (learn.length === 0) return null;

    return (
        <section id="learn" className="scroll-mt-16 py-20 md:py-28">
            <div className="shell">
                <Fade once className="eyebrow">
                    Trouble Shooting
                </Fade>
                <TitleReveal once className="mt-3 text-2xl md:text-3xl">
                    트러블 슈팅
                </TitleReveal>

                <div className="mt-12 space-y-6">
                    {learn.map((item, index) => (
                        <Fade once key={item.title} delay={(index % 2) * 0.06}>
                            <article className="card p-6 md:p-8">
                                <span className="inline-flex items-center rounded-lg bg-pink-wash px-3 py-1.5 text-xs font-semibold text-pink-strong">
                                    {item.badge}
                                </span>
                                <h3 className="mt-3 text-lg font-bold break-keep md:text-xl">
                                    {item.title}
                                </h3>

                                <div
                                    className="mt-6 grid gap-6 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
                                    style={
                                        {
                                            "--cols": BLOCKS.filter(
                                                (block) => item[block.key],
                                            ).length,
                                        } as React.CSSProperties
                                    }
                                >
                                    {BLOCKS.filter(
                                        (block) => item[block.key],
                                    ).map((block) => (
                                        <div key={block.key}>
                                            <h4 className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.16em] text-pink uppercase">
                                                <block.icon size={14} />
                                                {block.label}
                                            </h4>
                                            <p className="mt-2.5 text-sm leading-relaxed break-keep whitespace-pre-line text-ink-soft">
                                                {item[block.key]}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {item.img && (
                                    <div className="snap-row mt-6">
                                        {item.img.map((shot) => (
                                            <figure
                                                key={shot.src}
                                                className="shrink-0"
                                            >
                                                <img
                                                    src={shot.src}
                                                    alt={shot.title}
                                                    loading="lazy"
                                                    className="h-44 w-auto max-w-full rounded-xl border border-line md:h-56"
                                                />
                                                <figcaption className="mt-2 text-center text-xs text-muted">
                                                    {shot.title}
                                                </figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                )}
                            </article>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
}
