export default function OpenToWorkBadge() {
    return (
        <div className="w-fit px-4 py-1 inline-flex items-center gap-2 bg-main/10 border border-stroke rounded-full text-main">
            <div className="relative w-3 h-3 bg-main rounded-full">
                <div className="w-3 h-3 bg-main rounded-full animate-ping" />
            </div>

            <p>현재 구직 중</p>
        </div>
    );
}
