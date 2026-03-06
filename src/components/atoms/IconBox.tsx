import { twMerge } from "tailwind-merge";
import {
    ActivityIcon,
    Calculator,
    Database,
    DraftingCompass,
    LayoutTemplate,
    MonitorSmartphone,
    Moon,
    Search,
    Siren,
    TriangleAlert,
    UserStar,
} from "lucide-react";

export default function IconBox({
    icon,
    Iconsize = 32,
    className,
}: {
    icon: string;
    Iconsize?: number;
    className?: string;
}) {
    return (
        <div
            className={twMerge(
                "min-w-12 w-12 h-12 flex justify-center items-center bg-main-hover rounded-2xl text-gray1000",
                className,
            )}
        >
            {icon === "search" && <Search size={Iconsize} />}
            {icon === "calculator" && <Calculator size={Iconsize} />}
            {icon === "triangle-alert" && <TriangleAlert size={Iconsize} />}
            {icon === "siren" && <Siren size={Iconsize} />}
            {icon === "monitor-smartphone" && (
                <MonitorSmartphone size={Iconsize} />
            )}
            {icon === "moon" && <Moon size={Iconsize} />}
            {icon === "drafting-compass" && <DraftingCompass size={Iconsize} />}
            {icon === "layout-template" && <LayoutTemplate size={Iconsize} />}
            {icon === "database" && <Database size={Iconsize} />}
            {icon === "user-star" && <UserStar size={Iconsize} />}
            {icon === "activity" && <ActivityIcon size={Iconsize} />}
        </div>
    );
}
