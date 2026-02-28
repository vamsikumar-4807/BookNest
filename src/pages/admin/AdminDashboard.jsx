import AdminNavbar from "../../layouts/AdminNavbar";
import "../user/userHome.css"; // reuse your card styling

function AdminDashboard() {
  return (
    <>
      <AdminNavbar />

      <h1 className="title">Books List</h1>

      <div className="books">

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/71UypkUjStL.jpg" />
          <h3>Think and Grow Rich</h3>
          <p>Author: Napoleon Hill</p>
          <p>Genre: Business</p>
          <p className="price">$100</p>
          <div className="card-buttons">
            <button className="wishlist">Add to Wishlist</button>
            <button className="view">View</button>
          </div>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" />
          <h3>The Mosquito</h3>
          <p>Author: Timothy C. Winegard</p>
          <p>Genre: Nonfiction</p>
          <p className="price">$130</p>
          <div className="card-buttons">
            <button className="wishlist red">Remove from Wishlist</button>
            <button className="view">View</button>
          </div>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" />
          <h3>Elon Musk</h3>
          <p>Author: Walter Isaacson</p>
          <p>Genre: Biography</p>
          <p className="price">$130</p>
          <div className="card-buttons">
            <button className="wishlist">Add to Wishlist</button>
            <button className="view">View</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default AdminDashboard;