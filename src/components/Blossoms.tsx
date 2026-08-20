import { BLOSSOMS } from "@/constants/blossoms";

/** 히어로 배경에 떠 있는 벚꽃. 내용 뒤에 깔리고 클릭을 막지 않는다 */
export default function Blossoms() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {BLOSSOMS.map((item, index) => (
                // 바깥 span은 스크롤용(GSAP), 안쪽 span은 제자리에서 흔들리는 용도
                <span
                    key={index}
                    data-blossom={index}
                    className="absolute hidden md:block"
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        width: item.size,
                        height: item.size,
                    }}
                >
                    <span
                        className="blossom block h-full w-full text-pink-soft/55"
                        style={{
                            animationDuration: `${item.spin}s`,
                            animationDelay: `-${index * 3}s`,
                        }}
                    >
                        <Blossom tilt={item.tilt} />
                    </span>
                </span>
            ))}
        </div>
    );
}

/** 꽃잎 다섯 장짜리 벚꽃 한 송이 */
function Blossom({ tilt }: { tilt: number }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            className="h-full w-full"
            style={{ transform: `rotate(${tilt}deg)` }}
        >
            {[0, 72, 144, 216, 288].map((angle) => (
                <path
                    key={angle}
                    d="M50 50 C 34 36, 32 16, 50 6 C 68 16, 66 36, 50 50 Z"
                    transform={`rotate(${angle} 50 50)`}
                />
            ))}
            <circle cx="50" cy="50" r="7" className="text-pink-soft" />
        </svg>
    );
}
