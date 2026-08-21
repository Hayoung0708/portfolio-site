import { Quote } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import { PEER_REVIEWS } from "@/constants/peerReview";
import { horizontalLoop } from "@/lib/horizontalLoop";

export default function PeerReviews() {
    const trackRef = useRef<HTMLDivElement>(null);

    /* 자동으로 흐르고, 잡아 끌면 원하는 방향으로 움직인다 */
    useLayoutEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const loop = horizontalLoop(
            Array.from(track.children) as Array<HTMLElement>,
            { repeat: -1, speed: 0.55, draggable: true, paddingRight: 16 },
        );

        return () => loop.kill();
    }, []);

    return (
        <section
            id="review"
            className="scroll-mt-16 py-24 md:h-[230svh] md:py-0"
        >
            {/* 배경이 물드는 동안 화면이 잠시 붙잡힌다 */}
            <div className="md:sticky md:top-0 md:flex md:min-h-svh md:flex-col md:justify-center md:pt-16 md:pb-32">
                <div className="shell">
                    <Fade className="eyebrow">Peer Review</Fade>
                    <TitleReveal className="mt-4">
                        동료들은 이렇게 말해요
                    </TitleReveal>
                    <Fade delay={0.15} className="mt-4">
                        <p className="body-text">
                            팀 프로젝트 종료 후 팀원들에게 받은 익명
                            피드백입니다.
                        </p>
                    </Fade>
                </div>

                <div className="marquee mt-12">
                    <div
                        ref={trackRef}
                        className="flex w-max cursor-grab select-none active:cursor-grabbing"
                    >
                        {PEER_REVIEWS.map((review, index) => (
                            <figure
                                key={`${review.project}-${index}`}
                                className="card mr-4 flex w-[19rem] shrink-0 flex-col p-6 md:w-[23rem]"
                            >
                                <Quote size={20} className="text-pink-soft" />
                                <blockquote className="mt-4 flex-1 text-sm leading-relaxed break-keep whitespace-pre-line text-ink-soft md:text-base">
                                    {review.body}
                                </blockquote>
                                <figcaption className="mt-5 text-xs font-semibold text-pink">
                                    {review.project}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
