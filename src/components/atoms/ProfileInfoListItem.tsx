export default function ProfileInfoListItem({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full p-3 flex gap-2 items-center bg-gray1000/60 rounded-2xl text-white/80">
            {children}
        </div>
    );
}
