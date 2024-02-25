import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <main className="w-screen min-h-screen">
      <Router>
        <Routes>
          <Route path="/erikasblog" element={<Home />} />
          <Route path="/erikasblog/admin/*" element={<AdminPanel />} />
        </Routes>
      </Router>
    </main>
  );
}
