const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyA_-a67Pqbn9dmy8oyBgb63m-eNIQQ5FvI",
    authDomain: "bookhaus-b0d5e.firebaseapp.com",
    projectId: "bookhaus-b0d5e"
});
var db = firebase.firestore();
var productos =[
    {   
        "id": 0,
        "categoria": "infantiles",
        "titulo": "Cuentos de buenas noches para niñas rebeldes",
        "autor": "Elena Favilli",
        "idioma": "Español",
        "dimensiones": "145 x 208 x 48mm - 658g",
        "publicacion": "30 Apr 2018",
        "precio": 3613.63,
        "editorial": "V&R Ediciones",
        "alt": "Portada Cuentos de buenas noches para niñas rebeldes",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-01.jpg?alt=media&token=9e8b3aa7-7c6c-41a9-8a89-dd04dd8414f0",
        "ruta": "/category/0",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 1,
        "categoria": "infantiles",
        "titulo": "El Ultimo Mago",
        "autor": "Lisa Maxwell",
        "idioma": "Español",
        "dimensiones": "145 x 208 x 48mm - 658g",
        "publicacion": "30 Apr 2018",
        "precio": 1099.50,
        "editorial": " V&R Edicione",
        "alt": "Portada El Ultimo Mago",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-02.jpg?alt=media&token=48131303-5b02-48ad-9944-f9bfc2732c88",
        "ruta": "/category/1",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 2,
        "categoria": "arte-fotografia",
        "titulo": "El diseño de las cosas cotidianas",
        "autor": "Don Norman",
        "idioma": "Español",
        "dimensiones": "145 x 208 x 48mm - 658g",
        "publicacion": "30 Apr 2018",
        "precio": "1674.40",
        "editorial": " V&R Edicione",
        "alt": "Portada El diseño de las cosas cotidiana",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-03.jpg?alt=media&token=a211f605-c5b1-49c5-bed8-af770ac02077",
        "ruta": "/category/2",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 3,
        "categoria": "infantiles",
        "titulo": "Fantastic Beasts and Where to Find Them",
        "autor": "J.K. Rowling",
        "idioma": "Español",
        "dimensiones": "145 x 208 x 48mm - 658g",
        "publicacion": "30 Apr 2018",
        "precio": 1192.50,
        "editorial": " V&R Edicione",
        "alt": "Portada Fantastic Beasts and Where to Find Them",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-04.jpg?alt=media&token=e9f2e409-bdca-435a-bed8-b15fa8425ca9",
        "ruta": "/category/3",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 4,
        "categoria": "infantiles",
        "titulo": "La Lección de August",
        "autor": "R.J. Palacio",
        "idioma": "Español",
        "dimensiones": "145 x 208 x 48mm - 658g",
        "publicacion": "30 Apr 2018",
        "precio": 2103.60,
        "editorial": " V&R Edicione",
        "alt": "Portada La Lección de August",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-05.jpg?alt=media&token=87a9fa00-883c-46da-9a69-6db93face151",
        "ruta": "/category/4",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 5,
        "categoria": "food",
        "titulo": "Comida tipica Argentina Vegana",
        "autor": "Las hermanas veganas",
        "idioma": "Español",
        "dimensiones": "145 x 208 x 48mm - 658g",
        "publicacion": "30 Apr 2018",
        "precio": 1350.10,
        "editorial": " V&R Edicione",
        "alt": "Portada Comida tipica Argentina Vegana",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-06.jpg?alt=media&token=90011df0-7adf-4e5b-8733-16e81aa7fd8b",
        "ruta": "/category/5",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 6,
        "categoria": "food",
        "titulo": "Cocina Vegana",
        "autor": " Brandon Bender",
        "idioma": "Español",
        "dimensiones": "160 x 220mm | 405g",
        "publicacion": "24 Apr 2018",
        "precio": 2616.00,
        "editorial": "Diversa Ediciones",
        "alt": "Portada Cocina Vegana",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-07.jpg?alt=media&token=b5e42332-c74e-414a-bc27-1e6eccbcaa1a",
        "ruta": "/category/6",
        "cant": 1,
        "destacado": false,
        "resenia": `¿Es posible hacer una tortilla de patatas sin huevo?, ¿o unas albóndigas usando lentejas en lugar de carne? Sin duda la respuesta es sí. Cocinar sin ingredientes de origen animal es mucho más fácil de lo que podría parecer, y las recetas de este libro son una buena muestra de que se puede comer de forma vegana, sana y variada cada día.Brandon Bender y Kate Estivill, autores de la web Salud Vegana, descubrieron un mundo enorme y desconocido de ingredientes que nunca habían probado cuando se hicieron veganos, y fruto de su pasión porcompartir lo fácil que es comer vegano en casa surge este libro. En él tienen cabida desde galletas o batidos para los más pequeños, hasta platos con influencias orientales y británicas, pasando por otros más tradicionales. En total, más de 50 recetas fáciles, inspiradoras e imprescindibles para disfrutar del veganismo en familia.`
    },
    {
        "id": 7,
        "categoria": "Infantiles",
        "titulo": "I'll Be There For You",
        "autor": "Kelsey Miller",
        "idioma": "Ingles",
        "dimensiones": "129 x 198 x 24mm | 280g",
        "publicacion": "17 Oct 2019",
        "precio": 1430.10,
        "editorial": "HQ",
        "alt": "Portada I'll Be There For You",
        "img": "https://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-08.jpg?alt=media&token=21785ec7-8fe9-4877-980a-a08d3b3046cd",
        "ruta": "/category/7",
        "cant": 1,
        "destacado": false,
        "resenia": "En la Nueva York moderna, la magia está extinta. Las pocas personas que tienen algo de afinidad con ella -los Mageus- viven en las sombras. Cualquier Mageus que ingrese en Manhattan queda atrapado por la Brecha, una barrera de energía oscura que los confina. Cruzar la Brecha implica perder sus poderes y, casi inevitablemente, sus vidas.Estrella es una ladrona muy talentosa, y entrenada para robar artefactos mágicos de la Orden, los creadores de la Brecha. Con su habilidad innata para manipular el tiempo, ella puede saltar al pasado para conseguir esos artefactos antes de que la Orden lo note."
    },
    {
        "id": 8,
        "categoria": "arte-fotografia",
        "titulo": "The Polaroid Book",
        "autor": "Barbara Hitchcock ",
        "idioma": "Ingles",
        "dimensiones": "140 x 195 x 43,18mm | 1.132g",
        "publicacion": "27 Nov 2019",
        "precio": 2765.99,
        "editorial": "Taschen GmbH",
        "alt": "Portada The Polaroid Book",
        "img": "hhttps://firebasestorage.googleapis.com/v0/b/bookhaus-b0d5e.appspot.com/o/libro-09.jpg?alt=media&token=af76ecb0-6bd5-4f7a-8f75-ebe446718c98",
        "ruta": "/category/8",
        "cant": 1,
        "destacado": false,
        "resenia": "La colección de fotografías de Polaroid Corporation es la mayor cartera de imágenes Polaroid del mundo. Iniciada por el fundador de Polaroid, Edwin Land y el fotógrafo Ansel Adams, la colección ahora incluye unas 23.000 imágenes de cientos de fotógrafos de todo el mundo, incluidas piezas de artistas como David Hockney, Andy Warhol y Jeanloup Sieff. rindiendo homenaje a un medio que sigue desafiando la era digital. Como un paquete de película Polaroid de gran tamaño, esta colección selecciona obras de luminarias y desconocidos por igual, celebrando las posibilidades ilimitadas que se desarrollan dentro de los bordes blancos de la fotografía instantánea original."
    },
]
productos.forEach((obj) => {
    db.collection("productos").add({
        id: obj.id,
        categoria: obj.categoria,
        titulo: obj.titulo,
        autor: obj.autor,
        idioma: obj.idioma,
        dimensiones: obj.dimensiones,
        publicacion: obj.publicacion,
        precio: obj.precio,
        editorial: obj.editorial,
        alt: obj.alt,
        img: obj.img,
        ruta: obj.ruta,
        cant: obj.cant,
        destacado: obj.destacado,
        resenia: obj.resenia


    }).then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar un documento: ", error);
    });
});

// se corre con node nombre-delscript.js