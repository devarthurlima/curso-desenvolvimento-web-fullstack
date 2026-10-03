import "primeflex/primeflex.css";

import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";

import { Button } from "@primereact/ui/button";

const App = () => {
  return (
    <>
      <div>
        <Button>Verify</Button>
      </div>
      <div>
        <Button label="Submit" />
      </div>
    </>
  );
};

export default App;
