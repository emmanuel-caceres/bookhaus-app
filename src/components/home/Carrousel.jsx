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
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={portada02} alt="Third slide" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={portada03} alt="Third slide" />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

export default Carrousel;

