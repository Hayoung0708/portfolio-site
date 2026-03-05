import {
    Calculator,
    MonitorSmartphone,
    Moon,
    Search,
    Siren,
    TriangleAlert,
} from "lucide-react";

export default function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <div className="card w-120 flex flex-col gap-5 bg-gray700 rounded-4xl p-10">
            <div className="flex items-center gap-3">
                <div className="min-w-12 h-12 flex justify-center items-center bg-main-hover rounded-2xl text-gray1000">
                    {feature.icon === "search" && <Search size={32} />}
                    {feature.icon === "calculator" && <Calculator size={32} />}
                    {feature.icon === "triangle-alert" && (
                        <TriangleAlert size={32} />
                    )}
                    {feature.icon === "siren" && <Siren size={32} />}
                    {feature.icon === "monitor-smartphone" && (
                        <MonitorSmartphone size={32} />
                    )}

                    {feature.icon === "moon" && <Moon size={32} />}
                </div>
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
