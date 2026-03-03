import ChronologyBadge from "../atoms/ChronologyBadge";

interface Project {
    title: string;
    name: string;
    body: string;
    lead?: string;
}
interface Node {
    date: string;
    title: string;
    body: string;
    list?: string[];
    projects?: Project[];
    badges?: string[];
}

export default function ChronologyCard({
    id,
    node,
    position,
}: {
    id: number;
    node: Node;
    position: "left" | "right";
}) {
    return (
        <div className={`relative ${id === 3 && "my-50"}`}>
            <div className="w-5 h-5 bg-main rounded-full flex justify-center items-center">
                <div className="w-3 h-3 bg-gray1000 rounded-full" />
            </div>
            <div
                className={`absolute top-3 w-[40vw] p-5 flex flex-col gap-3 bg-gray600/50 border border-gray100/10 rounded-4xl
                ${position === "left" ? "right-10 -translate-y-1/2" : "left-10 -translate-y-1/2"}`}
            >
                <span className="-mb-3">{node.date}</span>
                <h4>{node.title}</h4>
                {node.body && (
                    <p className="whitespace-pre-wrap text-[#94a3b8]">
                        {node.body}
                    </p>
                )}
                {node.list && (
                    <ul>
                        {node.list.map((l, i) => (
                            <li key={i} className="text-[#94a3b8]">
                                ◦ {l}
                            </li>
                        ))}
                    </ul>
                )}
                {node.projects &&
                    node.projects.map((p, i) => (
                        <div
                            key={i}
                            className="w-full flex flex-col gap-1 px-4 py-3 bg-gray100/10 rounded-2xl"
                        >
                            <span className="font-medium">{p.title}</span>
                            <div className="flex justify-between">
                                <div>
                                    {p.name}{" "}
                                    <span className="text-gray100/70">
                                        {p.body}
                                    </span>
                                </div>
                                {p.lead && (
                                    <div className="bg-main px-2 rounded-full text-gray1000">
                                        {p.lead} Lead
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                {node.badges && (
                    <div className="flex gap-2">
                        {node.badges.map((b, i) => (
                            <ChronologyBadge key={i}>{b}</ChronologyBadge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
