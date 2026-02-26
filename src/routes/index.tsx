import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
