import './../../estilos/nosotros.scss'
import {Link} from 'react-router-dom';

import { getFirestore } from '../../firebase';
import { useState } from 'react';
import firebase from 'firebase/app';

function Contacto () {

    const [consulto, setconsulto] = useState(false);
    const db = getFirestore();

    const [nuevaConsulta, setnuevaConsulta] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        data: firebase.firestore.Timestamp.fromDate(new Date()),
    })

    const handleChangeInput = (e) => {
        setnuevaConsulta({ ...nuevaConsulta, [e.target.name]: e.target.value });
    }

    const enviaConsulta = (e) => {
        e.preventDefault();

        db.collection('consultas').add(nuevaConsulta)
        .then(() => {
            setconsulto(true);
        })
        .catch(e => console.log(e));
    }

    return(
        <div>

            {

                !consulto ?

                <div className="container">
                    <div className="row">
                        <h1 className="col-12 mt-5 text-white text-center">Hace tu Consulta</h1>
                    </div>
                    <div className="row rowConsulta">
                        <div className="col-12 col-md-6">
                            <form onSubmit={enviaConsulta}>
                                <input type="text" value={nuevaConsulta.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />

                                <input type="email" value={nuevaConsulta.email} onChange={handleChangeInput} name="email" placeholder="email" />

                                <input type="number" value={nuevaConsulta.telefono} onChange={handleChangeInput} name="telefono" placeholder="Telefono" />

                                <textarea value={nuevaConsulta.mensaje} onChange={handleChangeInput} name="mensaje" placeholder="Mensaje" />

                                <button className="consultar">Enviar</button>


                            </form>
                        </div>
                    </div>
                 </div> :

                 <div className="container consultaEnviada">
                     <div className="row">
                         <h2 className="col-12 text-white text-center">Consulta Enviada</h2>
                     </div>
                     <div className="row">
                        <Link to="/category">Volver la Tienda Online</Link>
                     </div>
                 </div>

            }
        </div>

    )
};

export default Contacto;