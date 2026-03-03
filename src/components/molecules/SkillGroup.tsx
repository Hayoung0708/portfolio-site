import Skill from "../atoms/Skill";

export default function SkillGroup({
    title,
    skills,
}: {
    title: string;
    skills: Skill[];
}) {
    return (
        <div className="flex flex-col items-center gap-3">
            <p className="text-sub">{title}</p>
            {skills.map((s, i) => (
                <Skill key={i} skill={s} />
            ))}
        </div>
    );
}
