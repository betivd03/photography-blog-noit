import { Link } from "react-router-dom";

import "./PhotoPost.css";

const PhotoPost = ({
    post
}) => {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <div className="image">
                <img src={post.imageUrl} alt={post.title} />
            </div>
            <Link to={`/details/${post._id}`} className="button-details">Details</Link>
        </div>
    );
};

export default PhotoPost;