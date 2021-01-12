import '../../estilos/cartWidget.scss'
import { FaShoppingCart } from "react-icons/fa";

import { useContext } from "react";
import {Store} from '../../Store';
import {useHistory} from 'react-router-dom';

function CartWidget () {

    const [data, setData] = useContext(Store);

    const history = useHistory();

    const goResumen = () =>{
        history.push('/resumen')
    }

    return(
        <div className="col-1 iconCart">
            <div className="contadorUnidades">
               <p> {data.cantidad} </p> 
            </div>
        <FaShoppingCart className="cart" /> 
            <div className="escondido">
                <h6>Tu Carrito tiene {data.cantidad} productos </h6>
                {
                data.productos.map((libro) =>(
                    <ul>
                        <li><img src={libro.img} alt={libro.alt}/></li>
                        <li>{libro.precio}</li>
                        <li>X</li>
                    </ul>
                ))
                }
                <button onClick={goResumen}>Comprar</button>

            </div>
        </div>
    )
}

export default CartWidget;