import ProjectInfo from "@/components/templates/ProjectInfo";
import { MAIN_PROJECTS } from "@/constants/projects";
import { useParams } from "react-router";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = MAIN_PROJECTS.find((p) => p.id === projectId);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <>
            <ProjectInfo project={project} />
        </>
    );
}
