export default function AboutMeListItem({
    id,
    children,
    body,
}: {
    id: string;
    children: React.ReactNode;
    body: string;
}) {
    return (
        <li className="group w-full border flex flex-col gap-0 hover:gap-5 p-5 border-gray100/10 bg-sub/5 rounded-3xl">
            <div className="flex items-center gap-5">
                <div className="p-2 bg-main/15 text-lg font-bold rounded-full text-gray100">
                    {id}
                </div>
                {children}
            </div>
            <div className="pl-14 h-0 opacity-0 group-hover:h-17 group-hover:opacity-100 font-extralight whitespace-pre-wrap">
                <p>{body}</p>
            </div>
        </li>
    );
}
