import { Link, useParams } from "react-router-dom";
const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Perfil do Utilizador</h2>
      <p>
        ID do utilizador: <strong>{id}</strong>
      </p>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/user/1">Ver utilizador 1</Link> |{" "}
        <Link to="/user/99">Ver utilizador 99</Link>
      </div>
      <br />
      <Link to="/">Voltar ao Início</Link>
    </div>
  );
};

export default UserProfile;
