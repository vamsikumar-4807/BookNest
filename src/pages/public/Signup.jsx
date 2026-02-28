import { useParams, useNavigate } from "react-router-dom";
import MainNavbar from "../../layouts/MainNavbar";
import "./login.css";
import { useState } from "react";

function Signup() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const userData = { email, password };

    localStorage.setItem(role, JSON.stringify(userData));

    alert("Signup successful");

    navigate(`/login/${role}`);
  };

  return (
    <>
      <MainNavbar />

      <div className="login-container">
        <div className="login-box">
          <h2>Signup for {role} account</h2>

          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </>
  );
}

export default Signup;