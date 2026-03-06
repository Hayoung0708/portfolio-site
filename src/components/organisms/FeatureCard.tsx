import IconBox from "../atoms/IconBox";

export default function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <div className="card w-120 flex flex-col gap-5 bg-gray700 rounded-4xl p-10">
            <div className="flex items-center gap-3">
                <IconBox icon={feature.icon!} />
                <div className="text-2xl">
                    {feature.title}
                    <p className="text-sm text-[#94a3b8]">{feature.body}</p>
                </div>
            </div>
            <img
                src={feature.img}
                className="w-full aspect-video object-cover rounded-2xl"
            />
        </div>
    );
}
