import AboutMe from "@/components/templates/AboutMe";
import Chronology from "@/components/templates/Chronology";
import Home from "@/components/templates/Home";
import PeerReview from "@/components/templates/PeerReview";
import Projects from "@/components/templates/Projects";
import TechStack from "@/components/templates/TechStack";
import { useRef } from "react";

export default function Main() {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const TechStackRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Home
                aboutMeRef={aboutMeRef}
                TechStackRef={TechStackRef}
                projectsRef={projectsRef}
            />
            <AboutMe aboutMeRef={aboutMeRef} />
            <Chronology />
            <TechStack TechStackRef={TechStackRef} />
            <Projects projectsRef={projectsRef} />
            <PeerReview />
        </>
    );
}
