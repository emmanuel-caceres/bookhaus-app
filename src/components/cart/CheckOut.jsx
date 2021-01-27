import './../../estilos/checkout.scss';

import { useContext, useState } from "react";
import { Store } from '../../Store';
import { getFirestore } from '../../firebase';
import {Link} from 'react-router-dom';

import firebase from 'firebase/app';

function CheckOut() {

    const [data, setData] = useContext(Store);
    const db = getFirestore();
    const [venta, setventa] = useState(false);

    const [usuario, setusuario] = useState({
        nombre: '',
        email: '',
        tarjeta: '',
        vencimiento: '',
        codseg: '',
    });

    const [idCompra, setidCompra] = useState('');

    const handleChangeInput = (e) => {
        setusuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const pedido = {
        user: usuario,
        items: data.productos,
        precioTotal: data.precioTotal,
        data: firebase.firestore.Timestamp.fromDate(new Date()),
    }


    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('pedido').add(pedido)
            .then(({ id }) => {
                setventa(true);
                setidCompra(id);
                setData({
                    productos: [],
                    cantidad: 0,
                    precioTotal: 0,
                 });
            })
            .catch(e => console.log(e));
    }


    return (
        <div>

            {
                !venta ?
                    <div className="container">
                        <div className="row">
                            <h2 className="col-12 text-center">Los libros casi son Tuyos</h2>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <form className="col-6 checkout" onSubmit={handleSubmitForm}>
                                <div className="contInput">

                                    <h4>Completa tus Datos</h4>

                                    <div>
                                        <label htmlFor="name">Nombre:</label>
                                        <input type="text" value={usuario.nombre} onChange={handleChangeInput} name="nombre" />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Mail:</label>
                                        <input type="email" value={usuario.email} onChange={handleChangeInput} name="email" />
                                    </div>

                                    <div>
                                        <label htmlFor="tarjeta">Tarjeta:</label>
                                        <input type="number" value={usuario.tarjeta} onChange={handleChangeInput} name="tarjeta" />
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="vencimiento">Fecha de vencimiento</label>
                                            <input type="text" value={usuario.vencimiento} onChange={handleChangeInput} name="vencimiento" />
                                        </div>
                                        <div>
                                            <label htmlFor="codseg">Código Seguridad</label>
                                            <input type="password" value={usuario.codseg} onChange={handleChangeInput} name="codseg" />
                                        </div>
                                    </div>

                                </div>

                                <button className="botonPagar">Pagar</button>

                            </form>
                        </div>
                    </div> :

                    <div className="container">
                        <div className="row">
                            <div className="col-12 ventaTerminada">
                                <p>Tu Pago se realizó con Exito</p>
                                <p>El código de seguimiento es {idCompra}</p>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-12 botonA">
                        <Link to="/category">Volver la Tienda Online</Link>
                        </div>
                        </div>
                    </div>


            }
        </div>
    )

}

export default CheckOut;