import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [{ index: true, element: <Main /> }],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
