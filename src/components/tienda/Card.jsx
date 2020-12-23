import '../../estilos/card.scss';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

function Card ({id, imagen, precio, autor, titulo, alt, ruta}) {
    
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <h5>{titulo}</h5>

                <img src={imagen} alt={alt} />
            
                <h6>{autor}</h6>
            
                <p className="precio">{precio}</p>

                <ItemCount />
                <Link to={ruta} className="agregar">Ver más</Link>
            </div>
        </div> 
    )
}
 
export default Card;