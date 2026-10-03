import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { StrictMode } from "react";

import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/lara";

import "primeflex/primeflex.css";

const primereact = {
  theme: {
    preset: Aura,
  },
  license: "PrimeUI-Commercial-Key...",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
