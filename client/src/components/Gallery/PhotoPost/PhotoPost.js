import { Link } from "react-router-dom";

import "./PhotoPost.css";

const PhotoPost = ({
    post
}) => {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <Link to={`/details/${post._id}`}>Details</Link>
            <div className="photo">
                <img src={post.imageUrl} alt={post.title} />
            </div>
        </div>
    );
};

export default PhotoPost;