import MainNavbar from "../../layouts/MainNavbar";
import "./books.css";

import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

function Books() {
  const { wishlist, addToWishlist } = useContext(WishlistContext);

  const books = [
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      genre: "Business",
      price: "$100",
      image:
        "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Mosquito",
      author: "Timothy C. Winegard",
      genre: "Nonfiction",
      price: "$130",
      image:
        "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
    },
    {
      title: "Elon Musk",
      author: "Walter Isaacson",
      genre: "Biography",
      price: "$130",
      image:
        "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
    },
  ];

  return (
    <>
      <MainNavbar role="user" />

      <h2 className="title">Books List</h2>

      <div className="book-container">
        {books.map((b, i) => (
          <div className="book-card" key={i}>
            <img src={b.image} alt={b.title} />

            <h3>{b.title}</h3>
            <p>Author: {b.author}</p>
            <p>Genre: {b.genre}</p>

            <p className="price">{b.price}</p>

            <button
              className="wishlist"
              onClick={() => addToWishlist(b)}
            >
              {wishlist.find((item) => item.title === b.title)
                ? "Added"
                : "Add to Wishlist"}
            </button>

            <button className="view">View</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;