import '../../estilos/menubh.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/globobh-01.svg';
import CartWidget from './CartWidget';

function Menubh() {
    return (
        <header className="container-fluid">
            <div className="row">

                <div className="col-2 logo">
                    <Link to="/"><h2>BOOKHAUS</h2></Link>  
                    <img src={logo} alt="logo bookhaus"/>
                </div>

                <nav className="col-9">
                    <ul>
                        <li> <Link to="/">Inicio</Link> </li>
                        <li> <Link to="/nosotros">Nosotros</Link> </li>
                        <li> <Link to="/category">Tienda</Link> </li>
                        <li> <Link to="/contacto">Contacto</Link> </li>
                    </ul>
                </nav>

                <CartWidget />

            </div>
        </header>
    )
};

export default Menubh;