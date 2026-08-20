import { ExternalLink, Github, Package } from "lucide-react";

import type { Project } from "@/types/project";

export default function ProjectHero({ project }: { project: Project }) {
    const links = [
        { key: "github", href: project.link.github, label: "GitHub", icon: Github },
        { key: "deploy", href: project.link.deploy, label: "배포된 서비스", icon: ExternalLink },
        { key: "npm", href: project.link.npm, label: "npm", icon: Package },
    ].filter((link) => Boolean(link.href));

    return (
        <section className="bg-wash pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="shell">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold text-pink">
                        {project.type}
                    </span>
                    <span className="text-muted" aria-hidden="true">
                        ·
                    </span>
                    <span className="text-muted">{project.period}</span>
                    {project.lead && (
                        <span className="pill">{project.lead} Lead</span>
                    )}
                    {project.team && (
                        <span className="pill">
                            FE {project.team.frontend ?? 0}
                            {project.team.backend
                                ? ` · BE ${project.team.backend}`
                                : ""}
                        </span>
                    )}
                </div>

                <h1 className="headline mt-4">{project.title}</h1>
                <p className="body-text mt-3">{project.intro}</p>

                {links.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-3">
                        {links.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold transition-colors hover:border-pink hover:text-pink"
                            >
                                <link.icon size={16} />
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

                {project.image.length > 0 && (
                    <div className="snap-row mt-12">
                        {project.image.map((src, index) => (
                            <img
                                key={src}
                                src={src}
                                alt={`${project.title} 화면 ${index + 1}`}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="max-h-[26rem] w-auto rounded-2xl border border-line bg-paper object-contain"
                            />
                        ))}
                    </div>
                )}

                <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_20rem]">
                    <div>
                        <h2 className="text-xs font-semibold tracking-[0.16em] text-pink uppercase">
                            Overview
                        </h2>
                        <p className="body-text mt-4 whitespace-pre-line">
                            {project.description}
                        </p>
                    </div>

                    <div className="card h-fit p-6">
                        <h2 className="text-xs font-semibold tracking-[0.16em] text-pink uppercase">
                            Stack
                        </h2>
                        <dl className="mt-4 space-y-4">
                            {project.stacks.map((group) => (
                                <div key={group.group}>
                                    <dt className="text-xs font-semibold text-muted">
                                        {group.group}
                                    </dt>
                                    <dd className="mt-1.5 flex flex-wrap gap-1.5">
                                        {group.list.map((item) => (
                                            <span key={item.name} className="pill">
                                                {item.name}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
