import Carousel from 'react-bootstrap/Carousel';
import portada01 from '../../assets/portada-01.jpg';
import portada02 from '../../assets/portada-02.jpg';
import portada03 from '../../assets/portada-03.jpg';
import '../../estilos/carrousel.scss';

function Carrousel () {
    return (
        <Carousel className="container carousel-size">
  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={portada01} alt="First slide" />
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={portada02} alt="Third slide" />
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={portada03} alt="Third slide" />
  </Carousel.Item>
</Carousel>
    )
};

export default Carrousel;

