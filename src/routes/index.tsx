import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, element: <Main /> },
            {
                // 첫 화면에는 없는 페이지라 들어갈 때 받는다
                path: "/project/:projectId",
                lazy: async () => ({
                    Component: (await import("./pages/ProjectDetail")).default,
                }),
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
