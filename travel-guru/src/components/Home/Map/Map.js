import React from 'react';

const Map = () => {
    return (
        <div className='h-100 min-vh-100'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74285.05065124958!2d91.96709688931361!3d21.449078226054368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1661843352034!5m2!1sen!2sbd" className='rounded' style={{border: 0, width: '100%', height: '100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="cox's bazar"></iframe>
        </div>
    );
};

export default Map;