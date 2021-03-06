import '../../estilos/cardCont.scss';
import Card from './Card';
import { useEffect, useState } from 'react';

import {getFirestore} from '../../firebase'


function CardCont() {

    const [publibro, setpublibro] = useState([]);

    const db = getFirestore();

    const getLibros = () => {
        db.collection('productos').get()
        .then(docs => {

           let arr = [];

            docs.forEach(doc => {

                arr.push(doc.data())
            })

            setpublibro(arr);
           
        })
        .catch(e => console.log(e));
    }

    useEffect (() => {
        getLibros();
    }, []);


    return (
        <div className="container contenedorCards">

            <div className="row">
            {
                publibro.length ?
                <>

                {
                    publibro.map((libro) => (
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

export default CardCont;
