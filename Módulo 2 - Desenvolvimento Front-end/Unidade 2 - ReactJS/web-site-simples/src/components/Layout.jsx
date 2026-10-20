import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>LAYOUT</h1>
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

export default Layout;
