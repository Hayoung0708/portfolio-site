import type { Contribution, ContributionSummary } from "@/types/project";

import ProjectIcon from "./ProjectIcon";

export default function ProjectContribution({
    summary,
    contributions,
}: {
    summary: Array<ContributionSummary>;
    contributions: Array<Contribution>;
}) {
    return (
        <section className="bg-wash py-20 md:py-28">
            <div className="shell">
                <p className="eyebrow">Contribution</p>
                <h2 className="headline mt-3 text-3xl md:text-4xl">맡은 일</h2>

                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {summary.map((item) => (
                        <div key={item.title} className="card reveal p-6">
                            <div className="flex items-baseline justify-between gap-3">
                                <h3 className="font-bold break-keep">
                                    {item.title}
                                </h3>
                                <span className="text-2xl font-bold text-pink">
                                    {item.percent}
                                    <span className="text-sm">%</span>
                                </span>
                            </div>

                            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
                                <div
                                    className="h-full rounded-full bg-pink"
                                    style={{ width: `${item.percent}%` }}
                                />
                            </div>

                            <p className="mt-4 text-sm whitespace-pre-line text-ink-soft">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 space-y-4">
                    {contributions.map((contribution) => (
                        <details
                            key={contribution.title}
                            open
                            className="card reveal group p-6 md:p-8"
                        >
                            <summary className="flex cursor-pointer list-none items-center gap-3">
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
                                <span className="ml-auto text-xs text-muted transition-transform group-open:rotate-180">
                                    ▾
                                </span>
                            </summary>

                            <div className="mt-6 space-y-6 border-t border-line pt-6">
                                {contribution.list.map((item) => (
                                    <div key={item.title}>
                                        <h4 className="text-sm font-semibold text-pink md:text-base">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 text-sm leading-relaxed break-keep whitespace-pre-line text-ink-soft md:text-base">
                                            {item.body}
                                        </p>
                                        {item.img && (
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                loading="lazy"
                                                className="mt-4 max-h-80 rounded-xl border border-line object-contain"
                                            />
                                        )}
                                    </div>
                                ))}

                                {contribution.img && (
                                    <div className="snap-row pt-2">
                                        {contribution.img.map((image) => (
                                            <figure
                                                key={image.src}
                                                className="w-[18rem] md:w-[24rem]"
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.title}
                                                    loading="lazy"
                                                    className="rounded-xl border border-line"
                                                />
                                                <figcaption className="mt-2 text-xs text-muted">
                                                    {image.title}
                                                </figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
