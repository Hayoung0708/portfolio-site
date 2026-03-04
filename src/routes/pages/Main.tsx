import AboutMe from "@/components/templates/AboutMe";
import Chronology from "@/components/templates/Chronology";
import Home from "@/components/templates/Home";
import PeerReview from "@/components/templates/PeerReview";
import Projects from "@/components/templates/Projects";
import TechStack from "@/components/templates/TechStack";

export default function Main() {
    return (
        <>
            <Home />
            <AboutMe />
            <Chronology />
            <TechStack />
            <Projects />
            <PeerReview />
        </>
    );
}
