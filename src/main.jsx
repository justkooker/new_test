import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MainPage from "./pages/mainPage/MainPage";

import "./style.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
