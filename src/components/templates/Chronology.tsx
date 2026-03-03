import SubTitle from "../atoms/SubTitle";
import ChronologyCard from "../organisms/ChronologyCard";
import { CHRONOLOGY_NODES } from "@/constants/chronology";

export default function Chronology() {
    return (
        <div className="template relative flex flex-col justify-center items-center pt-0 mb-20">
            <SubTitle>EDUCATION & EXPERIENCE</SubTitle>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-620 bg-main" />
            <div className="mt-40 flex flex-col gap-50">
                {CHRONOLOGY_NODES.map((n, i) => (
                    <ChronologyCard
                        key={i}
                        id={i}
                        node={n}
                        position={i % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </div>
    );
}
