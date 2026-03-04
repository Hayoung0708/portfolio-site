import { twMerge } from "tailwind-merge";

export default function Badge({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={twMerge(
                "px-2 py-1 bg-github-hover rounded-lg text-[#94a3b8]",
                className,
            )}
        >
            {children}
        </div>
    );
}
