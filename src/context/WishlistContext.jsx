import { createContext, useState, useContext } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist((prev) => {
      const alreadyExists = prev.find((b) => b.title === book.title);
      return alreadyExists ? prev : [...prev, book];
    });
  };

  const removeFromWishlist = (title) => {
    setWishlist((prev) => prev.filter((b) => b.title !== title));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

/* ✅ CUSTOM HOOK — THIS IS THE ONLY ADDITION */
export const useWishlist = () => useContext(WishlistContext);