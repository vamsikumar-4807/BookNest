import MainNavbar from "../../layouts/MainNavbar";
import "../public/landing.css";

function UserHome() {
  return (
    <>
      <MainNavbar />
      <h1 className="title">Best Seller</h1>
      <div className="book-container">{/* same books */}</div>
    </>
  );
}

export default UserHome;