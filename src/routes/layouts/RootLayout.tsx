import Cursor from "@/components/atoms/Cursor";
import CursorBackground from "@/components/atoms/CursorBackground";
import { Outlet, ScrollRestoration } from "react-router";

export default function RootLayout() {
    return (
        <>
            <Cursor />
            <CursorBackground />
            <Outlet />
            <ScrollRestoration />
        </>
    );
}
