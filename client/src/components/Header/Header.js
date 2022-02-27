import { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./Header.css";

import { AuthContext } from "../../contexts/AuthContext.js";

const Header = () => {

    const { user } = useContext(AuthContext);

    let userNav = (
        <>
            <Nav.Link className="nav-link" to="/logout" as={Link}>Logout</Nav.Link>
            <Nav.Link className="nav-link" to="/add" as={Link}>Add Photo</Nav.Link>
            <Nav.Link className="nav-link" to="/my-profile" as={Link}>My Profile</Nav.Link>
            <Nav.Link className="nav-link" href="#" disabled>Welcome, {user.username}</Nav.Link>
        </>
    );

    let guestNav = (
        <>
            <Nav.Link className="nav-link" to="/login" as={Link}>Login</Nav.Link>
            <Nav.Link className="nav-link" to="/register" as={Link}>Register</Nav.Link>
        </>
    );
    
    return (
        <Navbar className="navbar" expand="lg">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="/">
                    <img
                        src="/images/photography_blog_logo.png"
                        width="200"
                        height="90"
                        className="d-inline-block align-top blog-logo"
                        alt="Photography Blog logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navigation"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="nav-link" to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link className="nav-link" to="/gallery" as={Link}>Gallery</Nav.Link>
                        <Nav.Link className="nav-link" to="/about" as={Link}>About</Nav.Link>
                        {user.username
                            ? userNav
                            : guestNav}                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;