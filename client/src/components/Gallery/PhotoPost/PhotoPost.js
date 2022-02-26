import { Link } from "react-router-dom";

import "./PhotoPost.css";

const PhotoPost = () => {
    return (
        <div className="post">
            <h3>Title</h3>
            <Link to={`/details/_id`}>Details</Link>
            <div className="creator">
                <img src="/images/profile-photo.jpg" alt="Profile" />
                <p>Owner</p>
            </div>
            <div className="photo">
                <img src="/images/ocean-photography.jpg" alt="Title" />
            </div>
        </div>
    );
};

export default PhotoPost;