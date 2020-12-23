import './../../estilos/resumen.scss';
import {Link} from 'react-router-dom';
import libro from './../tienda/Productos';

function Resumen () {
    return(
        <div className="container-fluid resumenProductos">
            <div className="row">
                <div className="col-8">
                <ul>
                    <li> <img src={libro[3].img} alt={libro[3].alt}/> </li>
                    <li>{libro[3].titulo}</li>
                    <li>Cant: 1 un</li>
                    <li>{libro[3].precio}</li>
                    <li>X</li>
                </ul>
                <ul>
                    <li> <img src={libro[2].img} alt={libro[2].alt}/> </li>
                    <li>{libro[2].titulo}</li>
                    <li>Cant: 2 un</li>
                    <li>{libro[2].precio}</li>
                    <li>X</li>
                </ul>
                </div>

                <div className="col-4 resumenCompra">
                    <h4>Resumen de compra</h4>
                    <p>Subtotal: $ xxx </p>
                    <p>IVA: xxx </p>

                    <Link to="" className="botonComprar"> Comprar </Link>
                </div>
            </div>
        </div>
    );
};

export default Resumen;