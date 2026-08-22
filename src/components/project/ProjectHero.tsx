import { ChevronDown, ExternalLink, Github, Package } from "lucide-react";
import { useState } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import type { Project } from "@/types/project";

export default function ProjectHero({ project }: { project: Project }) {
    // 모바일에서는 첫 스택 그룹만 보이고, 버튼으로 펼친다
    const [stacksOpen, setStacksOpen] = useState(false);

    const links = [
        {
            key: "github",
            href: project.link.github,
            label: "GitHub",
            icon: Github,
        },
        {
            key: "deploy",
            href: project.link.deploy,
            label: "바로가기",
            icon: ExternalLink,
        },
        { key: "npm", href: project.link.npm, label: "npm", icon: Package },
    ].filter((link) => Boolean(link.href));

    return (
        <section className="pt-10 pb-20 md:pt-12 md:pb-28">
            <div className="shell">
                {/* 제목이 위 가운데, 이미지가 그 아래. 첫 화면이라 애니메이션 없이 바로 보인다 */}
                <h1 className="headline text-center text-pink">
                    {project.title}
                </h1>
                <p className="mx-auto mt-1 max-w-2xl text-center text-lg leading-[1.7] break-keep text-ink-soft md:text-xl">
                    {project.intro}
                </p>

                {(project.video || project.image[0]) && (
                    <div
                        className="relative mx-auto mt-8 aspect-video overflow-hidden rounded-[1.5rem] border border-line bg-pink-wash shadow-[0_10px_28px_-18px_rgba(47,47,47,0.16)] md:rounded-[2rem]"
                        style={{
                            width: "min(100%, calc(55svh * 16 / 9))",
                        }}
                    >
                        {project.video ? (
                            <video
                                src={project.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <img
                                src={project.image[0]}
                                alt={`${project.title} 대표 화면`}
                                className="h-full w-full object-cover object-top"
                            />
                        )}
                    </div>
                )}

                {/* 좌하단 기간·팀 구성, 우하단 버튼 */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
                    <dl className="flex flex-wrap gap-x-14 gap-y-4">
                        <div>
                            <dt className="text-sm font-medium text-muted">
                                프로젝트 기간
                            </dt>
                            <dd className="mt-1 text-lg font-semibold md:text-xl">
                                {project.period}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-muted">
                                팀원 구성
                            </dt>
                            <dd className="mt-1 text-lg font-semibold md:text-xl">
                                FE {project.team?.frontend ?? 1}
                                {project.team?.backend
                                    ? ` · BE ${project.team.backend}`
                                    : ""}
                                {project.lead && ` · ${project.lead} Lead`}
                            </dd>
                        </div>
                    </dl>

                    {links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {links.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={
                                        link.key === "github"
                                            ? "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink"
                                            : "inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-pink hover:text-pink"
                                    }
                                >
                                    <link.icon size={16} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* 개요 + 스티키 메타 */}
                <div
                    id="overview"
                    className="mt-16 grid scroll-mt-24 gap-12 md:mt-20 md:grid-cols-[1fr_17rem] md:gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12"
                >
                    <div>
                        <Fade once className="eyebrow">
                            Overview
                        </Fade>
                        <TitleReveal once className="mt-3 text-2xl md:text-3xl">
                            프로젝트 소개
                        </TitleReveal>
                        <Fade once delay={0.1} className="mt-6">
                            <p className="body-text whitespace-pre-line">
                                {project.description}
                            </p>
                        </Fade>
                    </div>

                    <Fade once delay={0.15}>
                        <aside className="card sticky top-24 p-6">
                            <div>
                                <h3 className="text-xs font-semibold tracking-[0.16em] text-pink uppercase">
                                    Tech Stack
                                </h3>
                                <dl className="mt-3">
                                    {/* 첫 그룹은 항상 보인다 */}
                                    {project.stacks.slice(0, 1).map((group) => (
                                        <div key={group.group}>
                                            <dt className="text-xs font-semibold text-muted">
                                                {group.group}
                                            </dt>
                                            <dd className="mt-1.5 flex flex-wrap gap-1.5">
                                                {group.list.map((item) => (
                                                    <span
                                                        key={item.name}
                                                        className="inline-flex items-center rounded-lg bg-pink-wash px-2.5 py-1 text-xs font-semibold text-pink-strong"
                                                    >
                                                        {item.name}
                                                    </span>
                                                ))}
                                            </dd>
                                        </div>
                                    ))}

                                    {/* 나머지는 모바일에서 부드럽게 펼쳐진다 */}
                                    {project.stacks.length > 1 && (
                                        <div
                                            className={`grid transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[1fr] ${
                                                stacksOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="mt-4 space-y-4">
                                                    {project.stacks
                                                        .slice(1)
                                                        .map((group) => (
                                                            <div
                                                                key={
                                                                    group.group
                                                                }
                                                            >
                                                                <dt className="text-xs font-semibold text-muted">
                                                                    {
                                                                        group.group
                                                                    }
                                                                </dt>
                                                                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                                                                    {group.list.map(
                                                                        (
                                                                            item,
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    item.name
                                                                                }
                                                                                className="inline-flex items-center rounded-lg bg-pink-wash px-2.5 py-1 text-xs font-semibold text-pink-strong"
                                                                            >
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                        ),
                                                                    )}
                                                                </dd>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </dl>

                                {project.stacks.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setStacksOpen((value) => !value)
                                        }
                                        className="mt-4 flex w-full items-center justify-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-pink md:hidden"
                                    >
                                        {stacksOpen ? "접기" : "전체 보기"}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${stacksOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                )}
                            </div>
                        </aside>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
