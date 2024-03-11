import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Root from "../root";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";

const rootElement = document.getElementById("root");

if (rootElement) {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<PostList />} />
                <Route path="/post/:id" element={<SinglePost />} />
            </Route>
        )
    );

    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found in the document.");
}
