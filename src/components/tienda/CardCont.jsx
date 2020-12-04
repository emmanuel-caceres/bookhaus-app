import '../../estilos/cardCont.scss';
import Card from './Card';
import libro01 from '../../assets/libros/libro-01.jpg';
import libro02 from '../../assets/libros/libro-02.jpg';


function CardCont() {
    return (
        <div className="container contenedorCards">
            <div className="row">
                <h2>Titulos de la semana</h2>
            </div>

            <div className="row">

            <Card 
                imagen={libro01} 
                autor="Elena Favilli" 
                precio="ARS$3613.63"
                titulo="Cuentos de buenas noches para niñas rebeldes"
                alt="Portada Cuentos de buenas noches para niñas rebeldes"/>

            <Card 
                imagen={libro02} 
                autor="Lisa Maxwell" 
                precio="ARS$1099.00"
                titulo="El Ultimo Mago"
                alt="Portada El Ultimo Mago"/>

            </div>

            <div className="row">
                <div className="botonA">
                <a href="#"> Ver todos </a>
                </div>
            </div>
        </div>
    )
};

export default CardCont;