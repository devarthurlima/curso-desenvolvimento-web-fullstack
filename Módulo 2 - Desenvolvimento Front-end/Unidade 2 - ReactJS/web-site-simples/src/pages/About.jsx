import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <>
        <h1>SOBRE</h1>
        <p>Esta é a página Sobre.</p>
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
 
export default About;