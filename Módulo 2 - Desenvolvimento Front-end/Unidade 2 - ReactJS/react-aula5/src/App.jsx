import "primeflex/primeflex.css";

import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";

import { Button } from "@primereact/ui/button";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
