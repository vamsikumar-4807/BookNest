import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/public/Landing";
import Login from "../pages/public/Login";

import UserHome from "../pages/user/UserHome";
import SellerDashboard from "../pages/seller/SellerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Landing />} />
        <Route path="/login/:role" element={<Login />} />

        {/* USER */}
        <Route path="/user/home" element={<UserHome />} />

        {/* SELLER */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />

        {/* ADMIN */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* DEFAULT FALLBACK (VERY IMPORTANT) */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;