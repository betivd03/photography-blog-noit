import { Form, Button } from 'react-bootstrap';
import "./Register.css";

const Register = () => {

    return (
        <div className="register-div">
            <Form className="w-50 register-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-style">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-style">Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" />
                </Form.Group>
                
                <Button variant="outline-light" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;