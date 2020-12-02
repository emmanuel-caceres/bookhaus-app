import '../../estilos/footerbh.css'

function Footerbh() {
    return (
        <footer>
            <ul>
                <li> <a href="#">Inicio</a> </li>
                <li> <a href="#">Nosotros</a> </li>
                <li> <a href="#">Tienda</a> </li>
                <li> <a href="#">Contacto</a> </li>
            </ul>

            <div className="redes">
                <div> <a href="#">FB</a> </div>
                <div> <a href="#">IG</a> </div>
            </div>

            <div>
                <h4>Bookhaus</h4>
                <h5>Almagro - CABA</h5>
                <h5>contacto@bookhaus.com</h5>
            </div>
        </footer>
    )
};


export default Footerbh;