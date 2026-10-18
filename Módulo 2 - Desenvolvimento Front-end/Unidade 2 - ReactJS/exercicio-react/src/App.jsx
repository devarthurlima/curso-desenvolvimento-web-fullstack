import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { MainContent, Banner } from "./components/MainContent";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <MainContent>
        <Card titulo="Card 1">
          <p>Este é o conteúdo do card 1.</p>
        </Card>
        <Card titulo="Card 2">
          <p>Este é o conteúdo do card 2.</p>
        </Card>
      </MainContent>
      <Footer />
    </>
  );
};

export default App;
