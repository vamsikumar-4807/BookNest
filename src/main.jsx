import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* ✅ ADD THIS IMPORT */
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ WRAP APP — NOTHING ELSE CHANGED */}
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>
);