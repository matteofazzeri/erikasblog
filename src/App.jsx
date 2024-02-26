import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PrivateRoutes from "./auth/PrivateRoute";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <main className="min-h-screen">
      <Analytics />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="admin" element={<AdminPanel />} />
            <Route path="admin/posts" element={<AdminPanel />} />
            <Route path="admin/categories" element={<AdminPanel />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
