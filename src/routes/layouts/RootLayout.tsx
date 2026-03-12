import Cursor from "@/components/atoms/Cursor";
import CursorBackground from "@/components/atoms/CursorBackground";
import { Outlet, ScrollRestoration } from "react-router";
import { useEffect } from "react";
import AOS from "aos";

export default function RootLayout() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <Cursor />
            <CursorBackground />
            <Outlet />
            <ScrollRestoration />
        </>
    );
}
