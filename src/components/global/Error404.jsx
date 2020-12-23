import './../../estilos/error404.scss';
import {Link} from 'react-router-dom';

function Error404 () {
    return(
        <div className="container error404">
            <div className="row">
                <div className="col-12">
                    <h2>Error 404</h2>
                    <Link to="/">Volver al Inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404;