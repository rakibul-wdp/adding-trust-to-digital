import React from 'react';
import AiMi from '../../assets/images/AIMIicon.jpeg'
import TechIcon from '../../assets/images/futureTechIcon.png'
import Time from '../../assets/images/timeIcon.png'
import Integration from '../../assets/images/integrationIcon.png'

const aboutUs = [
  {
    id: 1,
    aboutImg: AiMi,
    aboutName: "Power of AI/ML"
  },
  {
    id: 2,
    aboutImg: TechIcon,
    aboutName: "Future Ready Tech"
  },
  {
    id: 3,
    aboutImg: Time,
    aboutName: "Real-Time Tracking"
  },
  {
    id: 4,
    aboutImg: Integration,
    aboutName: "Seamless Integration"
  },
]

const AboutUs = () => {
  return (
    <div className='md:my-20'>
      <h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">Who we are</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">

        <div className='w-[65%] mx-auto'>
          <p>We are the essential tool in a digital marketer’s handbag.
            We are on a mission to create trust, uphold integrity,
            drive growth & value across the digital ecosystem.
            We empower our customers with a holistic
            view of their respective journeys’ in the digital
            ecosystem by providing them with accurate real-time data
            that helps them understand their returns on their digital investments.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="rounded-[7.28px]  border-[3px] border-[#F48850] hover:bg-[#F48850]  w-[160px] h-[40px]  block mx-auto md:mx-0 btn-shadow ">
              <span className="block rounded-[7.28px] text-[#F48850] hover:text-white text-lg font-[400]">
                About Us
              </span>
            </button>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          {
            aboutUs.map((about) => (
              <div key={about.id} className='text-center mb-10'>
                <img src={about.aboutImg} className='m-auto pb-3' alt="" />
                <p>
                  {about.aboutName}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutUs;