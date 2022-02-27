import { Carousel } from 'react-bootstrap';

const CarouselItem = ({
    photo
}) => {
    return (
        <Carousel.Item className="carousel-item">
            <div className="img-container">
                <img
                    className="d-block carousel-img"
                    src={photo.imageUrl}
                    alt={photo.title}
                />
                <div className="overlay"></div>
            </div>
            <Carousel.Caption>
                <h3>{photo.title}</h3>
                <p>{photo.location}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default CarouselItem;