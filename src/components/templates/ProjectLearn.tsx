import { BookOpen, Lightbulb, Sparkles, TriangleAlert } from "lucide-react";
import Badge from "../atoms/Badge";

export default function ProjectLearn({
    learn,
    learnRefs,
}: {
    learn: Learn[];
    learnRefs: React.RefObject<HTMLDivElement[]>;
}) {
    return (
        <div className="template flex flex-col gap-5 py-10 px-[20%]">
            <div
                ref={(el) => {
                    // eslint-disable-next-line
                    if (el) learnRefs.current[0] = el;
                }}
                className="flex gap-2 text-4xl font-semibold"
            >
                <BookOpen size={40} className="text-main" />
                어려웠던 점 & 배운 점
            </div>
            <ul className="flex flex-col gap-5">
                {learn.map((l, i) => (
                    <li
                        key={i}
                        className="card relative flex flex-col gap-5 p-5 rounded-3xl"
                    >
                        <div
                            ref={(el) => {
                                if (el) learnRefs.current[i + 1] = el;
                            }}
                            className="flex flex-col items-start gap-1"
                        >
                            <Badge className="bg-main/25 text-gray100 px-3 rounded-full">
                                {l.badge}
                            </Badge>
                            <h4>{l.title}</h4>
                        </div>
                        {l.img && (
                            <div className="flex gap-5 justify-center items-center">
                                {l.img.map((img, i) => (
                                    <div className="w-[40%] min-w-[40%] flex flex-col items-center gap-2 text-sub">
                                        <img
                                            src={img.src}
                                            key={i}
                                            className="w-full aspect-video object-cover rounded-xl"
                                        />
                                        {img.title}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="w-full flex gap-5">
                            <div className="card w-full p-5 flex flex-col gap-2 bg-gray1000/50 rounded-2xl border-none">
                                <p className="flex gap-1 items-center text-xl font-semibold text-red-500">
                                    <TriangleAlert />
                                    문제
                                </p>
                                <p className="text-[#94a3b8] leading-6">
                                    {l.problem}
                                </p>
                            </div>
                            <div className="card w-full p-5 flex flex-col gap-2 bg-gray1000/50 rounded-2xl border-none">
                                <p className="flex gap-1 items-center text-xl font-semibold text-green-500">
                                    <Lightbulb />
                                    해결
                                </p>
                                <p className="text-[#94a3b8] leading-6">
                                    {l.solution}
                                </p>
                            </div>
                        </div>
                        <div className="card w-full p-5 flex flex-col gap-2 bg-gray1000/50 rounded-2xl border-none">
                            <p className="flex gap-2 items-center text-xl font-semibold text-main">
                                <Sparkles />
                                배운 점
                            </p>
                            <p className="text-[#94a3b8] leading-6">
                                {l.learn}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
