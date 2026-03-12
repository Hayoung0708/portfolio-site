import ProjectCard from "../organisms/ProjectCard";
import { MAIN_PROJECTS } from "@/constants/projects";

export default function Projects({
    projectsRef,
}: {
    projectsRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <div className="template pt-0" ref={projectsRef}>
            <h2 className="mb-5" data-aos="fade-right" id="main-projects">
                Main Projects
            </h2>
            <div className="w-full grid grid-cols-2 gap-10">
                {MAIN_PROJECTS.map((p, i) => (
                    <ProjectCard key={i} project={p} id={i} />
                ))}
            </div>
        </div>
    );
}
