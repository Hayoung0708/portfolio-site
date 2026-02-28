import AboutMeList from "../molecules/AboutMeList";
import ProfileCard from "../organisms/ProfileCard";

export default function AboutMe() {
    return (
        <div className="template snap-start min-h-screen flex flex-col justify-center py-[20%] sm:py-[5%]">
            <h2 className="mb-5">About Me</h2>
            <div className="flex flex-col md:flex-row gap-10">
                <ProfileCard />
                <AboutMeList />
            </div>
        </div>
    );
}
