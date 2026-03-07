import { useEffect, useState } from "react";

export default function ProjectNav({
    project,
    infoRef,
    contributionRefs,
    learnRefs,
}: {
    project: Project;
    infoRef: React.RefObject<HTMLDivElement | null>;
    contributionRefs: React.RefObject<(HTMLDivElement | null)[]>;
    learnRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const scrollTo = (ref: HTMLDivElement | null, index: number) => {
        if (!ref) return;

        const top = ref.getBoundingClientRect().top + window.scrollY - 40;

        setActiveIndex(index);
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const elements = [
                infoRef.current,
                ...contributionRefs.current,
                ...learnRefs.current,
            ];
            let lastIndex = -1;

            for (let i = elements.length - 1; i >= 0; i--) {
                if (
                    elements[i]!.getBoundingClientRect().top <=
                    window.innerHeight / 2
                ) {
                    lastIndex = i;
                    break;
                }
            }

            setActiveIndex(lastIndex + 1);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [infoRef, contributionRefs, learnRefs]);

    return (
        <div className="fixed top-0 right-0 h-screen w-[20%] flex justify-center items-center">
            <div className="card w-[70%] h-fit p-5 flex flex-col gap-2 items-start rounded-3xl">
                <button
                    className="text-2xl font-semibold hover:scale-105"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    {project.title}
                </button>
                <hr className="w-full border-gray100/10" />
                <button
                    className={`hover:scale-105 ${
                        activeIndex === 1
                            ? "text-white"
                            : "text-white/50 hover:text-white/75"
                    }`}
                    onClick={() => scrollTo(infoRef.current, 1)}
                >
                    프로젝트 소개
                </button>
                <button
                    className={`hover:scale-105 ${
                        activeIndex === 2
                            ? "text-white"
                            : "text-white/50 hover:text-white/75"
                    }`}
                    onClick={() => scrollTo(contributionRefs.current[0], 2)}
                >
                    프로젝트 기여
                </button>
                {project.contributions.map((c, i) => (
                    <button
                        key={i}
                        className={`ml-5 hover:scale-105 ${
                            activeIndex === i + 3
                                ? "text-white"
                                : "text-white/50 hover:text-white/75"
                        }`}
                        onClick={() =>
                            scrollTo(contributionRefs.current[i + 1], i + 3)
                        }
                    >
                        {c.title}
                    </button>
                ))}
                <button
                    className={`hover:scale-105 ${
                        activeIndex === contributionRefs.current.length + 2
                            ? "text-white"
                            : "text-white/50 hover:text-white/75"
                    }`}
                    onClick={() =>
                        scrollTo(
                            learnRefs.current[0],
                            contributionRefs.current.length + 2,
                        )
                    }
                >
                    어려웠던 점 & 배운 점
                </button>
                {project.learn.map((c, i) => (
                    <button
                        key={i}
                        className={`ml-5 hover:scale-105 ${
                            activeIndex ===
                            contributionRefs.current.length + i + 3
                                ? "text-white"
                                : "text-white/50 hover:text-white/75"
                        }`}
                        onClick={() =>
                            scrollTo(
                                learnRefs.current[i + 1],
                                contributionRefs.current.length + i + 3,
                            )
                        }
                    >
                        {c.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
