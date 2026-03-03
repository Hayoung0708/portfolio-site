import SubTitle from "../atoms/SubTitle";
import SkillGroup from "../molecules/SkillGroup";
import { TECH_STACKS } from "@/constants/techStack";

export default function TechStack() {
    return (
        <div className="template flex flex-col items-center">
            <SubTitle>TECK STACK</SubTitle>
            <div className="w-full flex gap-x-5 gap-y-10 flex-wrap justify-center">
                {TECH_STACKS.map((s, i) => (
                    <SkillGroup key={i} title={s.title} skills={s.skills} />
                ))}
            </div>
        </div>
    );
}
