import { useEffect, useRef } from "react";

export default function CursorBackground() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initialX = window.innerWidth * 0.4;
        const initialY = window.innerHeight * 0.8;

        let [mouseX, mouseY] = [initialX, initialY];
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
            className="fixed -z-1 w-[200vw] h-[200vw] lg:w-[80vw] lg:h-[80vw] duration-2000 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(45%_45%_at_50%_50%,#251e20_0%,#251e20_30%,#1a1617_100%)]"
        />
    );
}
