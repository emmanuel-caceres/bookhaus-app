import './../../estilos/resumen.scss';
import {Link} from 'react-router-dom';

import { useContext } from "react";
import {Store} from '../../Store';

function Resumen () {

    const [data, setData] = useContext(Store);

    const subtotal = 0;

    return(
        <div className="container-fluid resumenProductos">
 
            <div className="row">
                <div className="col-8">
                {
                    data.productos.map((libro) => (
                        <div className="articulos">
                            <img src={libro.img} alt={libro.alt}/>
                            <ul>
                                <li><h6>{libro.titulo}</h6></li>
                                <li>Cant: {libro.cant} un</li>
                                <li>$ {libro.precio}</li>
                            </ul>

                            <h5>Subtotal ${libro.precio * libro.cant}</h5>

                            <button className="eliminarProducto">X</button>
                        </div>
                    ))
                }
            </div>

                <div className="col-4 resumenCompra">
                    <h4>Resumen de compra</h4>
                    <p>Subtotal: $ {subtotal} </p>
                    <p>IVA: xxx </p>

                    <Link to="/checkout" className="botonComprar"> Comprar </Link>
                </div>
            </div>
        </div>
    );
};

export default Resumen;