import './../../estilos/itemDescription.scss';
import {Link} from 'react-router-dom';

function ItemDescription ({id, img, alt, titulo, resenia, idioma, autor, dimensiones, publicacion, editorial, precio}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 descriptionImg">
                 <img src={img} alt={alt} />
                 <p className="mt-4">{resenia}</p>
                </div>

                <div className="col-12 col-md-6">
                <h3 className="mt-5"> {titulo} </h3>
                <hr/>
                <p> <strong>Idioma:</strong> {idioma}</p>
                <p> <strong>Autor:</strong> {autor}</p>
                <p> <strong>Dimensiones:</strong> {dimensiones}</p>
                <p> <strong>Fecha de Publicación:</strong> {publicacion} </p>
                <p> <strong> Editorial: </strong> {editorial} </p>
                <hr/>

                <div className="salida">
                <h3> {precio} </h3>
                <hr/>
                <p><strong>Tiempo de envio:</strong> 13-20 dias habiles</p>

                <Link to="/resumen" className="botonResumen"> Añadir a la cesta </Link>
                </div>

                </div>
                
            </div>
            </div>
    )
}

export default ItemDescription;