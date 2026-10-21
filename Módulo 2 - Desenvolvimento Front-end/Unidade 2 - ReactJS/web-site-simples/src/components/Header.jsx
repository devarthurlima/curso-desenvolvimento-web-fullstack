import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Meu Site</h2>
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
          <li>
            <Link to="/user/1">Perfil (ID: 1)</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
