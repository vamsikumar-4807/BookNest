import { useNavigate } from "react-router-dom";
import "./adminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");   // ✅ clear stored username
    navigate("/");
  };

  return (
    <div className="admin-navbar">
      
      <div className="admin-logo">
        BookStore(Admin)
      </div>

      <div className="admin-nav-links">
        <span onClick={() => navigate("/admin/dashboard")}>Home</span>
        <span onClick={() => navigate("/admin/users")}>Users</span>
        <span onClick={() => navigate("/admin/sellers")}>Sellers</span>
        <span onClick={handleLogout}>Logout (vamsi)</span>
      </div>

    </div>
  );
}

export default AdminNavbar;