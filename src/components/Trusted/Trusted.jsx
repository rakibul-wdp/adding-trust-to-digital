import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './trusted.css';

import Amazon from '../../assets/images/amazon.svg';
import FlipCart from '../../assets/images/flipcart.svg';
import HDFCBank from '../../assets/images/hdfc_bank.svg';
import ICICBank from '../../assets/images/icici_bank.svg';
import Macdonald from '../../assets/images/macdonal.svg';
import Pidilite from '../../assets/images/pidilite.svg';
import Unilever from '../../assets/images/uniliver.svg';

const trustedBrand = [
  { id: 1, logo: Amazon },
  { id: 2, logo: FlipCart },
  { id: 3, logo: HDFCBank },
  { id: 4, logo: ICICBank },
  { id: 5, logo: Macdonald },
  { id: 6, logo: Pidilite },
  { id: 7, logo: Unilever },
]

const Trusted = () => {
  return (
    <div>
      <h1 className='mt-40 mb-10 text-[#3F3F3F] text-[35px] text-center font-medium'>Trusted by</h1>
      <div className="mb-40 relative">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper2 lg:h-[170px]">
          {
            trustedBrand.map((brand) => (
              <SwiperSlide key={brand.id} className="">
                <div key={brand.id} className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
                  <img src={brand.logo} alt="" className="w-[235px] h-[100px]" />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Trusted;
