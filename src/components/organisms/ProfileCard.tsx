import Profile from "../atoms/Profile";
import ProfileInfoList from "../molecules/ProfileInfoList";

export default function ProfileCard() {
    return (
        <div
            className="lg:w-[40%] flex flex-col gap-5 items-center border border-main/10 rounded-3xl bg-main/10 p-10"
            data-aos="flip-left"
            data-aos-anchor="#about-me"
            data-aos-delay="200"
        >
            <Profile />
            <ProfileInfoList title="INFORMATION" />
            <ProfileInfoList title="CERTIFICATE" />
        </div>
    );
}
