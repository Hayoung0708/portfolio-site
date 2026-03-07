import ProjectNav from "@/components/atoms/ProjectNav";
import ProjectContribution from "@/components/templates/ProjectContribution";
import ProjectInfo from "@/components/templates/ProjectInfo";
import { MAIN_PROJECTS } from "@/constants/projects";
import { useRef } from "react";
import { useParams } from "react-router";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = MAIN_PROJECTS.find((p) => p.id === projectId);

    const infoRef = useRef<HTMLDivElement>(null);
    const contributionRefs = useRef<HTMLDivElement[]>([]);

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
            <ProjectNav
                project={project}
                infoRef={infoRef}
                contributionRefs={contributionRefs}
            />
        </>
    );
}
