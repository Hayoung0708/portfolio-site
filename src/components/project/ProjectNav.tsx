import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { Link } from "react-router";

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
        <nav className="border-t border-line bg-wash py-14">
            <div className="shell grid gap-3 md:grid-cols-3">
                {prev ? (
                    <Link
                        to={`/project/${prev.id}`}
                        className="card flex items-center gap-3 p-5 transition-colors hover:border-pink-soft"
                    >
                        <ArrowLeft size={18} className="shrink-0 text-pink" />
                        <span className="min-w-0">
                            <span className="block text-xs text-muted">
                                이전 프로젝트
                            </span>
                            <span className="block truncate font-semibold">
                                {prev.title}
                            </span>
                        </span>
                    </Link>
                ) : (
                    <span />
                )}

                <Link
                    to="/#works"
                    className="card flex items-center justify-center gap-2 p-5 font-semibold transition-colors hover:border-pink-soft"
                >
                    <LayoutGrid size={17} className="text-pink" />
                    전체 프로젝트
                </Link>

                {next ? (
                    <Link
                        to={`/project/${next.id}`}
                        className="card flex items-center justify-end gap-3 p-5 text-right transition-colors hover:border-pink-soft"
                    >
                        <span className="min-w-0">
                            <span className="block text-xs text-muted">
                                다음 프로젝트
                            </span>
                            <span className="block truncate font-semibold">
                                {next.title}
                            </span>
                        </span>
                        <ArrowRight size={18} className="shrink-0 text-pink" />
                    </Link>
                ) : (
                    <span />
                )}
            </div>
        </nav>
    );
}
