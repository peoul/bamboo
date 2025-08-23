import { createBrowserRouter } from "react-router";
import App from "./pages/App";
import GetStarted from "./pages/GetStarted";


export const router = createBrowserRouter([
    { path: "/", Component: App},
    {path: "/get-started", Component: GetStarted}  
])