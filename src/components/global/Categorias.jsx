import '../../estilos/categorias.scss';
import {Link} from 'react-router-dom';

function Categorias () {
    return(
        <div className="container-fluid categorias">
            <ul>
                <li> <Link to="/filter/arte-fotografia"> Arte y Fotografia </Link> </li>
                <li> <Link to="/filter/infantiles"> Infantiles </Link> </li>
                <li> <Link to="/filter/food"> Food and Drick </Link> </li>
            </ul>
        </div>
    )
}

export default Categorias;