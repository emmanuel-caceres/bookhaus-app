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

    function eliminaProducto(a) {
        
        const eliminando = data.productos.find((prod) => prod.item.id == a);

        const nuevaData = data.productos;

        for (let i = 0; i <= nuevaData.length; i++) {
            if (nuevaData[i].item.id == eliminando.item.id) {

                nuevaData.splice(i, 1);
                break;
            } 
        } 

        setData ({
            cantidad: data.cantidad - eliminando.cantidad,
            productos: nuevaData,
            precioTotal: data.precioTotal - parseFloat(eliminando.item.precio)
        });
        
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
                    <ul key={libro.item.id}>
                        <li><img src={libro.item.img} alt={libro.item.alt}/></li>
                        <li>
                           <p> {libro.item.titulo} </p> 
                           <p> cant: {libro.cantidad} </p> 
                           <h5>  $ {libro.item.precio} </h5>
                           </li>
                        <li className="marPointer" onClick={() => eliminaProducto(libro.item.id)}>X</li>
                    </ul>
                ))
                }
                <button className="cardWidgetButton" onClick={goResumen}>Comprar</button>

            </div>
        </div>
    )
}

export default CartWidget;