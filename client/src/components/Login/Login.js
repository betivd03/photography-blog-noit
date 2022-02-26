import { Form, Button } from 'react-bootstrap';
import "./Login.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as authService from "../../services/authService.js";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [error, setError] = useState([]);

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);
        
        if (email === '' || password === '') {
            return setError('All fields are required!');
        } else if (email.length < 5) {
            return setError('Email must be at least 5 characters long!');
        } else if (password.length < 5) {
            return setError('Password must be at least 5 characters long!');
        } 

        authService.login(email, password)
            .then(res => {
                login(res);
                navigate('/');
            })
            .catch(error => {
                setError(error);
                console.log(error);
            });
    };

    return (
        <div className="login-div">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}
                
            <Form className="w-50 login-form" method='POST' onSubmit={onLoginSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-style">Email address</Form.Label>
                    <Form.Control type="email"  id="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-style">Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="outline-light" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;