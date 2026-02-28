import { Cake, Globe, Home, LaptopMinimal } from "lucide-react";
import ProfileInfoListItem from "../atoms/ProfileInfoListItem";

export default function ProfileInfoList({ title }: { title: string }) {
    return title === "INFORMATION" ? (
        <div className="w-full flex flex-col gap-2 text-[#94a3b8]">
            {title}
            <ProfileInfoListItem>
                <Cake className="text-main" />
                2001.07.08 | 만 24세
            </ProfileInfoListItem>
            <ProfileInfoListItem>
                <Home className="text-main" />
                인천광역시 서구 왕길동
            </ProfileInfoListItem>
        </div>
    ) : title === "CERTIFICATE" ? (
        <div className="w-full flex flex-col gap-2 text-[#94a3b8]">
            {title}
            <ProfileInfoListItem>
                <LaptopMinimal className="text-main" />
                정보처리기사 필기
            </ProfileInfoListItem>
            <ProfileInfoListItem>
                <Globe className="text-main" />
                TOEIC Speaking IM1
            </ProfileInfoListItem>
        </div>
    ) : (
        <div></div>
    );
}
