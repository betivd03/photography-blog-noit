import { Carousel } from 'react-bootstrap';
import "./Home.css";

const Home = () => {
    return (
        <Carousel fade className="carousel h-100">
            
            <Carousel.Item className="carousel-item">
                <div className="img-container">
                    <img
                        className="d-block carousel-img"
                        src="/images/ocean-photography.jpg"
                        alt="Ocean Photography"
                    />
                    <div className="overlay"></div>
                </div>
                <Carousel.Caption>
                    <h3>Welcome to Photography Blog!</h3>
                    <p>The best blog for sharing professional photos!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <div className="img-container">
                    <img
                        className="d-block carousel-img"
                        src="/images/wildlife-photography.jpg"
                        alt="Wildlife Photography"
                    />
                    <div className="overlay"></div>
                </div>
                <Carousel.Caption>
                    <h3>Get inspired by our photos!</h3>
                    <p>In our gallery you will find photos from different categories!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <div className="img-container">
                    <img
                        className="d-block carousel-img"
                        src="/images/city-photography.jpg"
                        alt="City Photography"
                    />
                    <div className="overlay"></div>
                </div>
                <Carousel.Caption>
                    <h3>Join our blog!</h3>
                    <p>Register and post your own professional photos!</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Home;