import '../../estilos/cartWidget.scss'
import { FaShoppingCart } from "react-icons/fa";

function CartWidget () {
    return(
        <div className="col-1 iconCart">
        <FaShoppingCart className="cart" /> 
            <div className="escondido">
                <h6>Tu Carrito</h6>

                <button>Comprar</button>

            </div>
        </div>
    )
}

export default CartWidget;