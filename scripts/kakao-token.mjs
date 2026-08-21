/**
 * 카카오 리프레시 토큰 발급 도우미. 한 번만 실행하면 된다.
 *
 * 준비 (developers.kakao.com):
 *  1. 앱 생성 후 [앱 키]에서 REST API 키 복사
 *  2. [카카오 로그인] 활성화 + Redirect URI에 http://localhost:5179/oauth 등록
 *  3. [동의항목]에서 "카카오톡 메시지 전송(talk_message)" 선택 동의로 설정
 *
 * 사용:
 *  node scripts/kakao-token.mjs <REST_API_KEY> [CLIENT_SECRET]
 *  → 브라우저가 열리면 로그인/동의 → 터미널에 토큰이 출력된다
 *  → KAKAO_REFRESH_TOKEN을 Vercel 환경변수에 등록
 */
import { createServer } from "node:http";
import { exec } from "node:child_process";

const key = process.argv[2];
const secret = process.argv[3];
if (!key) {
    console.error(
        "사용법: node scripts/kakao-token.mjs <REST_API_KEY> [CLIENT_SECRET]",
    );
    process.exit(1);
}

const REDIRECT = "http://localhost:5179/oauth";
const authorizeUrl =
    "https://kauth.kakao.com/oauth/authorize?response_type=code" +
    `&client_id=${key}&redirect_uri=${encodeURIComponent(REDIRECT)}` +
    "&scope=talk_message";

const server = createServer(async (req, res) => {
    const url = new URL(req.url, REDIRECT);
    const code = url.searchParams.get("code");
    if (!code) {
        res.end("code 없음");
        return;
    }

    const tokenResponse = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: key,
            redirect_uri: REDIRECT,
            code,
            ...(secret && { client_secret: secret }),
        }),
    });
    const token = await tokenResponse.json();

    console.log("\nKAKAO_REST_API_KEY =", key);
    console.log("KAKAO_REFRESH_TOKEN =", token.refresh_token);
    console.log(
        "\n위 두 값을 Vercel > Settings > Environment Variables에 등록하세요.",
    );
    console.log(
        "리프레시 토큰은 약 2개월간 유효하며, 만료되면 이 스크립트를 다시 실행하세요.",
    );

    res.end("완료! 터미널을 확인하세요. 이 창은 닫아도 됩니다.");
    server.close();
});

server.listen(5179, () => {
    console.log("브라우저에서 카카오 로그인 진행 중...");
    exec(`start "" "${authorizeUrl}"`);
});
