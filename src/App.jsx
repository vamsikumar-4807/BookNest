import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* 🌍 PUBLIC */
import Landing from "./pages/public/Landing";
import Login from "./pages/public/Login";

/* 👤 USER */
import UserHome from "./pages/user/UserHome";
import Books from "./pages/user/Books";
import Wishlist from "./pages/user/Wishlist";
import Orders from "./pages/user/Orders";

/* 🛒 SELLER */
import SellerDashboard from "./pages/seller/SellerDashboard";
import AddBook from "./pages/seller/AddBook";
import MyProducts from "./pages/seller/MyProducts";
import SellerOrders from "./pages/seller/SellerOrders";

/* 🛠 ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Sellers from "./pages/admin/Sellers";

/* ✅ ADMIN EXTRA PAGES */
import AdminBooks from "./pages/admin/Books";
import AdminWishlist from "./pages/admin/Wishlist";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC */}
        <Route path="/" element={<Landing />} />
        <Route path="/login/:role" element={<Login />} />

        {/* 👤 USER */}
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/books" element={<Books />} />
        <Route path="/user/wishlist" element={<Wishlist />} />
        <Route path="/user/orders" element={<Orders />} />

        {/* 🛒 SELLER */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/add-book" element={<AddBook />} />
        <Route path="/seller/my-products" element={<MyProducts />} />
        <Route path="/seller/orders" element={<SellerOrders />} />

        {/* 🛠 ADMIN */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/books" element={<AdminBooks />} />
        <Route path="/admin/wishlist" element={<AdminWishlist />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/sellers" element={<Sellers />} />

        {/* ✅ FALLBACK — PREVENTS BLANK PAGE */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;