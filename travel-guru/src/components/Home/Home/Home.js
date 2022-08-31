import React from 'react';
import '../Home/Home.css';
import { Button, Form } from 'react-bootstrap';
import backImage from '../../../images/Rectangle1.png'
import Blogs from '../Blogs/Blogs';
import Sliders from '../Sliders/Sliders';
import Travels from '../Travels/Travels';
// import Header from '../../SharedPages/Header/Header';

const Home = () => {
    const styles = {
        header: {
            backgroundImage: `url(${backImage})`,
            // height: '100vh',
            // height: '600px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },

        content: {
            padding: '50px 0',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }
    };
    // const overflowScroll = {
    //     overflowY: 'scroll',
    //     position: 'relative'
    // };

    const inputColor = {
        fontWeight: '700',
        border: 'none',
        backgroundColor: 'lightgray',
        opacity: '60%'
    }

    const handleFormSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <div style={styles.header} className='position-absolute top-0 start-0'>
                <div style={styles.content}>
                    {/* <Header></Header> */}
                    <div className="d-flex flex-column flex-md-row flex-sm-column flex-lg-row align-items-center justify-content-between p-5 gap-5">
                        <div className='mx-5 w-75 text-light'>
                            <h1 className='fs-1 fw-bold text-start'>COX'S BAZAR</h1>
                            <p className='text-start text-wrap'>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Cox's Bazar lies on a coastal plain in the southeastern corner of Bangladesh. From above, the plain appears to bulge out into the Bay of Bengal.</p>
                        </div>
                        <div /* style={overflowScroll} */ style={{ backgroundColor: 'white' }} className='mx-5 mx-md-0 w-75 w-sm-75 w-md-100 text-start rounded'>
                            <Form onSubmit={handleFormSubmit} className='container p-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control type="address" style={inputColor} placeholder="Dhaka" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="address" style={inputColor} placeholder="Cox's Bazar" required />
                                </Form.Group>

                                <div className='row'>
                                    <Form.Group className="col mb-3 w-100" controlId="formBasicFrom">
                                        <Form.Label>From</Form.Label>
                                        <Form.Control style={inputColor} type="date" required />
                                    </Form.Group>

                                    <Form.Group className="col mb-3 w-100" controlId="formBasicTo">
                                        <Form.Label>To</Form.Label>
                                        <Form.Control style={inputColor} type="date" required />
                                    </Form.Group>
                                </div>

                                <Button className='w-100 text-dark fw-semibold' variant="warning" type="submit">
                                    Start Booking
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-div'>

            </div>
            <div className='mt-5 pt-5'>
                <Travels></Travels>
            </div>
            <Blogs></Blogs>
            <div className='my-5' id='contact'>
                <Sliders></Sliders>
            </div>
        </div>
    );
};

export default Home;