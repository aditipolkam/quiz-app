import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <MainLayout>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainLayout>
    </ChakraProvider>
  </React.StrictMode>
);
