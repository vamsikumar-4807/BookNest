import { useNavigate, useParams } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const { role } = useParams();

  const handleLogin = () => {

    // ✅ store logged-in name (used in all navbars)
    localStorage.setItem("name", "vamsi");

    if (role === "admin") {
      navigate("/admin/dashboard");
    }

    // ✅ SELLER → directly open My Orders page
    else if (role === "seller") {
      navigate("/seller/orders");
    }

    // ✅ USER → open Users table page (admin-style UI you showed)
    else {
      navigate("/admin/users");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to {role} account</h2>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Log in</button>

        <p>
          Don’t have an account? <span>Create Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;