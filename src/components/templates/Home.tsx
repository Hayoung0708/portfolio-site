import { ArrowDown, ArrowRight, Github } from "lucide-react";
import OpenToWorkBadge from "../atoms/OpenToWorkBadge";
import { Link } from "react-router";
import VsCode from "../organisms/VsCode";
import Title from "../atoms/Title";

export default function Home() {
    return (
        <div className="relative w-screen h-screen flex pt-[20%] sm:items-center p-5 sm:p-10 md:p-15 lg:p-[5%] 2xl:p-[10%]">
            <div className="flex flex-col gap-5 pb-10">
                <OpenToWorkBadge />
                <Title />
                <div className="flex gap-3 sm:mt-3 lg:mt-5">
                    <button className="main-button gap-1 bg-main text-gray1000 hover:bg-main-hover animate__animated animate__bounceInUpCustom delay1">
                        프로젝트 보러가기
                        <ArrowRight />
                    </button>
                    <Link
                        to="https://github.com/Hayoung0708"
                        className="main-button group gap-2 bg-sub text-white hover:bg-sub-hover animate__animated animate__bounceInUpCustom delay2"
                    >
                        <div className="w-6 h-6 p-1 bg-white rounded-full">
                            <Github
                                size={20}
                                strokeWidth={1}
                                fill="currentColor"
                                className="mt-px -ml-0.5 text-sub group-hover:text-sub-hover"
                            />
                        </div>
                        Github
                    </Link>
                </div>
            </div>
            <VsCode />

            <ArrowDown
                strokeWidth={1}
                size={32}
                className="absolute bottom-10 left-1/2 -translate-x-2 animate-bounce"
            />
        </div>
    );
}
