import Profile from "../atoms/Profile";
import ProfileInfoList from "../molecules/ProfileInfoList";

export default function ProfileCard() {
    return (
        <div className="lg:w-[40%] flex flex-col gap-5 items-center border border-main/10 rounded-3xl bg-gray100/5 p-10">
            <Profile />
            <ProfileInfoList title="INFORMATION" />
            <ProfileInfoList title="CERTIFICATE" />
        </div>
    );
}
