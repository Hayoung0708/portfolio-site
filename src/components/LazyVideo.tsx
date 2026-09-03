import { useEffect, useRef, useState } from "react";

/**
 * 화면에 들어올 때 비로소 파일을 받는 영상.
 * 목록에 여러 개가 깔려 있어도 아직 보이지 않는 것은 내려받지 않고,
 * 지나가서 안 보이게 되면 재생을 멈춘다.
 */
export default function LazyVideo({
    src,
    ...props
}: React.VideoHTMLAttributes<HTMLVideoElement> & { src: string }) {
    const ref = useRef<HTMLVideoElement>(null);
    const [near, setNear] = useState(false);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    video.pause();
                    return;
                }
                setNear(true);
                // 첫 진입에는 src가 아직 안 붙어 있다. 그때는 autoPlay가 받는다
                if (video.currentSrc) void video.play().catch(() => {});
            },
            // 화면에 닿기 조금 전에 받아 두면 끊김 없이 이어진다
            { rootMargin: "200px" },
        );
        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            src={near ? src : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            {...props}
        />
    );
}
