import { Carousel } from 'react-bootstrap';
import "./Home.css";

const Home = () => {

    return (
        <Carousel fade className="carousel h-100">
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block carousel-img h-100"
                    src="/images/photography-blog-logo.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className="w-100 carousel-item">
                <img
                    className="d-block carousel-img h-100"
                    src="/images/ocean.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="w-100 carousel-item">
                <img
                    className="d-block carousel-img h-100"
                    src="/images/ocean-photography.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;