import "./Gallery.css";

import { useState, useEffect } from "react";

import PhotoPost from "./PhotoPost";

import * as photosService from "../../services/photosService.js";

const Gallery = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        photosService.getAll()
            .then(result => {
                setPosts(result);
            })
    }, []);

    return (
        <section id="gallery-page">

            {posts.length > 0 
                ? (
                    <div className="posts">
                        {posts.map(x => <PhotoPost key={x._id} post={x} />)}
                    </div>
                )
                : (
                    <p>No Photos Yet!</p>
                )
            }
            
        </section>
    );
};

export default Gallery;