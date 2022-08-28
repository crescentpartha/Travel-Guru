import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    // const placeholderText = <div>
    //     <FontAwesomeIcon className='' icon={faMagnifyingGlass}></FontAwesomeIcon>
    //     <span>Search your Destination...</span>
    // </div>
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container className='text-primary'>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" width={150} height={50} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='' id="responsive-navbar-nav">
                        <Nav className="mx-auto my-2">
                            <Form className="">
                                <Form.Control
                                    style={{width: '250px'}}
                                    type="search"
                                    placeholder="Search your Destination..."
                                    // placeholder={placeholderText}
                                    // placeholder="&#xf0e0; Search"
                                    className="mx-auto"
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav>
                        <Nav className=''>
                            <Nav.Link className='mx-2' as={Link} to="home#news">News</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="home#destination">Destination</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="home#blog">Blog</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="home#contact">Contact</Nav.Link>
                            <Nav.Link className='mx-5' as={Link} to="/signIn">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;