import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <p>&copy; 2026 Arthur Lima. Todos os direitos reservados.</p>
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

export default Footer;
