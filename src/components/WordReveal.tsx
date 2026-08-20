/**
 * 제목을 단어 단위로 끊어 스크롤에 맞춰 차례로 올려 보낸다.
 * 단어마다 animation-range를 조금씩 밀어 시차를 만든다.
 */
export default function WordReveal({ children }: { children: string }) {
    const words = children.split(" ");

    return (
        <>
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="word-reveal"
                    style={{
                        animationRange: `entry ${8 + index * 6}% cover ${26 + index * 6}%`,
                    }}
                >
                    {word}
                    {index < words.length - 1 && " "}
                </span>
            ))}
        </>
    );
}
