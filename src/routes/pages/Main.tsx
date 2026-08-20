import AskHayoung from "@/components/AskHayoung";
import Backdrop from "@/components/Backdrop";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PeerReviews from "@/components/PeerReviews";
import Principles from "@/components/Principles";
import TechStack from "@/components/TechStack";
import Works from "@/components/Works";

export default function Main() {
    return (
        <>
            <Backdrop />
            <Hero />
            <Principles />
            <TechStack />
            <Works />
            <Career />
            <AskHayoung />
            <PeerReviews />
            <Contact />
        </>
    );
}
