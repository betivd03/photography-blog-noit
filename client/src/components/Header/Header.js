import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./Header.css";

const Header = () => {

    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="/">
                    <img
                        src="/images/blog-logo.png"
                        width="300"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Photography Blog logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="nav-link" to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link className="nav-link" to="/login" as={Link}>Login</Nav.Link>
                        <Nav.Link className="nav-link" to="/register" as={Link}>Register</Nav.Link>
                        <Nav.Link className="nav-link" to="/add" as={Link}>Add Photo</Nav.Link>
                        <Nav.Link className="nav-link" to="/edit" as={Link}>Edit Photo</Nav.Link>
                        <Nav.Link className="nav-link" to="/details" as={Link}>Photo Details</Nav.Link>
                        <Nav.Link className="nav-link" href="#" disabled>Welcome, user</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;