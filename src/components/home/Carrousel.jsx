import Carousel from '../../../node_modules/bootstrap/js/dist/carousel';
import paisaje from '../../assets/paisaje.jpg';

function Carrousel () {
    return (
        <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src={paisaje} alt="First slide" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={paisaje} alt="Third slide" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={paisaje} alt="Third slide" />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

export default Carrousel;

