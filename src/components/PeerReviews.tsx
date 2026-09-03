import { Quote } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";
import { PEER_REVIEWS } from "@/constants/peerReview";
import type { horizontalLoop } from "@/lib/horizontalLoop";

/* 두 줄로 나눠 서로 반대 방향으로 돌린다 */
const ROWS = [
    PEER_REVIEWS.filter((_, index) => index % 2 === 0),
    PEER_REVIEWS.filter((_, index) => index % 2 === 1),
];

export default function PeerReviews() {
    const firstTrackRef = useRef<HTMLDivElement>(null);
    const secondTrackRef = useRef<HTMLDivElement>(null);

    /* 자동으로 흐르고, 잡아 끌면 원하는 방향으로 움직인다 */
    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let loops: Array<ReturnType<typeof horizontalLoop>> = [];
        let alive = true;

        /*
         * 마퀴에만 쓰는 GSAP Draggable·InertiaPlugin은 첫 화면 번들에서 뺀다.
         * 아래쪽 섹션이라 이 조각이 조금 늦게 붙어도 눈에 띄지 않는다.
         */
        void import("@/lib/horizontalLoop").then(({ horizontalLoop }) => {
            if (!alive) return;

            loops = [firstTrackRef, secondTrackRef]
                .map((ref, index) => {
                    const track = ref.current;
                    if (!track) return null;
                    const loop = horizontalLoop(
                        Array.from(track.children) as Array<HTMLElement>,
                        {
                            repeat: -1,
                            speed: 0.5,
                            draggable: true,
                            paddingRight: 20,
                        },
                    );
                    // 아랫줄은 반대 방향으로 돈다. t=0에서 바로 reverse하면 멈추므로
                    // 재생 위치를 한참 앞으로 밀어 둔 뒤 되감는다
                    if (index === 1) {
                        loop.timeline.vars.onReverseComplete?.();
                        loop.timeline.reverse();
                    }
                    return loop;
                })
                .filter((loop) => loop !== null);
        });

        return () => {
            alive = false;
            loops.forEach((loop) => loop.kill());
        };
    }, []);

    const trackRefs = [firstTrackRef, secondTrackRef];

    return (
        <section id="review" className="scroll-mt-16 py-24 md:py-32">
            <div className="shell">
                <Fade className="eyebrow">Peer Review</Fade>
                <TitleReveal className="mt-4">
                    동료들은 이렇게 말해요
                </TitleReveal>
                <Fade delay={0.15} className="mt-4">
                    <p className="body-text">
                        팀 프로젝트 종료 후 팀원들에게 받은 익명 피드백입니다.
                    </p>
                </Fade>
            </div>

            <div className="mt-12 space-y-5">
                {ROWS.map((row, rowIndex) => (
                    <div key={rowIndex} className="marquee">
                        <div
                            ref={trackRefs[rowIndex]}
                            className="flex w-max cursor-grab select-none active:cursor-grabbing"
                        >
                            {row.map((review, index) => (
                                <figure
                                    key={`${review.project}-${index}`}
                                    className="card mr-5 flex w-[19rem] shrink-0 flex-col p-6 md:w-[23rem]"
                                >
                                    <Quote
                                        size={20}
                                        className="text-pink-soft"
                                    />
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
                ))}
            </div>
        </section>
    );
}
