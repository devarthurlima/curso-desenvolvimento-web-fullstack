import "primeflex/primeflex.css";

import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";

import { Button } from "@primereact/ui/button";
import Login from "./pages/Login";

import Paths from "./routes/Paths";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";

const App = () => {
  return (
    <>
      <AuthContext>
        <Paths />
      </AuthContext>
    </>
  );
};

export default App;
