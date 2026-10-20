import { Link } from "react-router-dom";
 
const Home = () => {
    return ( 
        <>
        <h1>HOME</h1>
        <p>Bem-vindo à página inicial!</p>
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Home;