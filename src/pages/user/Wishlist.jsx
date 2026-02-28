import MainNavbar from "../../layouts/MainNavbar";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./books.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <>
      <MainNavbar role="user" />

      <h2 className="title">My Wishlist</h2>

      <div className="book-container">
        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          wishlist.map((b, i) => (
            <div className="book-card" key={i}>
              <img src={b.image} alt={b.title} />

              <h3>{b.title}</h3>
              <p className="price">{b.price}</p>

              <button
                className="view"
                onClick={() => removeFromWishlist(b.title)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Wishlist;