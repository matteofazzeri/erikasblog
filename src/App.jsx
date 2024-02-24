import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <main className="w-screen min-h-screen">
      {/* <Routes>
        <Route exact path="/erikasblog" element={<Home />} />
        <Route path="/erikasblog/admin/login" element={<Login />} />
        <Route path="/erikasblog/admin" element={<AdminPanel />} />
        <Route path="/erikasblog/admin/posts" element={<AdminPanel />} />
        <Route path="/erikasblog/admin/categories" element={<AdminPanel />} />
        <Route path="/erikasblog/blog" element={<Home />} />
        <Route path="/erikasblog/blog/Articles" element={<Articles />} />
        <Route path="/erikasblog/*" element={<NotFound />} />
      </Routes> */}
    </main>
  );
}
