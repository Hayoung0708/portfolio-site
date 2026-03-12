import SubTitle from "../atoms/SubTitle";
import SkillGroup from "../molecules/SkillGroup";
import { TECH_STACKS } from "@/constants/techStack";

export default function TechStack() {
    return (
        <div className="template flex flex-col items-center pt-0">
            <SubTitle>TECH STACK</SubTitle>
            <div
                className="w-full grid grid-cols-4 gap-x-5 gap-y-10 justify-center"
                id="tech-stack"
            >
                {TECH_STACKS.map((s, i) => (
                    <SkillGroup
                        key={i}
                        id={i}
                        title={s.title}
                        skills={s.skills}
                    />
                ))}
            </div>
        </div>
    );
}
