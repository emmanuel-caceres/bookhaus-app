import { Redirect, withRouter } from 'react-router-dom';

function BotonResumen(bb) {
    const { history } = bb;

    return(
        <button className="botonResumen" onClick={() => history.push('/resumen')}>Añadir a la cesta</button>
    )
}

export default withRouter(BotonResumen);