import React from 'react';
import useDestination from '../../../hooks/useDestination';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations] = useDestination();
    return (
        <div id='destination' className=''>
            <div className='m-5 px-5'>
                <h2 className='text-start text-uppercase'>World's Best Places to Visit: <span className='text-warning'>{destinations.length}</span></h2>
                <p style={{textAlign: "justify"}} className=''>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge. That's why U.S. News used expert opinions, reader votes and current trends - and evaluated sights, cultures, scenic beauty, food options and more - to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and cast your vote below to help us determine next year's list. (Note: Some of the below destinations may be affected by the coronavirus outbreak. Check with the CDC and the U.S. Department of State before traveling.)</p>
                <hr />
            </div>
            <div className='container p-0'>
                {
                    destinations.map(destination => <Destination
                        key={destination.id}
                        destination={destination}
                    ></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;