import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
