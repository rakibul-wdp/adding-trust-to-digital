import React from 'react';
import BannerImg from '../../assets/images/banner.svg';
import Line from '../../assets/images/wavy_line.svg';

const Banner = () => {
  return (
    <div className="lg:w-[90%] mx-auto mb-20 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <div className="lg:w-[50%]">
          <img src={BannerImg} alt="" />
        </div>
        <div className="lg:w-[40%] text-center lg:text-left ">
          <div className="text-[45px] leading-[125%]">
            <h1>Marketing.</h1>
            <img src={Line} alt="" className='w-[200px] mx-auto lg:mx-0' />
            <h1 className='mb-[30px]'>It won’t cost you an arm and a leg!</h1>
          </div>
          <div>
            <p className='leading-[24px]'>
              We create innovative marketing solutions for cost conscious marketers who does not
              compromise on the results!
            </p>
            <div className="mt-8">
              <button className="rounded-[7.28px]  border-[3px] border-[#F48850] hover:bg-[#F48850]  w-[128px] h-[40px]  block mx-auto md:mx-0 btn-shadow ">
                <span className="block rounded-[7.28px] text-[#F48850] hover:text-white text-lg font-[400]">
                  Try Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
