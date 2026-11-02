import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";
import App from "./App.jsx";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const theme = {
  preset: Aura,
  options: {
    darkModeSelector: false,
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider theme={theme}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
