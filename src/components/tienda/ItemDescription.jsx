import './../../estilos/itemDescription.scss';
import {useHistory} from 'react-router-dom'
import { useState, useContext } from 'react';
import { Store } from './../../Store';

function ItemDescription({ item }) {

    const history = useHistory();
    
    const [data, setData] = useContext(Store);

    const [contador, setContador] = useState(1);

    if (contador < 1){
        setContador(1);
     };

     const agregar = () => {
         setData({
             ...data,
             cantidad: data.cantidad + contador,
             productos: [...data.productos, item],
         })
         history.push('/resumen')
     };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 descriptionImg">
                    <img src={item.img} alt={item.alt} />
                    <p className="mt-4">{item.resenia}</p>
                </div>

                <div className="col-12 col-md-6">
                    <h3 className="mt-5"> {item.titulo} </h3>
                    <hr />
                    <p> <strong>Idioma:</strong> {item.idioma}</p>
                    <p> <strong>Autor:</strong> {item.autor}</p>
                    <p> <strong>Dimensiones:</strong> {item.dimensiones}</p>
                    <p> <strong>Fecha de Publicación:</strong> {item.publicacion} </p>
                    <p> <strong> Editorial: </strong> {item.editorial} </p>
                    <hr />

                    <div className="salida">
                        <h3> {item.precio} </h3>
                        <div className="cardContador">
                            <button className="negative" onClick={() => setContador(contador - 1)}>-</button>
                            <p>{contador}</p>
                            <button className="positive" onClick={() => setContador(contador + 1)}>+</button>
                        </div>
                        <hr />
                        <p><strong>Tiempo de envio:</strong> 13-20 dias habiles</p>
                        <button className="botonResumen" onClick={agregar}>Agregar</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ItemDescription;