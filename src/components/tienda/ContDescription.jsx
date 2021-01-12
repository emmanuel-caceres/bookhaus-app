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
            item={libro[productId]} />

        </div>
    )
}

export default ContDescription;