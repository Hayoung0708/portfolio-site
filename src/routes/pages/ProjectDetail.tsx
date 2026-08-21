import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { Link, useParams } from "react-router";

import ProjectContribution from "@/components/project/ProjectContribution";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectLearn from "@/components/project/ProjectLearn";
import ProjectNav from "@/components/project/ProjectNav";
import { MAIN_PROJECTS } from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

const PAPER = "#ffffff";
const WASH = "#fff5f7";

/**
 * 상세 페이지 배경판. 배경색이 다른 구간(핵심 기능·트러블 슈팅)에
 * 스크롤로 다가가면 서서히 물들었다가 지나가면 다시 흰색이 된다.
 */
function DetailBackdrop({ projectId }: { projectId: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const context = gsap.context(() => {
            ["features", "learn"].forEach((id) => {
                const target = document.getElementById(id);
                if (!target) return;

                gsap.fromTo(
                    ref.current,
                    { backgroundColor: PAPER },
                    {
                        backgroundColor: WASH,
                        ease: "none",
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: target,
                            start: "top 85%",
                            end: "top 35%",
                            scrub: 0.4,
                        },
                    },
                );

                gsap.fromTo(
                    ref.current,
                    { backgroundColor: WASH },
                    {
                        backgroundColor: PAPER,
                        ease: "none",
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: target,
                            start: "bottom 65%",
                            end: "bottom 15%",
                            scrub: 0.4,
                        },
                    },
                );
            });
        });

        return () => context.revert();
        // 프로젝트가 바뀌면 섹션 구성이 달라져 다시 건다
    }, [projectId]);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-paper"
        />
    );
}

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = MAIN_PROJECTS.find((item) => item.id === projectId);

    if (!project) {
        return (
            <section className="shell flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
                <h1 className="headline">프로젝트를 찾을 수 없습니다</h1>
                <Link
                    to="/#works"
                    className="rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white"
                >
                    전체 프로젝트 보기
                </Link>
            </section>
        );
    }

    return (
        <>
            <DetailBackdrop projectId={project.id} />
            <ProjectHero project={project} />
            <ProjectFeatures features={project.features ?? []} />
            <ProjectContribution
                summary={project.contributionSummary}
                contributions={project.contributions}
            />
            <ProjectLearn learn={project.learn} />
            <ProjectNav nav={project.nav} />
        </>
    );
}
