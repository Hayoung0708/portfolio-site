import { Link, useParams } from "react-router";

import ProjectContribution from "@/components/project/ProjectContribution";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectLearn from "@/components/project/ProjectLearn";
import ProjectNav from "@/components/project/ProjectNav";
import { MAIN_PROJECTS } from "@/constants/projects";

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
