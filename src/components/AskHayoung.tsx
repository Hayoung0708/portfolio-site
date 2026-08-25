import { ArrowUp, Bot, Cpu, Loader2, Lock, TriangleAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Fade from "@/components/Fade";
import TitleReveal from "@/components/TitleReveal";

import { SUGGESTED_QUESTIONS } from "@/constants/qa";
import { track } from "@/lib/analytics";
import {
    ROUTE_LABEL,
    checkAvailability,
    createAsk,
    type AskHandle,
    type RouteKey,
} from "@/lib/ask";

type Ready =
    "checking" | "ready" | "downloadable" | "downloading" | "unavailable";

interface Message {
    id: number;
    role: "user" | "bot";
    text: string;
    route?: RouteKey;
    failed?: boolean;
}

// my-little-agent 파이프라인 순서 그대로: 분류(router) → 자료 주입(step) → 생성(agent)
const STAGE_TEXT = {
    classify: "질문이 어떤 주제인지 분류하는 중",
    lookup: "주제에 맞는 자료만 골라 담는 중",
    write: "자료를 바탕으로 답변을 쓰는 중",
} as const;

type Stage = keyof typeof STAGE_TEXT | null;

/** 기능 정비 중에는 채팅 UI 대신 안내만 보여준다 */
const MAINTENANCE = false;

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
    // 첫 실행은 모델을 메모리에 올리느라 오래 걸린다. 5초 넘으면 이유를 보여준다
    const [slow, setSlow] = useState(false);
    const [route, setRoute] = useState<RouteKey | null>(null);

    const handleRef = useRef<AskHandle | null>(null);
    const idRef = useRef(1);
    // 답변이 끝난 시점에 어떤 라우트였는지 알아야 해서, state와 별개로 ref에도 담는다.
    const routeRef = useRef<RouteKey | null>(null);
    const logRef = useRef<HTMLDivElement>(null);
    // 다운로드가 진행 중이면 타임아웃을 미룬다
    const lastActivityRef = useRef(0);
    // 연속 실패 횟수. 2회부터는 챗봇을 잠근다
    const failsRef = useRef(0);

    function scrollLog() {
        const log = logRef.current;
        if (log) log.scrollTop = log.scrollHeight;
    }

    useEffect(scrollLog, [messages, stage]);

    useEffect(() => {
        let alive = true;

        /*
         * 다운로드 가능 상태면 질문을 기다리지 않고 페이지 진입 때 바로 받는다.
         * 이미 기기에 있으면 Chrome이 그대로 재사용하므로 중복 다운로드는 없다.
         */
        const prefetchModel = () => {
            const languageModel = (
                window as unknown as {
                    LanguageModel?: {
                        create(options?: {
                            monitor?(monitor: {
                                addEventListener(
                                    type: "downloadprogress",
                                    listener: (event: {
                                        loaded: number;
                                    }) => void,
                                ): void;
                            }): void;
                        }): Promise<{ destroy(): void }>;
                    };
                }
            ).LanguageModel;
            if (!languageModel) return;

            languageModel
                .create({
                    monitor(monitor) {
                        monitor.addEventListener(
                            "downloadprogress",
                            (event) => {
                                if (!alive) return;
                                lastActivityRef.current = Date.now();
                                // 이미 받아진 모델은 loaded=1만 와서 표시할 게 없다
                                if (event.loaded >= 1) return;
                                setReady("downloading");
                                setProgress(event.loaded);
                            },
                        );
                    },
                })
                .then((session) => {
                    session.destroy();
                    if (alive) setReady("ready");
                })
                .catch(() => {
                    // 사용자 제스처 필요·공간 부족 등. 첫 질문 때 다시 시도된다
                    if (alive) setReady("downloadable");
                });
        };

        checkAvailability()
            .then((state) => {
                if (!alive) return;
                setReady(
                    state === "available"
                        ? "ready"
                        : state === "unavailable"
                          ? "unavailable"
                          : "downloadable",
                );
                // 미지원 브라우저·기기가 얼마나 오는지 본다
                if (state === "unavailable") {
                    track("ask_locked", { reason: "unsupported" });
                }
                if (state === "downloadable" || state === "downloading") {
                    prefetchModel();
                }
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

        // 미지원 환경에서는 챗봇이 잠긴다. 준비된 답변으로 흉내 내지 않는다
        if (ready === "unavailable") return;

        setInput("");
        setRoute(null);
        routeRef.current = null;
        push({ role: "user", text: trimmed });

        if (!handleRef.current) {
            handleRef.current = createAsk({
                // router가 주제를 고르면 step이 자료를 주입하고, 곧 생성이 시작된다
                onRoute: (key) => {
                    lastActivityRef.current = Date.now();
                    routeRef.current = key;
                    setRoute(key);
                    setStage("lookup");
                    window.setTimeout(
                        () =>
                            setStage((current) =>
                                current === "lookup" ? "write" : current,
                            ),
                        600,
                    );
                },
                // 질문 중에는 다운로드 표시를 하지 않는다. 워치독 연장용으로만 쓴다
                onDownloadProgress: () => {
                    lastActivityRef.current = Date.now();
                },
            });
        }

        setStage("classify");
        setSlow(false);
        const slowTimer = window.setTimeout(() => setSlow(true), 5_000);
        lastActivityRef.current = Date.now();
        // 25초간 아무 진행(라우팅·다운로드)이 없으면 실패로 처리한다
        let watchdogTimer: ReturnType<typeof setInterval> | undefined;
        const watchdog = new Promise<never>((_, reject) => {
            watchdogTimer = setInterval(() => {
                if (Date.now() - lastActivityRef.current > 25_000) {
                    reject(new Error("응답 시간 초과"));
                }
            }, 1_000);
        });
        try {
            const answer = await Promise.race([
                handleRef.current.ask(trimmed),
                watchdog,
            ]);
            failsRef.current = 0;
            setReady("ready");
            push({
                role: "bot",
                text: answer.trim(),
                route: routeRef.current ?? undefined,
            });
            // GA4 파라미터는 100자 제한이라 답변은 앞부분만 보낸다
            track("ask_answer", {
                question: trimmed.slice(0, 100),
                route: routeRef.current ?? "none",
                answer: answer.trim().slice(0, 100),
            });
        } catch (error) {
            /*
             * 한 번의 실패로 모델을 포기하지 않고 재시도를 안내한다.
             * 연속 2회 실패면 사용 불가 환경으로 보고 챗봇을 잠근다.
             */
            console.error("on-device model failed", error);
            failsRef.current += 1;
            track("ask_fail", {
                question: trimmed.slice(0, 100),
                fails: String(failsRef.current),
            });
            if (failsRef.current >= 2) {
                setReady("unavailable");
                track("ask_locked", { reason: "fails" });
            }
            push({
                role: "bot",
                failed: true,
                text: "답변 생성에 실패했어요. 잠시 후 다시 시도해 주세요.",
            });
        } finally {
            clearInterval(watchdogTimer);
            clearTimeout(slowTimer);
            setSlow(false);
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

                    {MAINTENANCE ? (
                        <div className="card mt-10 flex flex-col items-center gap-3 px-6 py-14 text-center">
                            <span className="grid h-11 w-11 place-items-center rounded-full bg-pink-wash text-pink">
                                <Bot size={22} />
                            </span>
                            <p className="font-semibold">
                                챗봇 기능을 정비하고 있어요
                            </p>
                            <p className="text-sm text-muted">
                                더 나은 답변으로 곧 다시 열게요.
                            </p>
                        </div>
                    ) : (
                        <div className="reveal mt-10 grid gap-4 lg:grid-cols-[1fr_18rem]">
                            {ready === "unavailable" ? (
                                /* 미지원 환경: 흉내 내지 않고 잠근다 */
                                <div className="card flex h-[30rem] flex-col items-center justify-center gap-3 px-6 text-center">
                                    <span className="grid h-11 w-11 place-items-center rounded-full bg-wash text-muted">
                                        <Lock size={20} />
                                    </span>
                                    <p className="font-semibold">
                                        이 환경에서는 챗봇을 사용할 수 없어요
                                    </p>
                                    <p className="text-sm break-keep text-muted">
                                        온디바이스 AI(Gemini Nano)를 쓸 수 없는
                                        기기·브라우저예요.
                                        <br />
                                        Chrome 138 이상, 여유 공간 22GB 환경에서
                                        다시 만나요.
                                    </p>
                                </div>
                            ) : (
                                <div className="card flex h-[30rem] flex-col overflow-hidden">
                                    <div
                                        ref={logRef}
                                        className="flex-1 space-y-4 overflow-y-auto p-5 md:p-6"
                                    >
                                        {messages.map((message) => (
                                            <Bubble
                                                key={message.id}
                                                message={message}
                                                onGrow={scrollLog}
                                            />
                                        ))}

                                        {stage && (
                                            <div className="flex items-center gap-2 text-sm text-muted">
                                                <Loader2
                                                    size={15}
                                                    className="animate-spin text-pink"
                                                />
                                                {STAGE_TEXT[stage]}
                                                {slow &&
                                                    stage === "classify" && (
                                                        <span className="text-xs text-muted/70">
                                                            — 첫 실행은 모델을
                                                            깨우느라 오래 걸릴
                                                            수 있어요
                                                        </span>
                                                    )}
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
                                            disabled={
                                                !input.trim() || Boolean(stage)
                                            }
                                            aria-label="질문 보내기"
                                            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pink text-white transition-colors hover:bg-pink-strong disabled:cursor-not-allowed disabled:bg-pink-soft"
                                        >
                                            <ArrowUp size={18} />
                                        </button>
                                    </form>
                                </div>
                            )}

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
                                                    disabled={
                                                        Boolean(stage) ||
                                                        ready === "unavailable"
                                                    }
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
                    )}
                </div>
            </div>
        </section>
    );
}

/** 글자를 한 자씩 늘려 타이핑처럼 보이게 한다. 자랄 때마다 로그를 아래로 민다 */
function useTyped(text: string, onGrow: () => void) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >= text.length) return;
        const timer = window.setTimeout(() => {
            setCount((current) => current + 2);
            onGrow();
        }, 18);
        return () => clearTimeout(timer);
    }, [count, text, onGrow]);
    return text.slice(0, count);
}

function Bubble({ message, onGrow }: { message: Message; onGrow: () => void }) {
    const text = useTyped(message.text, onGrow);

    if (message.role === "user") {
        return (
            <div className="fade-up flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md bg-pink px-4 py-2.5 text-sm whitespace-pre-line text-white">
                    {text}
                </p>
            </div>
        );
    }

    return (
        <div className="fade-up flex gap-2.5">
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
                    {text}
                </p>
            </div>
        </div>
    );
}

function StatusCard({ ready, progress }: { ready: Ready; progress: number }) {
    const label: Record<Ready, string> = {
        checking: "브라우저 확인 중",
        ready: "온디바이스 모델 사용 가능",
        downloadable: "모델 다운로드 대기",
        downloading: `모델 다운로드 중 ${Math.round(progress * 100)}%`,
        unavailable: "온디바이스 모델 사용 불가능",
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
                    ? "Chrome 버전(138 미만)이나 기기 용량 문제로 온디바이스 모델을 쓸 수 없는 환경이에요. 모델은 약 4GB지만 다운로드에는 여유 공간 22GB가 필요하고, 여유가 10GB 아래로 내려가면 자동 삭제돼요."
                    : ready === "downloadable"
                      ? "이 브라우저는 온디바이스 AI를 지원해요. Gemini Nano(약 4GB) 다운로드를 시작합니다 — 기기 여유 공간이 22GB 이상일 때만 받아져요.\n다운로드가 진행되지 않으면 챗봇이 잠겨요."
                      : ready === "downloading"
                        ? "Chrome이 Gemini Nano(약 4GB)를 다운로드하고 있어요. 다운로드에는 여유 공간 22GB가 필요해요.\n받은 뒤에도 여유가 10GB 아래로 내려가면 모델이 자동 삭제돼요."
                        : "질문과 답변이 기기 밖으로 나가지 않습니다.\n서버 요청 0회, 토큰 비용 0원."}
            </p>
        </div>
    );
}
