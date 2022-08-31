import React from 'react';

const Travel = ({ travelNew }) => {
    const { name, title, img, description, paper } = travelNew;
    return (
        <div className='col-12 col-md-6 col-lg-4 shadow-sm px-2'>
            <img src={img} width='100%' alt={name} />
            <div className='text-start p-2'>
                <p className='fs-6 text-primary text-uppercase'>{name}</p>
                <h4 className='fs-4'>{title}</h4>
                <p style={{textAlign: 'justify'}}>{description.length > 250 ? description.slice(0, 250)+'...' : description}</p>
                <p className='text-uppercase'>{paper}</p>
            </div>
        </div>
    );
};

export default Travel;