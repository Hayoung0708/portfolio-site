import type { Learn } from "@/types/project";

const BLOCKS = [
    { key: "problem", label: "Problem" },
    { key: "solution", label: "Solution" },
    { key: "learn", label: "Learn" },
] as const;

export default function ProjectLearn({ learn }: { learn: Array<Learn> }) {
    if (learn.length === 0) return null;

    return (
        <section className="bg-paper py-20 md:py-28">
            <div className="shell">
                <p className="eyebrow">Trouble Shooting</p>
                <h2 className="headline mt-3 text-3xl md:text-4xl">
                    막힌 곳과 배운 것
                </h2>

                <div className="mt-12 space-y-6">
                    {learn.map((item) => (
                        <article key={item.title} className="card reveal p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-pink px-3 py-1 text-xs font-semibold text-white">
                                    {item.badge}
                                </span>
                                <h3 className="text-lg font-bold break-keep md:text-xl">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="mt-6 grid gap-6 md:grid-cols-3">
                                {BLOCKS.filter((block) => item[block.key]).map(
                                    (block) => (
                                        <div key={block.key}>
                                            <h4 className="text-xs font-semibold tracking-[0.16em] text-pink uppercase">
                                                {block.label}
                                            </h4>
                                            <p className="mt-2.5 text-sm leading-relaxed break-keep whitespace-pre-line text-ink-soft">
                                                {item[block.key]}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>

                            {item.img && (
                                <div className="snap-row mt-6">
                                    {item.img.map((shot) => (
                                        <figure
                                            key={shot.src}
                                            className="w-[18rem] md:w-[24rem]"
                                        >
                                            <img
                                                src={shot.src}
                                                alt={shot.title}
                                                loading="lazy"
                                                className="rounded-xl border border-line"
                                            />
                                            <figcaption className="mt-2 text-xs text-muted">
                                                {shot.title}
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
