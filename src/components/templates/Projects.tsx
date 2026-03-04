import ProjectCard from "../organisms/ProjectCard";
import { MAIN_PROJECTS } from "@/constants/projects";

export default function Projects() {
    return (
        <div className="template pt-0">
            <h2 className="mb-5">Main Projects</h2>
            <div className="w-full grid grid-cols-2 gap-10">
                {MAIN_PROJECTS.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </div>
    );
}
