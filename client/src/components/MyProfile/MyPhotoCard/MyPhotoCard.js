import { Link } from "react-router-dom";

import "./MyPhotoCard.css";

const MyPhotoCard = ({
    photo
}) => {
    return (
        <div className="my-photo-card">
            <h3>{photo.title}</h3>
            <div className="image">
                <img src={photo.imageUrl} alt={photo.title} />
            </div>
            <Link to={`/details/${photo._id}`} className="button-details">Details</Link>
        </div>
    );
};

export default MyPhotoCard;