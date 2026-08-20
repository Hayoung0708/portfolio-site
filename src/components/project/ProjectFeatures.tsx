import type { Feature } from "@/types/project";

import ProjectIcon from "./ProjectIcon";

export default function ProjectFeatures({
    features,
}: {
    features: Array<Feature>;
}) {
    if (features.length === 0) return null;

    return (
        <section className="bg-paper py-20 md:py-28">
            <div className="shell">
                <p className="eyebrow">Features</p>
                <h2 className="headline mt-3 text-3xl md:text-4xl">주요 기능</h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className="card reveal overflow-hidden"
                        >
                            {feature.img && (
                                <img
                                    src={feature.img}
                                    alt={`${feature.title} 화면`}
                                    loading="lazy"
                                    className="w-full border-b border-line object-cover"
                                />
                            )}
                            <div className="p-6">
                                <div className="flex items-center gap-2.5">
                                    {feature.icon && (
                                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-pink-wash text-pink">
                                            <ProjectIcon
                                                name={feature.icon}
                                            />
                                        </span>
                                    )}
                                    <h3 className="text-lg font-bold">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="mt-3 text-sm break-keep text-ink-soft md:text-base">
                                    {feature.body}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
