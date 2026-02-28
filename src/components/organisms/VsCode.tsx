import {
    Braces,
    Check,
    ChevronDown,
    ChevronRight,
    CircleAlert,
    CodeXml,
    Ellipsis,
    Folder,
    FolderOpen,
    GitPullRequest,
    TriangleAlert,
    X,
} from "lucide-react";
import { useState } from "react";

export default function VsCode() {
    const [isFolderOpen, setIsFolderOpen] = useState(true);

    return (
        <div className="absolute z-0 hidden lg:block lg:right-[9%] 2xl:right-[12%] animate__animated animate__rotateZoomIn">
            <div className="w-[32vw] h-[27vw] scale-120 2xl:scale-100 border border-gray600 bg-gray900 rounded-[1.5vw] rotate-3 shadow-[0_0_50px_var(--color-shadow)] hover:rotate-0 fly">
                <header className="relative flex justify-center items-center h-[3vw] border-b border-gray600">
                    <div className="absolute top-[1.1vw] left-[1vw] flex gap-[0.5vw]">
                        <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-main/25" />
                        <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-main/50" />
                        <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-main" />
                    </div>
                    <div className="flex items-center gap-1 text-sub">
                        <p className="text-[1vw]">portfolio-site</p>
                    </div>
                </header>

                <div className="h-[calc(100%-3vw)] flex">
                    <div className="w-[40%] border-r border-gray600">
                        <div className="w-full h-[2vw] flex justify-between items-center px-[0.8vw] text-sub text-[0.8vw]">
                            탐색기
                            <Ellipsis className="w-[0.8vw]" />
                        </div>
                        <div
                            className="w-full h-[2vw] flex gap-[0.5vw] items-center px-[0.8vw] hover:bg-gray800 text-white/50 text-[0.8vw]"
                            onClick={() => setIsFolderOpen(!isFolderOpen)}
                        >
                            <ChevronDown
                                className={`w-[1vw] ${!isFolderOpen && "-rotate-90"}`}
                            />
                            {isFolderOpen ? (
                                <FolderOpen className="w-[1vw] text-main/50" />
                            ) : (
                                <Folder className="w-[1vw] text-main/50" />
                            )}
                            portfolio-site
                        </div>
                        {isFolderOpen && (
                            <>
                                <div className="w-full h-[2vw] flex gap-[0.5vw] items-center px-[2.3vw] bg-gray600 text-[0.8vw]">
                                    <Braces className="w-[1vw] text-yellow-400" />
                                    intro.json
                                </div>
                                <div className="w-full h-[2vw] flex gap-[0.5vw] items-center px-[2.3vw] hover:bg-gray800 text-white/50 text-[0.8vw]">
                                    <CodeXml className="w-[1vw] text-blue-400" />
                                    AboutMe.tsx
                                </div>
                                <div className="w-full h-[2vw] flex gap-[0.5vw] items-center px-[2.3vw] hover:bg-gray800 text-white/50 text-[0.8vw]">
                                    <CodeXml className="w-[1vw] text-blue-400" />
                                    TechStack.tsx
                                </div>
                                <div className="w-full h-[2vw] flex gap-[0.5vw] items-center pl-[2.3vw] hover:bg-gray800 text-white/50 text-[0.8vw]">
                                    <CodeXml className="w-[1vw] text-blue-400" />
                                    CoreCompetence.tsx
                                </div>
                                <div className="w-full h-[2vw] flex gap-[0.5vw] items-center px-[2.3vw] hover:bg-gray800 text-white/50 text-[0.8vw]">
                                    <ChevronRight className="w-[1vw]" />
                                    <Folder className="w-[1vw] text-main/50" />
                                    projects
                                </div>
                            </>
                        )}
                    </div>

                    <div className="relative w-[60%] h-full bg-gray800 rounded-br-[1.5vw]">
                        <div className="w-full h-[2vw] flex">
                            <div className="w-[40%] flex gap-[0.2vw] text-[0.8vw] items-center justify-center">
                                <Braces className="w-[0.8vw] text-yellow-400" />
                                intro.json
                                <X className="w-[0.8vw]" />
                            </div>
                            <div className="w-[60%] bg-gray900" />
                        </div>
                        <div className="flex pt-[0.5vw]">
                            <div className="w-[20%] flex justify-center text-end text-sub text-[0.8vw] leading-[1.25vw] whitespace-pre-wrap">
                                {`1
2
3
4
5
6
7
8
9
10
11
12
13
14
15`}
                            </div>
                            <div className="w-[80%] flex flex-col">
                                <p className="text-[0.8vw]">&#123;</p>
                                <p className="text-[0.8vw] pl-[1vw]">
                                    <span className="text-main">"name"</span>
                                    &nbsp;:&nbsp;
                                    <span className="text-gray100">
                                        "Hayoung Kang"
                                    </span>
                                    ,
                                </p>
                                <p className="text-[0.8vw] pl-[1vw]">
                                    <span className="text-main">"role"</span>
                                    &nbsp;:&nbsp;
                                    <span className="text-gray100">
                                        "FRONTEND"
                                    </span>
                                    ,
                                </p>
                                <p className="text-[0.8vw] pl-[1vw]">
                                    <span className="text-main">"skill"</span>
                                    &nbsp;:&nbsp;&#123;
                                </p>
                                <p className="text-[0.8vw] pl-[2vw]">
                                    <span className="text-main">
                                        "frontend"
                                    </span>
                                    &nbsp;:&nbsp;&#123;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "TypeScript"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "React"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "Next.js"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "Zustand"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[2vw]">&#125;,</p>
                                <p className="text-[0.8vw] pl-[2vw]">
                                    <span className="text-main">
                                        "data-fetch"
                                    </span>
                                    &nbsp;:&nbsp;&#123;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "fetch API"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "axios"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">
                                    <span className="text-gray100">
                                        "Tanstack"
                                    </span>
                                    ,&nbsp;
                                </p>
                                <p className="text-[0.8vw] pl-[3vw]">...</p>
                            </div>
                        </div>
                        <footer className="w-full h-[1.7vw] pl-[0.5vw] pr-[1vw] rounded-br-[1.5vw] absolute bottom-0 flex justify-between items-center bg-main">
                            <div className="flex gap-[0.3vw] text-[0.8vw]">
                                <GitPullRequest className="w-[1vw]" />
                                main
                                <CircleAlert className="w-[1vw]" />
                                0
                                <TriangleAlert className="w-[1vw]" />0
                            </div>
                            <div className="flex gap-[0.3vw] text-[0.8vw]">
                                <Check className="w-[1vw]" />
                                Prettier
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
