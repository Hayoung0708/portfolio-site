import { ArrowRight, Code2, FileText, Star } from "lucide-react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import TechStackCard from "../organisms/TechStackCard";
import FeatureCard from "../organisms/FeatureCard";

export default function ProjectInfo({
    project,
    infoRef,
}: {
    project: Project;
    infoRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <div className="template flex flex-col items-center gap-5 px-[20%] py-10">
            <h2>{project.title}</h2>
            <p className="text-main -mt-5">{project.intro}</p>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{ clickable: true }}
                className="w-full rounded-4xl"
            >
                {project.image.map((src, i) => (
                    <SwiperSlide>
                        <img
                            key={i}
                            src={src}
                            className="w-full aspect-video object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="card w-full p-10 flex justify-between rounded-4xl">
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <span className="text-[#94a3b8]">프로젝트 기간</span>
                        <p className="text-2xl">{project.period}</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#94a3b8]">팀원 구성</span>
                        <p className="text-2xl">
                            FE
                            {project.team
                                ? ` ${project.team.frontend} ${project.team.backend ? `| BE ${project.team.backend}` : ""}`
                                : " 1"}
                            <span className="ml-2">
                                {project.lead && `${project.lead} Lead`}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Link
                        to={project.link.deploy}
                        className="main-button gap-1 bg-main text-gray1000 hover:bg-main-hover"
                    >
                        Live Demo
                        <ArrowRight />
                    </Link>
                    <Link
                        to={project.link.github}
                        className="main-button group gap-2 bg-gray1000 text-white hover:bg-gray900"
                    >
                        <Code2 className="mt-px -ml-0.5 text-white" />
                        Github
                    </Link>
                </div>
            </div>

            <div ref={infoRef} className="w-full flex gap-10 mt-5">
                <div className="w-[70%] flex flex-col gap-5">
                    <div className="flex gap-2 text-4xl font-semibold items-center">
                        <FileText size={40} className="text-main" />
                        프로젝트 소개
                    </div>
                    <p className="text-base">
                        {project.description}
                        {project.link.preview && (
                            <span className="text-base text-white">
                                {"\n"}◦ 시연영상 링크 :{" "}
                                <Link
                                    to={project.link.preview}
                                    className="underline text-main hover:text-main-hover"
                                >
                                    {project.link.preview}
                                </Link>
                            </span>
                        )}
                    </p>
                    {project.features && (
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex gap-2 text-4xl font-semibold items-center">
                                <Star size={40} className="text-main" />
                                핵심 기능
                            </div>
                            <Swiper
                                modules={[Autoplay, EffectCoverflow]}
                                effect="coverflow"
                                slidesPerView={1.7}
                                spaceBetween={20}
                                centeredSlides
                                loop={true}
                                speed={1000}
                                autoplay={{
                                    delay: 10000,
                                }}
                                coverflowEffect={{
                                    rotate: -25,
                                    depth: 500,
                                    slideShadows: false,
                                }}
                                className="w-full"
                            >
                                {project.features.map((f, i) => (
                                    <SwiperSlide key={i}>
                                        <FeatureCard feature={f} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
                <TechStackCard stacks={project.stacks} />
            </div>
        </div>
    );
}
