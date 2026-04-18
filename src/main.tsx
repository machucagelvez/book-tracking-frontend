import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BooksTrackingApp } from "./BooksTrackingApp";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BooksTrackingApp />
  </StrictMode>,
);
