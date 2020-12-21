import '../../estilos/cardCont.scss';
import Card from './Card';
import libro01 from '../../assets/libros/libro-01.jpg';
import libro02 from '../../assets/libros/libro-02.jpg';
import libro03 from '../../assets/libros/libro-03.jpg';
import libro04 from '../../assets/libros/libro-04.jpg';
import libro05 from '../../assets/libros/libro-05.jpg';
import libro06 from '../../assets/libros/libro-06.jpg';
import { useEffect, useState } from 'react';

function CardCont() {

    const [publibro, setpublibro] = useState([]);

    const libro = [
        {   
            id: 1,
            categoria: "infantiles",
            titulo: "Cuentos de buenas noches para niñas rebeldes",
            autor: "Elena Favilli",
            precio: "ARS$3613.63",
            alt: "Portada Cuentos de buenas noches para niñas rebeldes",
            img: libro01
        },
        {
            id: 2,
            categoria: "infantiles",
            titulo: "El Ultimo Mago",
            autor: "Lisa Maxwell",
            precio: "ARS$1099.00",
            alt: "Portada El Ultimo Mago",
            img: libro02
        },
        {
            id: 3,
            categoria: "arte-fotografia",
            titulo: "El diseño de las cosas cotidianas",
            autor: "Don Norman",
            precio: "ARS$1674.00",
            alt: "Portada El diseño de las cosas cotidiana",
            img: libro03
        },
        {
            id: 4,
            categoria: "infantiles",
            titulo: "Fantastic Beasts and Where to Find Them",
            autor: "J.K. Rowling",
            precio: "ARS$1192.50",
            alt: "Portada Fantastic Beasts and Where to Find Them",
            img: libro04
        },
        {
            id: 5,
            categoria: "infantiles",
            titulo: "La Lección de August",
            autor: "R.J. Palacio",
            precio: "ARS$2103.60",
            alt: "Portada La Lección de August",
            img: libro05
        },
        {
            id: 6,
            categoria: "food",
            titulo: "Comida tipica Argentina Vegana",
            autor: "Las hermanas veganas",
            precio: "ARS$1350.00",
            alt: "Portada Comida tipica Argentina Vegana",
            img: libro06
        }
    ]

    const getLibros = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(libro)
        }, 2000)
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
                            imagen={libro.img}
                            autor={libro.autor} 
                            precio={libro.precio}
                            titulo={libro.titulo}
                            alt={libro.alt}/>
                    ))


                }
                    <div className="row">
                        <div className="botonA">
                        <a href="#"> Ver todos </a>
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
