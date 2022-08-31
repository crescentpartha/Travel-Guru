import React from 'react';
import Blog from '../Blog/Blog';
import Map from '../Map/Map';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            picture: 'https://i.ibb.co/mRJyVDC/Rectangle1.png',
            name: 'Light bright airy stylish apt & safe peaceful stay',
            guests: 5,
            bedrooms: 2,
            beds: 2,
            baths: 2,
            facilities: 'Wifi, Air conditioning, Kitchen',
            cancellation: 'Cancellation flexibility',
            star: 'https://i.ibb.co/GMFNnNc/star.png',
            rating: '4.9 (20)',
            price: '$34',
            total: '$167'
        },
        {
            id: 2,
            picture: 'https://i.ibb.co/swXWVRd/Rectangle2.png',
            name: 'Apertment in Lost Panorama',
            guests: 4,
            bedrooms: 2,
            beds: 2,
            baths: 1,
            facilities: 'Wifi, Air conditioning, Kitchen',
            cancellation: 'Cancellation flexibility',
            star: 'https://i.ibb.co/GMFNnNc/star.png',
            rating: '4.8 (10)',
            price: '$52',
            total: '$155'
        },
        {
            id: 3,
            picture: 'https://i.ibb.co/q17PXgX/Rectangle01.png',
            name: 'AR Lounge & Pool (r&r + b&b)',
            guests: 6,
            bedrooms: 3,
            beds: 2,
            baths: 3,
            facilities: 'Wifi, Air conditioning, Kitchen',
            cancellation: 'Cancellation flexibility',
            star: 'https://i.ibb.co/GMFNnNc/star.png',
            rating: '4.9 (25)',
            price: '$44',
            total: '$277'
        }
    ];

    return (
        <div id='blog' className='container mb-5 px-0 mx-auto'>
            <div className='text-start'>
                <p className='mb-0'>252 stays Apr 13-17 <span className='text-warning'>{blogs.length}</span> guests</p>
                <h2>Stay in Cox's Bazar</h2>
            </div>
            <div className='row m-0 mb-4 g-5 d-flex justify-content-between'>
                <div className='container p-0 col-12 col-lg-7 col-md-12 col-sm-12'>
                    {
                        // blogsData.map(data => console.log(data))
                        blogs.map(data => <Blog
                            key={data.id}
                            data={data}
                        ></Blog>)
                    }
                </div>
                <div className='px-2 mt-2 col-12 col-lg-5 col-md-12 col-sm-12'>
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Blogs;