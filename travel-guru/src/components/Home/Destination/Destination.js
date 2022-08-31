import React from 'react';

const Destination = ({ destination }) => {
    const { name, img, rank, description } = destination;
    return (
        <div className='row g-4 my-3 mx-0 p-0 shadow d-flex align-items-center justify-content-between'>
            <div className='col-12 col-md-4 m-0 p-0'>
                <img src={img} className='w-100 h-100' alt={name} />
            </div>
            <div className='col-12 col-md-8 text-start m-0 p-3'>
                <h3>{name}</h3>
                <p><b>#{rank}</b></p>
                <p style={{ textAlign: 'justify' }}>{description}</p>
            </div>
        </div>
    );
};

export default Destination;