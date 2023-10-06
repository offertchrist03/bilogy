import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import MyError from "./app/error/MyError";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <MyError
              type="pas de page"
              description="veuiller verifier l'adresse http du site"
              linkRef="/"
              link="revenir a l'accueil"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
