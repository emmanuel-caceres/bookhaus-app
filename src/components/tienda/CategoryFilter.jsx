import '../../estilos/cardCont.scss';
import {Link, useParams} from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';
import libro from './Productos';


function CategoryFilter() {

    const {fil} = useParams ();

    const librosFiltrados = libro.filter(function (elem) {
            return (elem.categoria == fil)
    });
    

    return (
        <div className="container contenedorCards">

            <div className="row">
            {
                librosFiltrados.length ?
                <>
                {
                    librosFiltrados.map((libro) => (
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
                </> :
                <h2>Cargando Productos...</h2>
            }
        </div>
        </div>
    )
};

export default CategoryFilter;