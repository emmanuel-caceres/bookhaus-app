import {useParams} from 'react-router-dom';
import libro from './Productos';
import ItemDescription from './ItemDescription';


function ContDescription() {

    const{productId} = useParams();

    return(
        <div className="container-fluid contDescription">
            <div className="row">
                <h2>Detalles del Producto</h2>
            </div>
            <ItemDescription 
            img={libro[productId].img}
            alt={libro[productId].alt}
            titulo={libro[productId].titulo}
            resenia={libro[productId].resenia}
            idioma={libro[productId].idioma}
            autor={libro[productId].autor}
            dimensiones={libro[productId].dimensiones}
            publicacion={libro[productId].publicacion}
            editorial={libro[productId].editorial}
            precio={libro[productId].precio}/>
        </div>
    )
}

export default ContDescription;