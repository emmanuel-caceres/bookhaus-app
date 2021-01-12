import '../../estilos/cardCont.scss';
import {Link} from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';
import libro from './Productos';


function CardCont() {

    const [publibro, setpublibro] = useState([]);

    const getLibros = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(libro)
        }, 500)
    })

    useEffect (() => {
        getLibros.then(rta => setpublibro(rta));
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
                            id={libro.id}
                            imagen={libro.img}
                            autor={libro.autor} 
                            precio={libro.precio}
                            titulo={libro.titulo}
                            alt={libro.alt}
                            ruta={libro.ruta}/>
                            
                    ))


                }
                    <div className="row">
                        <div className="botonA">
                        <Link to="/category">Ver Mas</Link>
                        </div>
                    </div>
                </> :
                <h2>Cargando Productos...</h2>
            }


        </div>
        </div>
    )
};

export default CardCont;
