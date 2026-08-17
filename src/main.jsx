import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
