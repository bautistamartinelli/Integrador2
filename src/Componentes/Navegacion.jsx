import "../css/Navegacion.css";
import Logo from "../img/top-10-suplementos-alimentares.ico";
import { Link} from "react-router-dom";

const Navegacion = () => {
    return(
        <header>
        <div id="Logo">
            <img src={Logo} alt="Logo de suplementos" />
        </div>
        <div id="altadp">
            <h1 style={{marginLeft: 60}}>Supleportivos</h1>
            <p>Alta de productos</p>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to= "Alta">Alta </Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>   
                        
            </ul>
            <form id="buscador">
                <input type="text" placeholder="" />
                <button type="submit">Buscar</button>
            </form>
        </nav>
    </header> 
    )
}

export default Navegacion;