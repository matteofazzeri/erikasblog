import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PrivateRoutes from "./auth/PrivateRoute";

export default function App() {
  return (
    <main className="w-screen min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="admin/*" element={<AdminPanel />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
