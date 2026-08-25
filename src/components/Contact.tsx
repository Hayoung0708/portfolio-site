import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

import { PROFILE } from "@/constants/profile";
import { track } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

const FIELD =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink transition-colors placeholder:text-muted focus:border-pink focus:outline-none";

const PURPOSES = ["채용 제안", "협업 제안", "프로젝트 문의", "커피챗", "기타"];

type Status = "idle" | "sending" | "done" | "error";

export default function Contact() {
    const [form, setForm] = useState({
        email: "",
        purpose: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const context = gsap.context(() => {
            /* 제목이 아래에서 한 덩어리로 올라온다 */
            gsap.fromTo(
                "[data-heading]",
                { y: 72, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.85,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "[data-heading]",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            /* 폼 필드가 착착 쌓인다 */
            gsap.fromTo(
                "[data-field]",
                { y: 34, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.55,
                    ease: "power3.out",
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: "form",
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        }, sectionRef);

        return () => context.revert();
    }, []);

    const update =
        (key: keyof typeof form) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [key]: event.target.value }));
        };

    /* 서버리스 함수를 거쳐 내 카카오톡으로 전달된다 */
    const submit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!form.purpose || status === "sending") return;

        setStatus("sending");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!response.ok) throw new Error(String(response.status));
            track("contact_submit", { purpose: form.purpose });
            setStatus("done");
        } catch {
            setStatus("error");
        }
    };

    const label = "mb-2 block text-base font-bold";
    const required = (
        <span className="ml-1 text-pink" aria-hidden="true">
            *
        </span>
    );

    return (
        <footer
            ref={sectionRef}
            id="contact"
            className="scroll-mt-16 py-24 md:h-[170svh] md:py-0"
        >
            {/* 마지막 화면도 잠시 붙잡아 둔다 */}
            <div className="md:sticky md:top-0 md:flex md:min-h-svh md:flex-col md:justify-center md:pt-16 md:pb-4">
                <div className="shell text-center">
                    <div data-heading>
                        <p className="eyebrow">Contact</p>
                        <h2 className="headline mx-auto mt-4 max-w-2xl">
                            <span className="text-pink">저와 함께</span>{" "}
                            작업하고 싶으신가요?
                        </h2>
                    </div>

                    <form
                        onSubmit={submit}
                        className="mx-auto mt-6 max-w-xl space-y-4 text-left"
                    >
                        <fieldset data-field>
                            <legend className={label}>Purpose{required}</legend>
                            <div className="flex flex-wrap gap-2.5">
                                {PURPOSES.map((purpose) => (
                                    <button
                                        key={purpose}
                                        type="button"
                                        onClick={() =>
                                            setForm((prev) => ({
                                                ...prev,
                                                purpose,
                                            }))
                                        }
                                        aria-pressed={form.purpose === purpose}
                                        className={`rounded-full border px-4.5 py-2 text-sm font-semibold transition-colors ${
                                            form.purpose === purpose
                                                ? "border-pink bg-pink text-white"
                                                : "border-line text-ink-soft hover:border-pink hover:text-pink"
                                        }`}
                                    >
                                        {purpose}
                                    </button>
                                ))}
                            </div>
                        </fieldset>

                        <div data-field>
                            <label htmlFor="contact-email" className={label}>
                                Email{required}
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                required
                                value={form.email}
                                onChange={update("email")}
                                placeholder="답장을 받을 이메일을 입력해주세요."
                                className={FIELD}
                            />
                        </div>

                        <div data-field>
                            <label htmlFor="contact-message" className={label}>
                                Message{required}
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={4}
                                maxLength={1000}
                                value={form.message}
                                onChange={update("message")}
                                placeholder="함께 나누고 싶은 이야기를 자유롭게 적어주세요."
                                className={`${FIELD} resize-none`}
                            />
                        </div>

                        <div data-field>
                            <button
                                type="submit"
                                disabled={
                                    status === "sending" || status === "done"
                                }
                                className="inline-flex w-full items-center justify-center rounded-xl bg-pink px-6 py-4 text-base font-bold text-white transition-colors hover:bg-pink/75 disabled:cursor-default disabled:opacity-70"
                            >
                                {status === "sending"
                                    ? "보내는 중..."
                                    : status === "done"
                                      ? "잘 전달됐어요. 감사합니다!"
                                      : "메세지 보내기"}
                            </button>
                            {status === "error" && (
                                <p className="mt-3 text-sm text-pink-strong">
                                    전송에 실패했어요. 잠시 후 다시 시도하거나{" "}
                                    <a
                                        href={`mailto:${PROFILE.email}`}
                                        className="font-semibold underline"
                                    >
                                        이메일
                                    </a>
                                    로 보내주세요.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
}
