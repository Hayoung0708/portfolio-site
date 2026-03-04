import Badge from "../atoms/Badge";
import { useNavigate } from "react-router";

export default function ProjectCard({ project }: { project: Project }) {
    const navigate = useNavigate();

    return (
        <div
            className="w-full border border-gray600 bg-gray900 rounded-3xl shadow-lg"
            onClick={() => navigate(`/project/${project.id}`)}
        >
            <img
                src={project.image}
                className="w-full aspect-video object-cover rounded-t-3xl"
            />
            <div className="flex flex-col p-5">
                <div className="flex gap-2">
                    <Badge className="bg-main text-gray1000">
                        {project.stacks[0].list[1].name.toUpperCase()}
                    </Badge>
                    <Badge className="bg-gray600 text-main">
                        {project.type}
                    </Badge>
                    {project.lead && (
                        <Badge className="bg-gray600 text-main">
                            {project.lead} Lead
                        </Badge>
                    )}
                </div>
                <h4>{project.title}</h4>
                <p className="text-sub whitespace-pre-wrap">{project.intro}</p>
            </div>
        </div>
    );
}
