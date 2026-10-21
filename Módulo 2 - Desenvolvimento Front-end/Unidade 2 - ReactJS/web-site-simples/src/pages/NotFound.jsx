import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>404 - Página Não Encontrada</h2>
      <p>A página que está a tentar aceder não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;
