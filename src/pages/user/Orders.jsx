import MainNavbar from "../../layouts/MainNavbar";
import "./orders.css";

function Orders() {
  const orders = [
    {
      image:
        "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg",
      name: "Think and Grow Rich",
      orderId: "6540848015",
      address: "Hyderabad, Telangana",
      seller: "syed",
      bookingDate: "11/18/2023",
      deliveryDate: "12/25/2023",
      price: "$189",
      status: "Delivered",
    },
  ];

  return (
    <>
      <MainNavbar role="user" />

      <h2 className="title">My Orders</h2>

      <div className="orders-container">
        {orders.map((o, i) => (
          <div className="order-card" key={i}>
            <img src={o.image} alt="" />

            <div className="order-details">
              <p><b>ProductName:</b> {o.name}</p>
              <p><b>OrderId:</b> {o.orderId}</p>
              <p><b>Address:</b> {o.address}</p>
              <p><b>Seller:</b> {o.seller}</p>
              <p><b>BookingDate:</b> {o.bookingDate}</p>
              <p><b>Delivery By:</b> {o.deliveryDate}</p>
              <p><b>Price:</b> {o.price}</p>
              <p><b>Status:</b> {o.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Orders;