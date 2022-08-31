import React from 'react';
import useTravelNews from '../../../hooks/useTravelNews';
import Travel from '../Travel/Travel';

const Travels = () => {
    const [travelNews] = useTravelNews();
    return (
        <div id='news' className='container p-0'>
            <h2 className='text-start text-uppercase mb-4 mt-5'>Travel News: {travelNews.length}</h2>
            <div className='row gx-4 gy-4 m-0'>
                {
                    travelNews.map(travelNew => <Travel
                        key={travelNew.id}
                        travelNew={travelNew}
                    ></Travel>)
                }
            </div>
        </div>
    );
};

export default Travels;