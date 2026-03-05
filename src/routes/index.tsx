import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Main from "./pages/Main";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, element: <Main /> },
            { path: "/project/:projectId", element: <ProjectDetail /> },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
