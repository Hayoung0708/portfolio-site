type Props = {
    value: number; // 0 ~ 100
    size?: number;
    strokeWidth?: number;
    color?: string;
};

export default function DonutGraph({
    value,
    size = 120,
    strokeWidth = 12,
}: Props) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const progress = Math.min(Math.max(value, 0), 100);
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div
            className="relative shrink-0"
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size}>
                <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="var(--color-gray1000)"
                        strokeWidth={12}
                        fill="transparent"
                    />

                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="var(--color-main)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{ transition: "stroke-dashoffset 0.6s ease" }}
                    />
                </g>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl">
                {value}%
            </div>
        </div>
    );
}
