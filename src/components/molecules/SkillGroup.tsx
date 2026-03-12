import Skill from "../atoms/Skill";

export default function SkillGroup({
    title,
    skills,
    id,
}: {
    title: string;
    skills: Skill[];
    id: number;
}) {
    return (
        <div
            className="flex flex-col items-center gap-3"
            data-aos="fade-up"
            data-aos-anchor="#tech-stack"
            data-aos-delay={id * 200}
        >
            <p className="text-sub">{title}</p>
            {skills.map((s, i) => (
                <Skill key={i} skill={s} parentsId={id} id={i} />
            ))}
        </div>
    );
}
