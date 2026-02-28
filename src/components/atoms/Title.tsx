import { useHangulMotion } from "react-hangul-motion";
import { useEffect } from "react";

export default function Title() {
    const speed = 60;

    const title1 = useHangulMotion("안녕하세요,", { speed });
    const title2 = useHangulMotion("사용자 경험을 생각하는", { speed });
    const title3 = useHangulMotion("프론트엔드 ", { speed });
    const title4 = useHangulMotion("강하영", { speed });
    const title5 = useHangulMotion("입니다.", { speed });

    useEffect(() => {
        title1.start();
        if (title1.isComplete) {
            setTimeout(() => {
                title2.start();
            }, speed - 20);
        }
        if (title2.isComplete) {
            setTimeout(() => {
                title3.start();
            }, speed - 20);
        }
        if (title3.isComplete) {
            title4.start();
        }
        if (title4.isComplete) {
            title5.start();
        }
    });
    return (
        <>
            <div className="relative">
                <h1 className="text-gray700">안녕하세요,</h1>
                <h1 className="text-gray700">사용자 경험을 생각하는</h1>
                <h1 className="text-gray700">프론트엔드 강하영입니다.</h1>
                <p className="mt-2 lg:w-[47vw] xl:w-[40vw] text-gray1000/0">
                    이 웹사이트는 모바일부터 PC까지 다양한 디바이스 환경에 맞춰
                    반응형으로 설계되었습니다.
                </p>
                <div className="absolute top-0">
                    <h1>{title1.displayText}</h1>
                    {title1.isComplete && <h1>{title2.displayText}</h1>}
                    <h1 className="-mr-5">
                        {title3.displayText}
                        <span>{title4.displayText}</span>
                        {title5.displayText}
                    </h1>
                    <p className="mt-2 lg:w-[47vw] xl:w-[40vw] text-sub animate__animated animate__fadeInUp animate__delay-4s">
                        이 웹사이트는 모바일부터 PC까지 다양한 디바이스 환경에
                        맞춰 반응형으로 설계되었습니다.
                    </p>
                </div>
            </div>
        </>
    );
}
