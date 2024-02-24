import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";

/* const router = createBrowserRouter([
  {
    path: "/erikasblog/",
    element: <App />,
    children: [
      {
        path: "/erikasblog/home",
        element: <Home />,
      },
      {
        path: "/erikasblog/admin/",
        element: <AdminPanel />,
      },
    ],
  },
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
