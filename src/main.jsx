import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// my pages
import App from "./App.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import NotFound from "./pages/NotFound.jsx";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "erikasblog/",
        element: <Home />,
      },
      {
        path: "erikasblog/admin/*",
        element: <AdminPanel />,
      },
      {
        path: "erikasblog/blog",
        element: <Home />,
      },
      {
        path: "erikasblog/articles",
        element: <Articles />,
      },
      {
        path: "erikasblog/*",
        element: <NotFound />,
      },
      {
        path: "erikasblog/notfound",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
