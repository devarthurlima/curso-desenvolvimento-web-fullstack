import { useEffect, useState } from "react";
import Paths from "./Routes/Paths";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function boasVindas() {
    //alert("Boas vindas");
  }

  useEffect(() => {
    console.log("useEffect foi chamado.");
  });

  useEffect(() => {
    boasVindas();
    console.log("useEffect que é chamado somente uma vez.");
  }, []);

  useEffect(() => {
    console.log("useEffect ativado somente por dependências");
  }, [count]);

  return (
    <>
      {/* <h1>Olá Mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        consequatur esse nostrum excepturi, fugit tempora minima dolorum rem
        voluptatum veniam dolores earum. Sequi nobis sit doloribus quibusdam, a
        labore corrupti?
      </p>

      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Adicione</button>

      <h2>Contador: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Adicione</button> */}

      <Paths />
    </>
  );
};

export default App;
