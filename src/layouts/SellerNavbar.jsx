import { useNavigate } from "react-router-dom";
import "./sellerNavbar.css";

function SellerNavbar() {
  const navigate = useNavigate();

  return (
    <div className="admin-navbar">
      <div className="admin-logo">BookStore</div>

      <div className="admin-nav-links">
        <span onClick={() => navigate("/seller/dashboard")}>Home</span>
        <span onClick={() => navigate("/seller/add-book")}>Add Book</span>
        <span onClick={() => navigate("/seller/my-products")}>My Products</span>
        <span onClick={() => navigate("/seller/orders")}>My Orders</span>
        <span onClick={() => navigate("/")}>Logout</span>
      </div>
    </div>
  );
}

export default SellerNavbar;