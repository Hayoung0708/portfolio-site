import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    // 배포된 코드를 원본으로 되짚을 수 있게 소스맵을 같이 올린다.
    // 저장소가 공개라 새로 드러나는 것은 없다
    build: { sourcemap: true },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
