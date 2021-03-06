import { Form, Button } from 'react-bootstrap';
import "./Register.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as authService from "../../services/authService.js";

const Register = () => {

    const navigate = useNavigate();

    const { register } = useContext(AuthContext);

    const [error, setError] = useState([]);

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, username, password, rePassword } = Object.fromEntries(formData);

        if (email === '' || username === '' || password === '' || rePassword === '') {
            setError('All fields are required!');
            return;
        } else if (password !== rePassword) {
            setError('Passwords must match!');
            return;
        } else if (email.length < 5) {
            setError('Email must be at least 5 characters long!');
            return;
        } else if (username.length < 5) {
            setError('Username must be at least 5 characters long!');
            return;
        } else if (password.length < 5) {
            setError('Password must be at least 5 characters long!');
            return;
        } else if (rePassword.length < 5) {
            setError('Repeat password must be at least 5 characters long!');
            return;
        } 

        authService.register(email, username, password)
            .then(res => {
                register(res);
                navigate('/');
            })
            .catch(error => {
                setError(error);
            });
    };

    return (
        <div className="register-div">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}

            <Form className="w-50 register-form" method="POST" onSubmit={onRegisterSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Username</Form.Label>
                    <Form.Control type="username" name="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-style">Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-style">Repeat Password</Form.Label>
                    <Form.Control type="password" name="rePassword" placeholder="Repeat password" />
                </Form.Group>
                
                <Button variant="outline-light" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;