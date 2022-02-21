import { Link } from "react-router-dom";

import "./PhotoDetails.css";

const PhotoDetails = () => {
    return (
        <section id="photo-details-page">
            <div className="details">
                <div className="photo-details">
                    <ul>
                        <li>Title: <span>Title</span></li>
                        <li>Category: <span>Category</span></li>
                        <li>Description: <span>Description</span></li>
                        <li>Location: <span>Location</span></li>
                        <li>Created By: <span>User</span></li>
                    </ul>

                    <div className="buttons">
                        <div className="owner">
                            <Link to={`/details/photoId/edit`}>Edit</Link>
                            <a href="#">Delete</a>
                        </div>

                        <div className="user">
                            <span>Liked</span>
                            <a href="#">Like</a>
                        </div>
                        
                        <div className="likes">
                            <span>Liked by: people</span>
                            <span>No one like this picture!</span>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="photo-image">
                    <img src="/images/blog-logo.png" alt="Title" />
                </div>
            </div>
        </section>
    );
};

export default PhotoDetails;