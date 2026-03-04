export default function Skill({ skill }: { skill: Skill }) {
    return (
        <div className="w-full flex flex-col gap-2 items-center px-10 py-5 rounded-3xl bg-gray600/50 border border-gray100/10">
            <img src={skill.icon} className="w-10 h-10" />
            {skill.name}
        </div>
    );
}
