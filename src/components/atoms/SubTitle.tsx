export default function SubTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 mb-10" data-aos="fade">
            <div className="w-5 h-px bg-main" />
            <h3>{children}</h3>
            <div className="w-5 h-px bg-main" />
        </div>
    );
}
