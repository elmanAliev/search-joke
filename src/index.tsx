import "./app/styles/index.scss";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "./app/providers/storeProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
