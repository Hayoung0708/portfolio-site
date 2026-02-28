import Cursor from "@/components/atoms/Cursor";
import CursorBackground from "@/components/atoms/CursorBackground";
import { useEffect } from "react";
import { Outlet } from "react-router";

export default function RootLayout() {
    // useEffect(() => {
    //     const id = setTimeout(() => window.scrollTo({ top: 0 }), 0);
    //     return () => clearTimeout(id);
    // }, []);

    return (
        <>
            <Cursor />
            <CursorBackground />
            <Outlet />
        </>
    );
}
