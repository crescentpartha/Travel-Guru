import React from 'react';

const Blog = ({ data }) => {
    const { name, picture, guests, bedrooms, beds, baths, facilities, cancellation, rating, price, total } = data;
    // console.log(data);
    return (
        <div className='row m-0 mb-5 gb-5'>
            <div className='col-5'>
                <img className='w-100' src={picture} alt={name} />
            </div>
            <div className='d-flex flex-column align-items-start justify-content-between col-7 '>
                <h4 className='text-start mb-0'>{name}</h4>
                <div className='text-start my-2'>
                    <p className='d-flex align-items-center justify-content-between mb-0'><span>{guests} guests</span><span>{bedrooms} bedrooms</span><span>{beds}</span> beds<span>{baths}</span> baths</p>
                    <p className='mb-0'>{facilities}</p>
                    <p className='mb-0'>{cancellation}</p>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <span>{rating}</span>
                    <span>{price}/night</span>
                    <span>{total} total</span>
                </div>
            </div>
        </div>
    );
};

export default Blog;