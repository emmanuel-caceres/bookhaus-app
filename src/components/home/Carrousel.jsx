import Carousel from 'react-bootstrap/Carousel';
import paisaje from '../../assets/paisaje.jpg';
import '../../estilos/carrousel.scss';

function Carrousel () {
    return (
        <Carousel className="container carousel-size">
  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={paisaje} alt="First slide" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={paisaje} alt="Third slide" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 carousel-img-size" src={paisaje} alt="Third slide" />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

export default Carrousel;

