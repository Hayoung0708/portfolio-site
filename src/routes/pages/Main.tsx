import AboutMe from "@/components/templates/AboutMe";
import Home from "@/components/templates/Home";

export default function Main() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            <Home />
            <AboutMe />
        </div>
    );
}
