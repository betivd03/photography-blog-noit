import "./PhotoDetails.css";

import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const PhotoDetails = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    const { user } = useContext(AuthContext);

    const { photoId } = useParams();

    const [likes, setLikes] = useState(0);

    const [likers, setLikers] = useState([]);

    useEffect(() => {
        photosService.getOne(photoId)
            .then(result => {
                setDetails(result);
                setLikers(result.likers);
                setLikes(result.likers.length);
            });
        }, []);

    const [isLiked, setIsLiked] = useState(false);
    
    useEffect(() => {
        photosService.getLikes(photoId, user._id)
            .then(result => {
                setIsLiked(result);
            })
    });

    const onDeleteClickHandler = (e) => {
        e.preventDefault();

        photosService.del(photoId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    };

    const onLikeClickHandler = (e) => {
        e.preventDefault();

        photosService.likePhoto(photoId, user._id, user.accessToken)
            .then(() => {
                navigate(`/details/${photoId}`);
            });
    };

    let ownerButtons = (
        <div className="owner">
            <Link to={`/details/${photoId}/edit`}>Edit</Link>
            <a href="#" onClick={onDeleteClickHandler}>Delete</a>
        </div>
    );

    let userButtons = (
        <div className="user">
            {isLiked
                ? <span>Liked</span>
                : <a href="#" onClick={onLikeClickHandler}>Like</a>}
        </div>
    );

    return (
        <section id="photo-details-page">
            <div className="details">
                <div className="photo-details">
                    <ul>
                        <li>Title: <span>{details.title}</span></li>
                        <li>Category: <span>{details.category}</span></li>
                        <li>Description: <span>{details.description}</span></li>
                        <li>Location: <span>{details.location}</span></li>
                        <li>Created By: <span>{details.authorUsername}</span></li>
                    </ul>

                    <div className="buttons">
                        {user._id && (user._id === details.authorId
                            ? ownerButtons
                            : userButtons
                        )}

                        
                        <div className="likes">
                            {likes > 0 
                                ? <span>Liked by: {likers}</span>
                                : <span>No one like this picture!</span>
                            }
                        </div>
                    </div>
                    
                    
                </div>
                <div className="photo-image">
                    <img src={details.imageUrl} alt={details.title} />
                </div>
            </div>
        </section>
    );
};

export default PhotoDetails;