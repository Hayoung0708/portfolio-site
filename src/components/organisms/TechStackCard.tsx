import { Wrench } from "lucide-react";
import Badge from "../atoms/Badge";

export default function TechStackCard({ stacks }: { stacks: Stack[] }) {
    return (
        <div className="w-[30%] card flex flex-col gap-3 p-5 rounded-3xl">
            <div className="flex gap-2 text-xl items-center">
                <Wrench
                    strokeWidth={0}
                    className="text-main"
                    fill="currentColor"
                />
                TECH STACK
            </div>
            <hr className="border-gray100/10" />
            {stacks.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                    <span className="text-sub">{s.group}</span>
                    <div className="flex flex-wrap gap-2">
                        {i === 0 &&
                            s.list.map((s, i) => (
                                <Badge
                                    key={i}
                                    className="bg-main/25 text-main rounded-full px-3"
                                >
                                    {s.name}
                                </Badge>
                            ))}
                        {i > 0 &&
                            s.list.map((s, i) => (
                                <Badge
                                    key={i}
                                    className="bg-gray1000 text-white rounded-full px-3"
                                >
                                    {s.name}
                                </Badge>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
