import { Handshake } from "lucide-react";
import DonutGraph from "../atoms/DounutGraph";
import IconBox from "../atoms/IconBox";

export default function ProjectContribution({
    summary,
    contributions,
    contributionRefs,
}: {
    summary: ContributionSummary[];
    contributions: Contribution[];
    contributionRefs: React.RefObject<HTMLDivElement[]>;
}) {
    return (
        <div className="template flex flex-col gap-5 py-10 px-[20%]">
            <div
                ref={(el) => {
                    // eslint-disable-next-line
                    if (el) contributionRefs.current[0] = el;
                }}
                className="flex gap-2 text-4xl font-semibold items-center"
            >
                <Handshake size={40} className="text-main" />
                프로젝트 기여
            </div>

            <div className="flex gap-5">
                {summary.map((s, i) => (
                    <div
                        key={i}
                        className="card w-full flex items-center gap-5 border border-main/10 bg-main/10 rounded-3xl p-10"
                    >
                        <DonutGraph value={s.percent} />
                        <div>
                            <p className="text-2xl font-semibold">{s.title}</p>
                            <p className="text-[#94a3b8]">{s.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ul className="flex flex-col gap-5">
                {contributions.map((c, i) => (
                    <li
                        key={i}
                        className="card relative flex flex-col items-center gap-5 p-5 rounded-3xl"
                    >
                        <div
                            ref={(el) => {
                                if (el) contributionRefs.current[i + 1] = el;
                            }}
                            className="absolute"
                        />
                        <div className="flex flex-col items-center gap-1 mt-5">
                            <IconBox icon={c.icon} />
                            <h4>{c.title}</h4>
                        </div>
                        {c.img && (
                            <div className="flex gap-5 justify-center items-center">
                                {c.img.map((img, i) => (
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
                        <ul className="w-full flex flex-col gap-2">
                            {c.list.map((l, i) => (
                                <li
                                    key={i}
                                    className="card p-5 flex gap-5 justify-between bg-gray1000/50 rounded-2xl border-none"
                                >
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xl font-semibold text-main">
                                            {l.title}
                                        </p>
                                        <p className="text-[#94a3b8] leading-6">
                                            {l.body}
                                        </p>
                                    </div>
                                    {l.img && (
                                        <img
                                            src={l.img}
                                            className="w-[30%] min-w-[30%] aspect-video object-cover rounded-xl"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
