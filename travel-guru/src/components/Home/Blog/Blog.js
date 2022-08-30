import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Blog = ({ data }) => {
    const { name, picture, guests, bedrooms, beds, baths, facilities, cancellation, rating, price, total } = data;
    // console.log(data);
    return (
        <div className='row m-0 gy-4'>
            <div className='col-12 col-md-12 col-lg-5'>
                <img className='w-100 h-100' src={picture} alt={name} />
            </div>
            <div className='d-flex flex-column align-items-start justify-content-between col-12 col-md-12 col-lg-7'>
                <h4 className='text-start mb-0'>{name}</h4>
                <div className='text-start w-100 my-2'>
                    <p className='d-flex align-items-center justify-content-between mb-0'>
                        <span><b>{guests}</b> Guests,</span>
                        <span><b>{bedrooms}</b> Bedrooms, </span>
                        <span><b>{beds}</b> Beds,</span>
                        <span><b>{baths}</b> Baths</span>
                    </p>
                    <p className='mb-0'>{facilities}</p>
                    <p className='mb-0'>{cancellation}</p>
                </div>
                <div className='w-100 d-flex align-items-center justify-content-between'>
                    <span className='d-flex align-items-center justify-content-start'>
                        <FontAwesomeIcon className='me-1 fs-6 text-warning' icon={faStar}></FontAwesomeIcon>
                        <b>{rating}</b>
                    </span>
                    <span><b>{price}</b>/Night</span>
                    <span><b>{total}</b> Total</span>
                </div>
            </div>
        </div>
    );
};

export default Blog;