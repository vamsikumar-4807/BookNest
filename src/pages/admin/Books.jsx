import { useContext } from "react";
import AdminNavbar from "../../layouts/AdminNavbar";
import { WishlistContext } from "../../context/WishlistContext";

function Books() {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const books = [
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      genre: "Business",
      price: "$100",
      img: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    },
    {
      title: "The Mosquito",
      author: "Timothy C. Winegard",
      genre: "Nonfiction",
      price: "$130",
      img: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    },
    {
      title: "Elon Musk",
      author: "Walter Isaacson",
      genre: "Biography",
      price: "$130",
      img: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    },
  ];

  const isInWishlist = (title) =>
    wishlist.find((item) => item.title === title);

  return (
    <>
      <AdminNavbar />

      <h2 className="page-title">Books List</h2>

      <div className="books-container">
        {books.map((book) => (
          <div className="book-card" key={book.title}>
            <img src={book.img} alt={book.title} />

            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p className="price">{book.price}</p>

            {isInWishlist(book.title) ? (
              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(book.title)}
              >
                Remove from Wishlist
              </button>
            ) : (
              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(book)}
              >
                Add to Wishlist
              </button>
            )}

            <button className="view-btn">View</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;