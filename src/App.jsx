import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <main className="w-screen min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="erikasblog/" element={<Home />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
