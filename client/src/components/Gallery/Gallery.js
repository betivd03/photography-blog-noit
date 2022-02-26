import "./Gallery.css";

import PhotoPost from "./PhotoPost";

const Gallery = () => {
    return (
        <section id="gallery-page">
            <PhotoPost key="1"/>
            <PhotoPost key="2"/>
            <PhotoPost key="3"/>
        </section>
    );
};

export default Gallery;