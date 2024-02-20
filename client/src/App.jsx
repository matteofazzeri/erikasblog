import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <main className="w-screen min-h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/posts" element={<AdminPanel />} />
          <Route path="/admin/categories" element={<AdminPanel />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/blog/Articles" element={<Articles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
