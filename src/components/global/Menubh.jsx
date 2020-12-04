import '../../estilos/menubh.scss';
import logo from '../../assets/globobh-01.svg';
import CartWidget from './CartWidget';


function Menubh() {
    return (
        <header className="container-fluid">
            <div className="row">

                <div className="col-2 logo">
                    <h2>BOOKHAUS</h2>
                    <img src={logo} alt="logo bookhaus"/>
                </div>

                <nav className="col-9">
                    <ul>
                        <li> <a href="#"> Inicio </a> </li>
                        <li> <a href="#"> Nosotros </a> </li>
                        <li> <a href="#"> Tienda </a> </li>
                        <li> <a href="#"> Contacto </a> </li>
                    </ul>
                </nav>

                <CartWidget />

            </div>
        </header>
    )
};

export default Menubh;