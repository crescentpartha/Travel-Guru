import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
import app from '../../../images/app-store.png';
import google from '../../../images/google-play.png';
import payment from '../../../images/payment-method.png';


const Footer = () => {
    return (
        <div className='pt-5'>
            <div className='bg-secondary d-flex flex-wrap py-5 gap-5 align-items-center justify-content-around'>
                <div className='text-start'>
                    <img src={logo} width={320} height={80} alt="" />
                    <div className='mt-4'>
                        <p className='d-flex align-items-center'>
                            <FontAwesomeIcon className='m-1 fs-4' icon={faLocationDot}></FontAwesomeIcon>
                            <span className='ms-2'>Level-5, Gulshan-2, circle, Dhaka</span>
                        </p>
                        <p className='d-flex align-items-center'>
                            <FontAwesomeIcon className='m-1 fs-4' icon={faEnvelope}></FontAwesomeIcon>
                            <span className='ms-2'>Official: trip@travel-guru.com</span>
                        </p>
                        <p className='d-flex align-items-center'>
                            <FontAwesomeIcon className='m-1 fs-4' icon={faPhone}></FontAwesomeIcon>
                            <span className='ms-2'>Helpline: 01312234323</span>
                        </p>
                        <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <img src={app} alt="" />
                        <img src={google} alt="" />
                    </div>
                </div>
                <div className='text-start'>
                    <h2 className='text-uppercase'>Useful Links</h2>
                    <div className='mt-4'>
                        <p>Blog</p>
                        <p>Success</p>
                        <p>About Us</p>
                        <p>Refund Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy &amp; App Privacy Policy</p>
                    </div>
                    <div className='d-flex gap-4 align-items-center justify-content-start'>
                        <FontAwesomeIcon className='fs-4' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fs-4' icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fs-4' icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fs-4' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='fs-4' icon={faLinkedin}></FontAwesomeIcon>
                    </div>
                </div>
                <div>
                    <img height={230} width={400} src={payment} alt="" />
                </div>
            </div>
            <div className='bg-info'>
                <p className='mb-0 p-4'>&copy;{new Date().getFullYear()} Travel-Guru LLC All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;