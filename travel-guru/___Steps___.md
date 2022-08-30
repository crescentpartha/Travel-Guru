Table of Contents
-

- [Travel-Guru](#travel-guru)
  - [Basic Project Setup](#basic-project-setup)
    - [Project Setup 01 (Basic Setup)](#project-setup-01-basic-setup)
    - [Project Setup 02 (Image - Icons - JSON data)](#project-setup-02-image---icons---json-data)
    - [Project Setup 03 (create Routes)](#project-setup-03-create-routes)
    - [Project Setup 04 (firebase config)](#project-setup-04-firebase-config)
    - [Project Setup 05 (firebase Auth)](#project-setup-05-firebase-auth)
    - [Project Setup 06 (Advance Setup)](#project-setup-06-advance-setup)
    - [Project Setup 07 (Deploy or Hosting)](#project-setup-07-deploy-or-hosting)
  - [Opacity control for background Image](#opacity-control-for-background-image)
  - [Dynamically > Conditional Rendering for Header component](#dynamically--conditional-rendering-for-header-component)
  - [Manually > Conditional Rendering for Header component](#manually--conditional-rendering-for-header-component)

# Travel-Guru

## Basic Project Setup

### Project Setup 01 (Basic Setup)

- ___Create React App___
- ___Install & Setup___ React Router
  - Wrap `<App />` component by using `<BrowserRouter>` in ___src/index.js___ file
  - Create basic ___Components___ such as Home, Header, Login, NotFound
  - Maintain ___File-Structure___ or ___Folder-Structure___ in your App
  - Then, ___Add some Routes___ in `src/App.js` file
- Set `_redirects` file in ___public___ folder
- Create ___markdown___ file for documentation
  - Create `___Steps___.md` file inside the ___project___ folder
- Install ___React-Bootstrap___ and Add ___Bootstrap CDN Link___ inside the ___index.html___ file
- Add ___title___ and set ___favicon.ico___ in the ___index.html___ file
- ___CSS style___ added

### Project Setup 02 (Image - Icons - JSON data)

- ___images___ folder added inside the ___src___ folder
- Images ___resize & optimize___ for using
- Image ___hosting___ & use, Because ___folder URL will be broken___ all the times.
- Setup or create ___JSON data___ in the ___public___ folder 
- Icons uses from ___FontAwesomeIcons___, ___HeroIcons___, ___React-Icons___ etc.
- Install ___FontAwesomeIcons___ and use in your App

### Project Setup 03 (create Routes)

- Modify the ___Header___ component to make easy routing
  - ___Responsive Navber___ added from ___React-Bootstrap___
  - Responsive Header component and ___sticky top___
- Modify the ___Footer___ component
  - ___Dynamic Date___ added
- Modify the ___Not Found___ component
- Modify the ___Home___ component

### Project Setup 04 (firebase config)

- Create a ___Firebase project___ and ___Register___ my app
- Install the ___SDK___ and ___initialize Firebase___
  - ___Install & Setup___ Firebase
- Implement the ___Firebase Configuration___
- Adding Custom Environment Variables: (___Set Environment Variables___ for Firebase Config)

### Project Setup 05 (firebase Auth)

- ___Get Form data___ in 3 different ways:
  - ___State declare & onBlur EventHandler___
  - ___useRef hook___
  - ___event.target.email.value___
- Implement ___Email/Password___ authentication from ___firebase___ or ___react-firebase-hooks___
- Implement ___Additional Sign-in Providers___ from ___firebase___ or ___react-firebase-hooks___
- Implement ___SignOut___
- ___Verify Email___ and ___Profile update___
  - Display name and Async await

### Project Setup 06 (Advance Setup)

- ___Setup Dynamic Route___ and Access ___route params___
  - ___Reading URL Params___ (Steps): 
    - Setup: `route` - `parameter-&-click` - `getId`
    - Setup: `Nested Route` - `navigate` - `get InvoiceId`
- ___Navigate___ to single services ___according to id___
- Implement ___Protected Route___ or ___RequireAuth___
- Implement ___Authenticate Redirect___
  - Implement ___Redirect to SignIn___
- ___Fix___ the ___Redirect to SignIn___ when ___reload___
- ___Error Handling___
  - Related to login, accept terms & conditions, and Reset Password

---

- Create ___Custom Hooks___
- Create ___Active Link___
- ___Conditional Rendering___, ___Conditional CSS Class___ and ___Conditional disabled___
- Display Toast message using ___React-Toastify___
- ___Responsive Design___ by using Vanilla CSS (___Media-Query___), ___Bootstrap___, ___React-Bootstrap___, ___Tailwind___

### Project Setup 07 (Deploy or Hosting)

- ___Deploy___ or ___Hosting___ in Netlify & Firebase

## Opacity control for background Image

``` JavaScript
// Basic idea is to create a outer and inner div. 
// Header(outer div) will hold an image, while content(inner) 
//will have a opacity
const styles = {
    header: {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
}

<div style={styles.header}>
    <div style={styles.content}>
        Portfolio
    </div>
</div>
```

## Dynamically > Conditional Rendering for Header component

``` JavaScript
// In Header.js

import React, { useEffect, useState } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
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
```

## Manually > Conditional Rendering for Header component

``` JavaScript
// In Header.js

import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/logo-white.png';
import logo2 from '../../../images/logo-black.png';

const Header = () => {
    // const placeholderText = <div>
    //     <FontAwesomeIcon className='' icon={faMagnifyingGlass}></FontAwesomeIcon>
    //     <span>Search your Destination...</span>
    // </div>
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

    // setNavValue(true); // Infinite loop

    // Manually > Conditional Rendering for Header component
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
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5 btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                            :
                                            <>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5  btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
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
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5 btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
                                            </>
                                            :
                                            <>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#news">News</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#destination">Destination</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#blog">Blog</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(false)} className='mx-2 text-light' as={Link} to="home#contact">Contact</Nav.Link>
                                                <Nav.Link onClick={() => handleNavber(true)} className='mx-5 btn btn-warning text-dark' as={Link} to="/signIn">Login</Nav.Link>
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
```

