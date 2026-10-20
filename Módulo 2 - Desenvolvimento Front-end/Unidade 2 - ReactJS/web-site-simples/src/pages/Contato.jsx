import { Link } from "react-router-dom";

const Contato = () => {
  return (
    <>
      <h1>CONTATO</h1>
      <p>Esta é a página de Contato.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Contato;
