/**
 * 문의 폼 내용을 내 카카오톡 "나와의 채팅"으로 보낸다.
 * 카카오 "나에게 보내기" API 사용. Vercel 환경변수 필요:
 *  - KAKAO_REST_API_KEY: 카카오 앱 REST API 키
 *  - KAKAO_REFRESH_TOKEN: 내 계정 리프레시 토큰 (scripts/kakao-token.mjs로 발급)
 */
const TOKEN_URL = "https://kauth.kakao.com/oauth/token";
const SEND_URL = "https://kapi.kakao.com/v2/api/talk/memo/default/send";
/** 카카오 텍스트 템플릿은 한 건에 200자까지라 나눠 보낸다 */
const CHUNK = 200;
const MAX_MESSAGE = 1000;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "method not allowed" });
    }

    const { name, email, role, purpose, message } = req.body ?? {};
    if (!name || !email || !purpose || !message) {
        return res.status(400).json({ error: "missing fields" });
    }
    if (String(message).length > MAX_MESSAGE) {
        return res.status(400).json({ error: "message too long" });
    }

    const tokenResponse = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            client_id: process.env.KAKAO_REST_API_KEY,
            refresh_token: process.env.KAKAO_REFRESH_TOKEN,
            ...(process.env.KAKAO_CLIENT_SECRET && {
                client_secret: process.env.KAKAO_CLIENT_SECRET,
            }),
        }),
    });
    const token = await tokenResponse.json();
    if (!token.access_token) {
        console.error("kakao token error", token);
        return res.status(502).json({ error: "kakao auth failed" });
    }

    const full = [
        `📬 포트폴리오 문의 (${purpose})`,
        "",
        `이름: ${name}`,
        `이메일: ${email}`,
        `역할: ${role || "-"}`,
        "",
        String(message),
    ].join("\n");

    const chunks = [];
    for (let i = 0; i < full.length; i += CHUNK) {
        chunks.push(full.slice(i, i + CHUNK));
    }

    for (const [i, text] of chunks.entries()) {
        const sendResponse = await fetch(SEND_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token.access_token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                template_object: JSON.stringify({
                    object_type: "text",
                    text:
                        chunks.length > 1
                            ? `(${i + 1}/${chunks.length})\n${text}`
                            : text,
                    link: {
                        web_url:
                            process.env.SITE_URL ??
                            "https://github.com/Hayoung0708",
                    },
                }),
            }),
        });
        const sent = await sendResponse.json();
        if (sent.result_code !== 0) {
            console.error("kakao send error", sent);
            return res.status(502).json({ error: "kakao send failed" });
        }
    }

    return res.status(200).json({ ok: true });
}
