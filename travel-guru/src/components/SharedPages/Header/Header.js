import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-white.png';
import logo2 from '../../../images/logo-black.png';

const Header = () => {
    // const placeholderText = <div>
    //     <FontAwesomeIcon className='' icon={faMagnifyingGlass}></FontAwesomeIcon>
    //     <span>Search your Destination...</span>
    // </div>
    const [navValue, setNavValue] = useState(false);

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

    const handleNavber = value => {
        setNavValue(value);
    }

    return (
        <div>
            {
                navValue ?
                    <Navbar collapseOnSelect expand="lg" sticky='top' bg="none" variant="light">
                        <Container className='text-primary'>
                            <Navbar.Brand onClick={() => handleNavber(false)} as={Link} to="/home">
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
                                            // placeholder={placeholderText}
                                            // placeholder="&#xf0e0; Search"
                                            className="mx-auto "
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Nav>
                                <Nav className='fw-semibold'>
                                    {
                                        navValue ?
                                            <>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5 btn btn-warning text-light' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                            :
                                            <>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5  btn btn-warning text-light' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    :
                    <Navbar collapseOnSelect expand="lg" sticky='top' bg="none" variant="dark">
                        <Container className='text-primary'>
                            <Navbar.Brand onClick={() => handleNavber(false)} as={Link} to="/home">
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
                                            // placeholder={placeholderText}
                                            // placeholder="&#xf0e0; Search"
                                            className="mx-auto "
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Nav>
                                <Nav className='fw-semibold'>
                                    {
                                        navValue ?
                                            <>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-dark' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5 btn btn-warning text-light' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                            :
                                            <>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5 btn btn-warning text-light' as={Link} to="/signIn">Login</Nav.Link>
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