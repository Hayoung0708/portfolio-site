import profileImg from "@/assets/images/profile.png";

export default function Profile() {
    return (
        <div className="flex flex-col items-center gap-5 text-2xl font-bold">
            <img
                src={profileImg}
                className="w-32 h-32 rounded-full border border-main/20"
            />
            강하영
            <p className="font-normal text-main -mt-5 text-base">
                Hayoung Kang
            </p>
        </div>
    );
}
