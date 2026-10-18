const Card = ({ titulo, children }) => {
  return (
    <>
      <div className="card">
        <h2>{titulo}</h2>
        <div className="card-conteudo">{children}</div>
      </div>
    </>
  );
};

export default Card;
