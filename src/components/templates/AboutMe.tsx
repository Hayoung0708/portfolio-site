import AboutMeList from "../molecules/AboutMeList";
import ProfileCard from "../organisms/ProfileCard";

export default function AboutMe({
    aboutMeRef,
}: {
    aboutMeRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <div
            className="template min-h-screen flex flex-col justify-center py-[20%] sm:py-[5%]"
            ref={aboutMeRef}
        >
            <h2 className="mb-5" data-aos="fade-right" id="about-me">
                About Me
            </h2>
            <div className="flex flex-col md:flex-row gap-10">
                <ProfileCard />
                <AboutMeList />
            </div>
        </div>
    );
}
