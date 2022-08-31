import React, { useEffect, useState } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../../images/logo-white.png';
import logo2 from '../../../images/logo-black.png';

const Header = () => {
    const [navValue, setNavValue] = useState(true);
    const location = useLocation();

    // Dynamically > Conditional Rendering for Header component
    useEffect( () => {
        // console.log(location);
        // console.log(location.pathname);
        if (location.pathname === '/home'){
            setNavValue(false);
        }
        else if (location.pathname === '/'){
            setNavValue(false);
        }
        else {
            setNavValue(true);
        }
    },[location]);

    const searchFieldStyle = {
        width: '250px',
        color: 'white',
        border: '1px solid gray',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    };
    const searchFieldStyle2 = {
        width: '250px',
        color: 'black',
        border: '1px solid lightgray',
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
    };

    return (
        <div>
            {
                navValue ?
                    <Navbar collapseOnSelect expand="lg" sticky='top' bg="none" variant="light">
                        <Container className='text-primary'>
                            <Navbar.Brand as={Link} to="/home">
                                {
                                    navValue ? <img src={logo2} alt="" width={150} height={50} />
                                        :
                                        <img src={logo} alt="" width={150} height={50} />}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className='' id="responsive-navbar-nav">
                                <Nav className="mx-auto my-2">
                                    <Form className="">
                                        <Form.Control
                                            style={searchFieldStyle2}
                                            type="search"
                                            placeholder="Search your Destination..."
                                            className="mx-auto "
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Nav>
                                <Nav className='fw-semibold'>
                                    {
                                        navValue ?
                                            <>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link className='mx-5 btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                            :
                                            <>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link className='mx-5  btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    :
                    <Navbar collapseOnSelect expand="lg" sticky='top' bg="none" variant="dark">
                        <Container className='text-primary'>
                            <Navbar.Brand as={Link} to="/home">
                                {
                                    navValue ? <img src={logo2} alt="" width={150} height={50} />
                                        :
                                        <img src={logo} alt="" width={150} height={50} />}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className='' id="responsive-navbar-nav">
                                <Nav className="mx-auto my-2">
                                    <Form className="">
                                        <Form.Control
                                            style={searchFieldStyle}
                                            type="search"
                                            placeholder="Search your Destination..."
                                            className="mx-auto "
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Nav>
                                <Nav className='fw-semibold'>
                                    {
                                        navValue ?
                                            <>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link className='mx-2 text-dark' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link className='mx-5 btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                            :
                                            <>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link className='mx-2 text-light' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link className='mx-5 btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            }
        </div>
    );
};

export default Header;