import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LibraryProvider } from "./context/LibraryContext.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LibraryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LibraryProvider>
  </React.StrictMode>,
);
