import "./navbar.css";
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">

      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        BookStore
      </div>

      <div className="nav-buttons">
        <button onClick={() => navigate("/login/user")}>User</button>
        <button onClick={() => navigate("/login/seller")}>Seller</button>
        <button onClick={() => navigate("/login/admin")}>Admin</button>
      </div>

    </div>
  );
}

export default MainNavbar;