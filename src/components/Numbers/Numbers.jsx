import React from 'react';
import NumbersBanner from '../../assets/images/numbers.svg';

const numbers = [
  {
    id: 1,
    number: "1500+",
    nameOfNumber: "eCommerce Websites Tracked"
  },
  {
    id: 2,
    number: "100 K+",
    nameOfNumber: "Infringement Instances Identified"
  },
  {
    id: 3,
    number: "100 K+",
    nameOfNumber: "Brands Analyzed"
  },
  {
    id: 4,
    number: "1 B+",
    nameOfNumber: "Video Frames Analyzed"
  },
  {
    id: 5,
    number: "3.5 B+",
    nameOfNumber: "Unique Device Coverage"
  },
  {
    id: 6,
    number: "$400 M+",
    nameOfNumber: "Saved for clients"
  },
]

const Numbers = () => {
  return (
    <div className='my-40'>
      <h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">
        Numbers speak <br className="hidden lg:block" /> about us!
      </h1>

      <div className="mt-10 flex flex-col-reverse lg:flex-row justify-center gap-10 items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-14">
          {
            numbers.map((number) => (
              <div key={number.id} className="text-center space-y-3 leading-[112%]">
                <h1 className="text-2xl text-[#686868]  font-medium">{number.number}</h1>
                <div className="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
                <h1 className="text-[20px] text-[#3F3F3F] leading-6">
                  {number.nameOfNumber}
                </h1>
              </div>
            ))
          }
        </div>

        <div>
          <img src={NumbersBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
