import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function UncontrolledExample() {
  return (
    <Carousel id='Corousal'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1658744889327_movie_web.jpg"
          alt="First slide"
        />
        <Carousel.Caption>     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1659099533221_homepageweb.jpg"
          alt="Second slide"/>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1659592071525_rakshabandh.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;