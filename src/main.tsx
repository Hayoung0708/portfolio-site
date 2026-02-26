import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes";
import "@/css/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router />
    </StrictMode>,
);
