import '../../estilos/cardCont.scss';
import {useParams} from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';

import {getFirestore} from '../../firebase'

function CategoryFilter() {

    const {fil} = useParams ();
    const [filtro, setfiltro] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if ( fil ) {
            db.collection('productos').where('categoria', '==', fil).get()
            .then(cont => {
                let arr = [];

                cont.forEach(libro => {
                    arr.push(libro.data());
                })

                setfiltro(arr);

            })
        }
    })

    return (
        <div className="container contenedorCards">

            <div className="row">
            {
                filtro.length ?
                <>
                {
                    filtro.map((libro) => (
                        <Card
                            key={libro.id}
                            id={libro.id}
                            imagen={libro.img}
                            autor={libro.autor} 
                            precio={libro.precio}
                            titulo={libro.titulo}
                            alt={libro.alt}
                            ruta={libro.ruta}/>
                            
                    ))
                }
                </> :
                <h2>Cargando Productos...</h2>
            }
        </div>
        </div>
    )
};

export default CategoryFilter;