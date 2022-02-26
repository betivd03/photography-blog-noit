import { Form, Button } from 'react-bootstrap';
import "./EditPhoto.css";

const AddPhoto = () => {

    return (
        <div className="edit-photo-div">
            <Form className="w-50 edit-photo-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location" />
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