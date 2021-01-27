import './../../estilos/resumen.scss';
import {Link} from 'react-router-dom';

import { useContext } from "react";
import {Store} from '../../Store';

function Resumen () {

    const [data, setData] = useContext(Store);

    const total = data.precioTotal.toFixed(2);

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
            precioTotal: data.precioTotal - parseFloat(eliminando.item.precio * eliminando.cantidad)
        });
        
    }

    

    return(
        <div className="container-fluid resumenProductos">
 
            <div className="row">
                <div className="col-8">
                {
                    data.productos.map((libro) => (
                        <div className="articulos" key={libro.item.id}>
                            <img src={libro.item.img} alt={libro.item.alt}/>
                            <ul>
                                <li><h6>{libro.item.titulo}</h6></li>
                                <li>Valor Unitario: $ {libro.item.precio.toFixed(2)}</li>
                                <li>Cant: {libro.cantidad} un</li>
                            </ul>

                            <h5 className="mr-3">subtotal ${libro.item.precio.toFixed(0) * libro.cantidad.toFixed(0)}</h5>

                            <button className="eliminarProducto" onClick={() => eliminaProducto(libro.item.id)}>X</button>
                        </div>
                    ))
                }
            </div>

                <div className="col-4 resumenCompra">
                    <h4>Resumen de compra</h4>
                    <p>Total: $ {total} </p>
                    

                    <Link to="/checkout" className="botonComprar"> Comprar </Link>
                </div>
            </div>
        </div>
    );
};

export default Resumen;