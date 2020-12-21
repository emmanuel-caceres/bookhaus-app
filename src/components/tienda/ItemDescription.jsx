import './../../estilos/itemDescription.scss';
import CarrouselDescription from './CarrouselDescription'

function ItemDescription ({titulo, resenia, idioma, autor, dimensiones, publicacion, editorial, precio}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                 <CarrouselDescription />
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
                <button>Añadir a la cesta</button>
                </div>

                </div>
                
            </div>
            </div>
    )
}

export default ItemDescription;