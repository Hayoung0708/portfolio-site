import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

import Fade from "@/components/Fade";
import { MAIN_PROJECTS } from "@/constants/projects";

export default function ProjectNav({
    nav,
}: {
    nav: { prev?: string; next?: string };
}) {
    const find = (id?: string) =>
        id ? MAIN_PROJECTS.find((project) => project.id === id) : undefined;

    const prev = find(nav.prev);
    const next = find(nav.next);

    return (
        <nav className="py-20 md:py-28">
            <div className="shell">
                {/* 이전은 왼쪽, 다음은 오른쪽. 없으면 자리만 비워 둔다 */}
                <div className="grid border-y border-line md:grid-cols-2">
                    {prev ? (
                        <Fade once>
                            <Link
                                to={`/project/${prev.id}`}
                                className="group block py-10 md:py-14 md:pr-10"
                            >
                                <p className="text-sm font-semibold text-muted">
                                    이전 프로젝트
                                </p>
                                <p className="mt-1.5 flex items-center gap-3 text-2xl font-bold tracking-tight break-keep transition-colors group-hover:text-pink md:text-4xl">
                                    <ArrowLeft
                                        className="shrink-0 transition-transform group-hover:-translate-x-2"
                                        size={26}
                                    />
                                    {prev.title}
                                </p>
                                <p className="mt-1 pl-10 text-sm text-ink-soft md:text-base">
                                    {prev.intro}
                                </p>
                            </Link>
                        </Fade>
                    ) : (
                        <span />
                    )}

                    {next ? (
                        <Fade once>
                            <Link
                                to={`/project/${next.id}`}
                                className="group block border-t border-line py-10 text-right md:border-t-0 md:py-14 md:pl-10"
                            >
                                <p className="text-sm font-semibold text-muted">
                                    다음 프로젝트
                                </p>
                                <p className="mt-1.5 flex items-center justify-end gap-3 text-2xl font-bold tracking-tight break-keep transition-colors group-hover:text-pink md:text-4xl">
                                    {next.title}
                                    <ArrowRight
                                        className="shrink-0 transition-transform group-hover:translate-x-2"
                                        size={26}
                                    />
                                </p>
                                <p className="mt-1 pr-10 text-sm text-ink-soft md:text-base">
                                    {next.intro}
                                </p>
                            </Link>
                        </Fade>
                    ) : (
                        <span />
                    )}
                </div>

                <Fade once delay={0.1} className="mt-8 text-center">
                    <Link
                        to="/#works"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-pink hover:text-pink"
                    >
                        모든 프로젝트 보기
                    </Link>
                </Fade>
            </div>
        </nav>
    );
}
