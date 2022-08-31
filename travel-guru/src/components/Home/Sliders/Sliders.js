import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import './Sliders.css';

SwiperCore.use([Navigation, Pagination]);

// import img1 from '../../../images/Rectangle26.png';
// import img2 from '../../../images/Rectangle27.png';
// import img3 from '../../../images/Rectangle28.png';

const Sliders = () => {
    // const slides = [
    //     { id: 1, name: "", picture: { img1 } },
    //     { id: 2, name: "", picture: { img2 } },
    //     { id: 3, name: "", picture: { img3 } }
    // ];
    // slides.map(slide => {
    //     <SwiperSlide key={`slide=${slide.id}`}>
    //         <img src={slide.picture}
    //             alt={`Slide ${slide.id}`}
    //         />
    //     </SwiperSlide>
    // });

    const slides = [];
    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide
                key={`slide=${i}`}
                tag='li'
            >
                <img
                    src={`https://picsum.photos/id/${i + 1}/500/300`}
                    style={{ listStyle: 'none' }}
                    alt={`Slide ${i}`}
                />
            </SwiperSlide>
        )
    }
    return (
        <>
            <Swiper
                id='main'
                tag='section'
                wrapperTag='ul'
                loop={true}
                navigation={true}
                pagination
                spaceBetween={0}
                slidesPerView={1}
                // onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                // onSlideChange={(swiper) => { console.log('Slide index changed to: ', swiper.activeIndex) }}
                // onReachEnd={() => console.log('Swiper end reached')}
            >
                {slides}
            </Swiper>
        </>
    );
};

export default Sliders;