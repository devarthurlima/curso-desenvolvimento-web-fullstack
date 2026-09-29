import Banner from "./components/Banner";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import Componente1, {
  Componente2,
  Componente3,
} from "./components/VariosComponentes";

const App = () => {
  return (
    // parte vísivel do componente
    <>
      {/* <Banner />
      <Header />
      <Componente1 />
      <Componente2 />
      <Componente3 /> */}
      {/* <FormaDeBolo sabor="Laranja" cobertura="Chocolate" />
      <FormaDeBolo sabor="Chocolate" cobertura="Ninho" />
      <FormaDeBolo sabor="Frango" cobertura="Molho Xadrês" /> */}
      <Card
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oVrv0Pt18KeoZHkRxYQuzx8qCBahg0q7atMMg1EAJg&s=10"
        }
        title={"Notícia 1"}
        type={"A"}
        category={"Esportes"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex assumenda est itaque molestiae nesciunt nam dolor soluta, quia minima magnam suscipit quasi placeat dignissimos cum nobis ullam, tempora incidunt!"
        }
      />
      <Card
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oVrv0Pt18KeoZHkRxYQuzx8qCBahg0q7atMMg1EAJg&s=10"
        }
        title={"Notícia 2"}
        category={"Finanças e Investimentos"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex assumenda est itaque molestiae nesciunt nam dolor soluta, quia minima magnam suscipit quasi placeat dignissimos cum nobis ullam, tempora incidunt!"
        }
      />
      <Card
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oVrv0Pt18KeoZHkRxYQuzx8qCBahg0q7atMMg1EAJg&s=10"
        }
        title={"Notícia 3"}
        category={"Esportes"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex assumenda est itaque molestiae nesciunt nam dolor soluta, quia minima magnam suscipit quasi placeat dignissimos cum nobis ullam, tempora incidunt!"
        }
      />

      <CardDinamico>
        <h1>Noticía 4</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oVrv0Pt18KeoZHkRxYQuzx8qCBahg0q7atMMg1EAJg&s=10"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iure
          voluptas voluptatum quidem deleniti laboriosam, ipsa nostrum aperiam
          doloribus, enim fuga! Ea aliquam rem animi doloremque laudantium,
          earum repudiandae quibusdam?
        </p>
      </CardDinamico>

      <CardDinamico>
        <h1>Noticía 4</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oVrv0Pt18KeoZHkRxYQuzx8qCBahg0q7atMMg1EAJg&s=10"
          alt=""
        />
      </CardDinamico>

      <CardDinamico>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oVrv0Pt18KeoZHkRxYQuzx8qCBahg0q7atMMg1EAJg&s=10"
          alt=""
        />
        <h1>Noticía 4</h1>
      </CardDinamico>
    </>
  );
};

export default App;
