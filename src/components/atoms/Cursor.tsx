import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let [mouseX, mouseY] = [0, 0];
        let rafId: number;

        const move = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", move);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed z-2 w-5 h-5 bg-gray600/50 border border-gray100/50 rounded-full -translate-2 duration-0 pointer-events-none"
        />
    );
}
