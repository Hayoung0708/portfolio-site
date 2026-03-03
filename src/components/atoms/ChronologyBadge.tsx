export default function ChronologyBadge({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="px-2 py-1 bg-github-hover rounded-lg text-[#94a3b8]">
            {children}
        </div>
    );
}
