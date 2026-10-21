import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import About from "./pages/About";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contato />} />
          <Route path="user/:id" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
