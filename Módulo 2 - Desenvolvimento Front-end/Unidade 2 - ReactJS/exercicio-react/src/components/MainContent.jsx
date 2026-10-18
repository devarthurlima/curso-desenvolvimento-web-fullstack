const MainContent = ({ children }) => {
  return <main className="container-principal">{children}</main>;
};

const Banner = () => {
  return (
    <div className="banner">
      <h2>Destaque da Semana</h2>
    </div>
  );
};

export { MainContent, Banner };
