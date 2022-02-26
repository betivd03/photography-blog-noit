import { Form, Button } from 'react-bootstrap';
import "./EditPhoto.css";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const AddPhoto = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext); 

    const { photoId } = useParams();

    const [photo, setPhoto] = useState([]);

    const [error, setError] = useState([]);

    useEffect(() => {
        photosService.getOne(photoId)
            .then(res => {
                setPhoto(res);
            })
    }, []);

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, category, description, location } = Object.fromEntries(formData);

        if (title === '' || category === '' || description === '' || location === '') {
            return setError('All fields are required!');
        } else if (title.length < 3) {
            return setError('Title must be at least 3 characters long!');
        } else if (category.length < 3) {
            return setError('Category must be at least 3 characters long!');
        } else if (description.length < 3) {
            return setError('Description must be at least 3 characters long!');
        } else if (location.length < 3) {
            return setError('Location must be at least 3 characters long!');
        }

        photosService.edit({
            title,
            category,
            description,
            location
        }, photoId, user.accessToken)
            .then(() => {
                navigate(`/details/${photoId}`);
            });
    };

    return (
        <div className="edit-photo-div">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}

            <Form className="w-50 edit-photo-form" method="POST" onSubmit={onEditSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Title</Form.Label>
                    <Form.Control type="text" id="title" name="title" placeholder="Enter title" defaultValue={photo.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Category</Form.Label>
                    <Form.Control type="text" id="category" name="category" placeholder="Enter category" defaultValue={photo.category} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Description</Form.Label>
                    <Form.Control type="text" id="description" name="description" placeholder="Enter description" defaultValue={photo.description} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Location</Form.Label>
                    <Form.Control type="text" id="location" name="location" placeholder="Enter location" defaultValue={photo.location} />
                </Form.Group>

                <Form.Group className="position-relative mb-3">
                    <Form.Label className="label-style">File</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="file"
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="outline-light" type="submit">
                    Edit
                </Button>
            </Form>
        </div>
    );
};

export default AddPhoto;