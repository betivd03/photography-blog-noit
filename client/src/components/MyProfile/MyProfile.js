import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

import "./MyProfile.css";

import MyPhotoCard from "./MyPhotoCard";

import * as photosService from "../../services/photosService.js";

const MyProfile = () => {
    const [myPhotos, setMyPhotos] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        photosService.getMy(user._id)
            .then(result => {
                setMyPhotos(result);
            })
    }, []);

    return (
        <section id="my-profile-page">
            <div className="profile-info">
                <div className="profile-photo">
                    <img src="/images/profile-photo.jpg" alt="Profile" />
                </div>
                <div className="user-info">
                    <p>{user.username}</p>
                </div>
            </div>
            <hr />

            {myPhotos.length > 0
                ? (
                    <div className="my-photos">
                        {myPhotos.map(x => <MyPhotoCard key={x._id} photo={x} />)}
                    </div>
                )
                : (
                    <p>No Photos Yet!</p>
                )
            }
            
        </section>
    );
};

export default MyProfile;