import ProjectNav from "@/components/atoms/ProjectNav";
import ProjectContribution from "@/components/templates/ProjectContribution";
import ProjectInfo from "@/components/templates/ProjectInfo";
import ProjectLearn from "@/components/templates/ProjectLearn";
import { MAIN_PROJECTS } from "@/constants/projects";
import { useEffect, useRef } from "react";
import { useParams } from "react-router";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = MAIN_PROJECTS.find((p) => p.id === projectId);

    const infoRef = useRef<HTMLDivElement>(null);
    const contributionRefs = useRef<HTMLDivElement[]>([]);
    const learnRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [project]);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <>
            <ProjectInfo project={project} infoRef={infoRef} />
            <ProjectContribution
                summary={project.contributionSummary}
                contributions={project.contributions}
                contributionRefs={contributionRefs}
            />
            <ProjectLearn learn={project.learn} learnRefs={learnRefs} />

            <ProjectNav
                project={project}
                infoRef={infoRef}
                contributionRefs={contributionRefs}
                learnRefs={learnRefs}
                nav={project.nav}
            />
        </>
    );
}
