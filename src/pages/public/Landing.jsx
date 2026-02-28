import { useNavigate } from "react-router-dom";
import MainNavbar from "../../layouts/MainNavbar";
import "./landing.css";

function Landing() {
  const navigate = useNavigate();   // ✅ added

  return (
    <>
      <MainNavbar
        onUserClick={() => navigate("/login/user")}
        onSellerClick={() => navigate("/login/seller")}
        onAdminClick={() => navigate("/login/admin")}
      />

      <h1 className="title">Best Seller</h1>

      <div className="books">

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" />
          <p>RICH DAD POOR DAD</p>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/71UypkUjStL.jpg" />
          <p>THINK AND GROW RICH</p>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" />
          <p>DON'T LET HER STAY</p>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" />
          <p>KILLING THE WITCHES</p>
        </div>

      </div>
    </>
  );
}

export default Landing;