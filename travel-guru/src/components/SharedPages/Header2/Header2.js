import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-black.png';

const Header2 = () => {
    const searchFieldStyle = {
        width: '250px', 
        color: 'black',
        border: '1px solid white', 
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="dark">
                <Container className=''>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" width={150} height={50} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='' id="responsive-navbar-nav">
                        <Nav className="mx-auto my-2">
                            <Form className="">
                                <Form.Control
                                    style={searchFieldStyle}
                                    type="search"
                                    placeholder="Search your Destination..."
                                    // placeholder={placeholderText}
                                    // placeholder="&#xf0e0; Search"
                                    className="mx-auto "
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav>
                        <Nav className='fw-semibold'>
                            <Nav.Link className='mx-2 text-dark' as={Link} to="home#news">News</Nav.Link>
                            <Nav.Link className='mx-2 text-dark' as={Link} to="home#destination">Destination</Nav.Link>
                            <Nav.Link className='mx-2 text-dark' as={Link} to="home#blog">Blog</Nav.Link>
                            <Nav.Link className='mx-2 text-dark' as={Link} to="home#contact">Contact</Nav.Link>
                            <Nav.Link className='mx-5 text-dark' as={Link} to="/signIn">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header2;