// 브라우저가 새로고침 때 이전 스크롤 위치를 복원하지 않게 가장 먼저 끈다
history.scrollRestoration = "manual";
// 크롬은 manual이어도 떠날 때 저장한 위치로 늦게 복원하는 경우가 있어,
// 떠나는 순간 위치 자체를 맨 위로 저장해 둔다
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes";
import "@/css/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router />
    </StrictMode>,
);
