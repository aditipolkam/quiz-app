import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainLayout>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainLayout>
  </React.StrictMode>
);
