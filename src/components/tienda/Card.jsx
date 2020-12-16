import '../../estilos/card.scss';
import ItemCount from './ItemCount';

function Card ({imagen, precio, autor, titulo, alt}) {
    
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <h5>{titulo}</h5>

                <img src={imagen} alt={alt} />
            
                <h6>{autor}</h6>
            
                <p className="precio">{precio}</p>

                <ItemCount />
                <button className="agregar">Agregar</button>
            </div>
        </div> 
    )
}
 
export default Card;