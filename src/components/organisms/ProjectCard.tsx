import Badge from "../atoms/Badge";
import { useNavigate } from "react-router";

export default function ProjectCard({ project }: { project: Project }) {
    const navigate = useNavigate();

    return (
        <div
            className="group w-full border border-gray100/10 bg-gray600/50 rounded-3xl shadow-[0_0_10px_var(--color-shadow)] hover:-translate-y-2"
            onClick={() => navigate(`/project/${project.id}`)}
        >
            <div className="overflow-hidden rounded-t-3xl">
                <img
                    src={project.image[0]}
                    className="w-full aspect-video object-cover group-hover:scale-102"
                />
            </div>
            <div className="flex flex-col p-5">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Badge className="bg-main text-gray1000">
                            {project.stacks[0].list[1].name.toUpperCase()}
                        </Badge>
                        <Badge className="bg-gray600 text-main">
                            {project.type}
                        </Badge>
                    </div>
                    {project.lead && <span>{project.lead} Lead</span>}
                </div>
                <h4>{project.title}</h4>
                <p className="text-sub whitespace-pre-wrap">{project.intro}</p>
            </div>
        </div>
    );
}
