import { Form, Button } from 'react-bootstrap';
import "./AddPhoto.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const AddPhoto = () => {

    const { user } = useContext(AuthContext); 
    
    const navigate = useNavigate();

    const [error, setError] = useState([]);

    const [image, setImage] = useState([]);
    
    const onAddSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, category, description, location } = Object.fromEntries(formData);
        
        if (title === '' || category === '' || description === '' || location === '') {
            setError('All fields are required!');
            return;
        } else if (title.length < 6) {
            setError('Title must be at least 6 characters long!');
            return;
        } else if (category.length < 6) {
            setError('Category must be at least 6 characters long!');
            return;
        } else if (description.length < 10) {
            setError('Description must be at least 10 characters long!');
            return;
        } else if (location.length < 3) {
            setError('Location must be at least 3 characters long!');
            return;
        }

        formData.append("file", image);
        formData.append("upload_preset", "photography-blog");
        formData.append("cloud_name", "betimb");

        fetch("https://api.cloudinary.com/v1_1/betimb/image/upload", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            photosService.create({
                title,
                category,
                description,
                location,
                imageUrl: data.url
            }, user.token, user._id)
                .then(() => {
                    navigate('/my-profile');
                });
        })
        .catch(err => {
            navigate('/error');
        });
    };

    return (
        <div className="add-photo-div">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}

            <Form className="w-50 add-photo-form" method="POST" onSubmit={onAddSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Category</Form.Label>
                    <Form.Control type="text" name="category" placeholder="Enter category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Description</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Location</Form.Label>
                    <Form.Control type="text" name="location" placeholder="Enter location" />
                </Form.Group>

                <Form.Group className="position-relative mb-3">
                    <Form.Label className="label-style">File</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="outline-light" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddPhoto;