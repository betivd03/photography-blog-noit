import { Carousel } from 'react-bootstrap';
import "./Home.css";

import { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem.js";

import * as photosService from "../../services/photosService.js";

const Home = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getLatest()
            .then(result => setPhotos(result));
    }, []);

    return (
        <Carousel fade className="carousel h-100">
            
        {photos.length > 0
            ? (
                <>
                    {photos.map(x => <CarouselItem key={x._id} photo={x} />)}
                </>
            )
            : (
                <p>No Photos Yet!</p>
            )
        }
            
        </Carousel>
    );
};

export default Home;