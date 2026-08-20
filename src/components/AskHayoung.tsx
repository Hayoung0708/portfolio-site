import { ArrowUp, Bot, Cpu, Loader2, TriangleAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";

import { SUGGESTED_QUESTIONS, fallbackAnswer } from "@/constants/qa";
import {
    ROUTE_LABEL,
    checkAvailability,
    createAsk,
    type AskHandle,
    type RouteKey,
} from "@/lib/ask";

type Ready = "checking" | "ready" | "downloading" | "unavailable";

interface Message {
    id: number;
    role: "user" | "bot";
    text: string;
    route?: RouteKey;
    failed?: boolean;
}

const STAGE_TEXT = {
    classify: "질문을 분류하는 중",
    lookup: "자료를 찾는 중",
    write: "답변을 쓰는 중",
} as const;

type Stage = keyof typeof STAGE_TEXT | null;

const GREETING: Message = {
    id: 0,
    role: "bot",
    text: `안녕하세요. 하영님의 포트폴리오를 안내하는 도우미입니다.
기술 스택, 프로젝트, 협업 방식 중 궁금한 걸 물어봐 주세요.`,
};

export default function AskHayoung() {
    const [ready, setReady] = useState<Ready>("checking");
    const [progress, setProgress] = useState(0);
    const [messages, setMessages] = useState<Array<Message>>([GREETING]);
    const [input, setInput] = useState("");
    const [stage, setStage] = useState<Stage>(null);
    const [route, setRoute] = useState<RouteKey | null>(null);

    const handleRef = useRef<AskHandle | null>(null);
    const idRef = useRef(1);
    // 답변이 끝난 시점에 어떤 라우트였는지 알아야 해서, state와 별개로 ref에도 담는다.
    const routeRef = useRef<RouteKey | null>(null);
    const logRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const log = logRef.current;
        if (log) log.scrollTop = log.scrollHeight;
    }, [messages, stage]);

    useEffect(() => {
        let alive = true;

        checkAvailability()
            .then((state) => {
                if (!alive) return;
                setReady(state === "unavailable" ? "unavailable" : "ready");
            })
            .catch(() => alive && setReady("unavailable"));

        return () => {
            alive = false;
            handleRef.current?.destroy();
            handleRef.current = null;
        };
    }, []);

    function push(message: Omit<Message, "id">) {
        setMessages((prev) => [...prev, { ...message, id: idRef.current++ }]);
    }

    async function submit(question: string) {
        const trimmed = question.trim();
        if (!trimmed || stage) return;

        setInput("");
        setRoute(null);
        routeRef.current = null;
        push({ role: "user", text: trimmed });

        // 미지원 환경: 모델 없이 키워드로 답한다.
        if (ready === "unavailable") {
            setStage("lookup");
            await new Promise((resolve) => setTimeout(resolve, 350));
            setStage(null);
            push({ role: "bot", text: fallbackAnswer(trimmed) });
            return;
        }

        if (!handleRef.current) {
            handleRef.current = createAsk({
                onRoute: (key) => {
                    routeRef.current = key;
                    setRoute(key);
                    setStage("write");
                },
                onDownloadProgress: (loaded) => {
                    setReady("downloading");
                    setProgress(loaded);
                },
            });
        }

        setStage("classify");
        try {
            // 온디바이스 모델이 응답을 못 주는 경우 무한 대기하지 않는다
            const answer = await Promise.race([
                handleRef.current.ask(trimmed),
                new Promise<never>((_, reject) =>
                    setTimeout(
                        () => reject(new Error("응답 시간 초과")),
                        60_000,
                    ),
                ),
            ]);
            setReady("ready");
            push({
                role: "bot",
                text: answer.trim(),
                route: routeRef.current ?? undefined,
            });
        } catch (error) {
            /*
             * 모델을 못 쓰는 기기(디스크 부족 등)에서는 시도만 하다 멈추지 말고
             * 준비된 답변으로 전환한다. 이후 질문은 곧바로 이 경로를 탄다.
             */
            console.error("on-device model failed", error);
            setReady("unavailable");
            push({ role: "bot", text: fallbackAnswer(trimmed) });
        } finally {
            setStage(null);
        }
    }

    return (
        <section id="ask" className="scroll-mt-16 py-24 md:h-[180svh] md:py-0">
            {/* 화면이 잠시 붙잡힌 채로 읽게 한다 */}
            <div className="md:sticky md:top-0 md:flex md:min-h-svh md:flex-col md:justify-center md:pt-24 md:pb-10">
                <div className="shell">
                    <Fade className="eyebrow">Ask AI</Fade>
                    <TitleReveal className="mt-4 max-w-3xl">
                        <span className="text-pink">챗봇</span>에게 물어보세요
                    </TitleReveal>
                    <Fade delay={0.15} className="mt-5 max-w-2xl">
                        <p className="body-text">
                            제가 만든 오픈소스{" "}
                            <a
                                href="https://github.com/Hayoung0708/my-little-agent"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-pink underline underline-offset-4"
                            >
                                my-little-agent
                            </a>
                            로 동작합니다.
                            <br />
                            질문을 분류하고, 필요한 자료만 찾아, 답변까지 전부
                            브라우저 안에서 처리합니다. 서버도 API 키도
                            없습니다.
                        </p>
                    </Fade>

                    <div className="reveal mt-10 grid gap-4 lg:grid-cols-[1fr_18rem]">
                        <div className="card flex h-[30rem] flex-col overflow-hidden">
                            <div
                                ref={logRef}
                                className="flex-1 space-y-4 overflow-y-auto p-5 md:p-6"
                            >
                                {messages.map((message) => (
                                    <Bubble
                                        key={message.id}
                                        message={message}
                                    />
                                ))}

                                {stage && (
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <Loader2
                                            size={15}
                                            className="animate-spin text-pink"
                                        />
                                        {STAGE_TEXT[stage]}
                                        {route && stage === "write" && (
                                            <span className="pill">
                                                {ROUTE_LABEL[route]}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            <form
                                className="flex items-center gap-2 border-t border-line p-3"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    void submit(input);
                                }}
                            >
                                <input
                                    value={input}
                                    onChange={(event) =>
                                        setInput(event.target.value)
                                    }
                                    placeholder="예) React 경험이 얼마나 되나요?"
                                    aria-label="질문 입력"
                                    className="min-w-0 flex-1 rounded-xl bg-wash px-4 py-3 text-sm outline-none placeholder:text-muted"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || Boolean(stage)}
                                    aria-label="질문 보내기"
                                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pink text-white transition-colors hover:bg-pink-strong disabled:cursor-not-allowed disabled:bg-pink-soft"
                                >
                                    <ArrowUp size={18} />
                                </button>
                            </form>
                        </div>

                        <aside className="flex flex-col gap-4">
                            <StatusCard ready={ready} progress={progress} />

                            <div className="card p-5">
                                <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                                    이런 걸 물어보세요
                                </p>
                                <ul className="mt-3 space-y-2">
                                    {SUGGESTED_QUESTIONS.map((question) => (
                                        <li key={question}>
                                            <button
                                                type="button"
                                                disabled={Boolean(stage)}
                                                onClick={() =>
                                                    void submit(question)
                                                }
                                                className="w-full rounded-xl border border-line px-3 py-2 text-left text-sm break-keep transition-colors hover:border-pink-soft hover:bg-pink-wash disabled:opacity-50"
                                            >
                                                {question}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Bubble({ message }: { message: Message }) {
    if (message.role === "user") {
        return (
            <div className="flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md bg-pink px-4 py-2.5 text-sm whitespace-pre-line text-white">
                    {message.text}
                </p>
            </div>
        );
    }

    return (
        <div className="flex gap-2.5">
            <span
                className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${
                    message.failed
                        ? "bg-wash text-muted"
                        : "bg-pink-wash text-pink"
                }`}
            >
                {message.failed ? (
                    <TriangleAlert size={14} />
                ) : (
                    <Bot size={15} />
                )}
            </span>

            <div className="max-w-[85%]">
                {message.route && (
                    <span className="mb-1.5 inline-block text-[11px] font-semibold text-pink">
                        {ROUTE_LABEL[message.route]}
                    </span>
                )}
                <p className="rounded-2xl rounded-tl-md border border-line bg-wash px-4 py-2.5 text-sm leading-relaxed break-keep whitespace-pre-line">
                    {message.text}
                </p>
            </div>
        </div>
    );
}

function StatusCard({ ready, progress }: { ready: Ready; progress: number }) {
    const label: Record<Ready, string> = {
        checking: "브라우저 확인 중",
        ready: "온디바이스 모델 사용 중",
        downloading: `모델 내려받는 중 ${Math.round(progress * 100)}%`,
        unavailable: "미리 준비한 답변으로 응답",
    };

    return (
        <div className="card p-5">
            <div className="flex items-center gap-2">
                <Cpu size={16} className="text-pink" />
                <span className="text-sm font-semibold">{label[ready]}</span>
            </div>

            {ready === "downloading" && (
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line">
                    <div
                        className="h-full bg-pink transition-[width]"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                    />
                </div>
            )}

            <p className="mt-3 text-xs leading-relaxed break-keep whitespace-pre-line text-muted">
                {ready === "unavailable"
                    ? "Chrome 138 이상 데스크톱에서 열면 실제 온디바이스 모델이 답변합니다. 지금은 준비된 답변을 보여드릴게요."
                    : "질문과 답변이 기기 밖으로 나가지 않습니다.\n서버 요청 0회, 토큰 비용 0원."}
            </p>
        </div>
    );
}
