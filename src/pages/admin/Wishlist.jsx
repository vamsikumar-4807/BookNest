import { useContext } from "react";
import AdminNavbar from "../../layouts/AdminNavbar";
import { WishlistContext } from "../../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <>
      <AdminNavbar />

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Wishlist</h2>

      <div className="books">
        {wishlist.map((book) => (
          <div className="card" key={book.title}>
            <img src={book.img} />

            <h3>{book.title}</h3>

            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p className="price">{book.price}</p>

            <button
              className="remove-btn"
              onClick={() => removeFromWishlist(book.title)}
            >
              Remove from Wishlist
            </button>

            <button className="view-btn">View</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;