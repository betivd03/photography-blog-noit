import { Form, Button } from 'react-bootstrap';
import "./Login.css";

const Login = () => {

    return (
        <div className="login-div">
            <Form className="w-50 login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-style">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="outline-light" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;