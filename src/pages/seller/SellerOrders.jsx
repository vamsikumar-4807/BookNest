import SellerNavbar from "../../layouts/SellerNavbar";
import "./orders.css";

function SellerOrders() {
  return (
    <>
      <SellerNavbar />

      <h2 style={{ textAlign: "center", margin: "20px 0" }}>My Orders</h2>

      <div className="orders-container">

        {/* ROW 1 */}
        <div className="order-row">
          <img
            src="https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
            alt="Think and Grow Rich"
          />
          <p>-0449</p>
          <p>6500448015</p>
          <p>dsfdfk, asdasd, asdasda</p>
          <p>vamsi</p>
          <p>1/18/2023</p>
          <p>12/25/2023</p>
          <p>$189</p>
          <p>delivered</p>
        </div>

        {/* ROW 2 */}
        <div className="order-row">
          <img
            src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
            alt="Killing the Witches"
          />
          <p>-0114</p>
          <p>600014467</p>
          <p>122-B, hyderabad, Telangana</p>
          <p>vamsi</p>
          <p>4/1/2024</p>
          <p>4/7/2024</p>
          <p>$229</p>
          <p>on the way</p>
        </div>

        {/* ROW 3 */}
        <div className="order-row">
          <img
            src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
            alt="The Mosquito"
          />
          <p>-0126</p>
          <p>600076507</p>
          <p>j,k</p>
          <p>vamsi</p>
          <p>3/25/2024</p>
          <p>4/7/2024</p>
          <p>$229</p>
          <p>on the way</p>
        </div>

        {/* ROW 4 */}
        <div className="order-row">
          <img
            src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
            alt="Rich Dad Poor Dad"
          />
          <p>-0128</p>
          <p>600076607</p>
          <p>j,k</p>
          <p>vamsi</p>
          <p>3/25/2024</p>
          <p>4/7/2024</p>
          <p>$229</p>
          <p>on the way</p>
        </div>

      </div>
    </>
  );
}

export default SellerOrders;