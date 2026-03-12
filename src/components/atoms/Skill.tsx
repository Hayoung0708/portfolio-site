export default function Skill({
    skill,
    parentsId,
    id,
}: {
    skill: Skill;
    parentsId: number;
    id: number;
}) {
    return (
        <div
            className="w-full flex flex-col gap-2 items-center px-10 py-5 rounded-3xl bg-gray600/50 border border-gray100/10"
            data-aos="flip-left"
            data-aos-anchor="#tech-stack"
            data-aos-delay={parentsId * 200 + id * 200}
        >
            <img src={skill.icon} className="w-10 h-10" />
            {skill.name}
        </div>
    );
}
