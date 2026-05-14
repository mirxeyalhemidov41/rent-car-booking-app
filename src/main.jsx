import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MessageProvider } from "./components/Mesage/MessageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <MessageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MessageProvider>,
);
