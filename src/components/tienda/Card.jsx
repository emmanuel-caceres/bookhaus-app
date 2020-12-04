import '../../estilos/card.scss';

function Card ({imagen, precio, autor, titulo, alt}) {
    return (
        <div className="col-12 col-md-3 card">

        <img src={imagen} alt={alt} />
        
        <h5>{titulo}</h5>
       
        <h6>{autor}</h6>
       
        <p className="precio">{precio}</p>
       
        <button>Agregar</button>

    </div> 
    )
}
 
export default Card;