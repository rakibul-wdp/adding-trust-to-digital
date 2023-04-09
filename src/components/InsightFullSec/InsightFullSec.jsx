import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Trusted/trusted.css';

import Technology from '../../assets/images/technology.png';
import Reseller from '../../assets/images/reseller.png';
import Creative from '../../assets/images/creative.png';
import Warning from '../../assets/images/warning.png';

const insightful = [
  { id: 1, img: Technology },
  { id: 2, img: Reseller },
  { id: 3, img: Creative },
  { id: 4, img: Warning },
]

const InsightFullSec = () => {
  return (
    <div className="md:my-20">
      <h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">
        Insightful Reads - <span className="text-[#F48850]">mFilterIt</span>
      </h1>
      <div data-aos="fade-up">
        <div className=" relative w-[75%] mx-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            navigation={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper lg:h-[300px]">
            {
              insightful.map((insight) => (
                <SwiperSlide key={insight.id}>
                  <div className="p-5 rounded-2xl mb-4 lg:mb-10">
                    <img src={insight.img} alt="" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default InsightFullSec;
