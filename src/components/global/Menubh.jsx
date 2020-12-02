import '../../estilos/menubh.css';
import logo from '../../assets/globobh-01.svg';


function Menubh() {
    return (
        <header>
            <div className="logo">
                <h2>BOOKHAUS</h2>
                <img src={logo} alt="logo bookhaus"/>
            </div>
            <nav>
                <ul>
                    <li> <a href="#"> Inicio </a> </li>
                    <li> <a href="#"> Nosotros </a> </li>
                    <li> <a href="#"> Tienda </a> </li>
                    <li> <a href="#"> Contacto </a> </li>
                </ul>
            </nav>
        </header>
    )
};

export default Menubh;