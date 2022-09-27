import React from 'react';
import HamadMalik from "../../assets/images/HamadMalik.svg";
import HarisKhan from "../../assets/images/HarisKhan.svg";
import GaneshSonawane from "../../assets/images/GaneshSonawane.svg";
import ParthDesai from "../../assets/images/ParthDesai.svg";

const testimonials = [
  {
    id: 1,
    avatar: HamadMalik,
    name: "Hamad Malik",
    title: "CMO",
    feedback: "We started working with mFilterlt and almost instantly saw value is subscribing to the service as it helped us challenge and optimize traffic sources, weed out under performing partners and scale with confidence leading to marketing budget optimization."
  },
  {
    id: 2,
    avatar: HarisKhan,
    name: "Haris Khan",
    title: "Head Acquisition",
    feedback: "Ad-fraud is a challenge with every ad network - Careem works closely with partners to control the fraud and improve the traffic quality using mFilterIt fraud detection tool. The tool categorically identifies the type of fraud and helps understand real value additional by ad-network."
  },
  {
    id: 3,
    avatar: GaneshSonawane,
    name: "Ganesh Sonawane",
    title: "Sr. Digital Manager",
    feedback: "mFilterit have been a fantastic partner in not only helping us identify fraud sources but also optimize and identify where we can scale our investments. The team at mFilterlt have consistently delivered performance and have extended the support with respect to managing our partners."
  },
  {
    id: 4,
    avatar: ParthDesai,
    name: "Parth Desai",
    title: "Sr. Manager",
    feedback: "With the support of mFilterlt, we were able to improve the efficiency of our performance marketing spends and optimize our call centre bandwidth basis the quality of the lead. The detailed transactional reporting provided by mFilterlt helped us deliver outstanding business results."
  },
]

const Testimonials = () => {
  return (
    <div className="py-8 px-6 md:py-10 md:px-14 lg:px-20 xl:px-24 my-40">
      <div className="flex flex-col md:flex-row justify-center items-center mb-10 lg:mr-3">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light mb-3 text-[#444444]">
          TESTIMONIALS
        </h2>
        <div className="hidden  h-24 px-5 w-1 lg:px-14 py-3 md:flex flex-col items-center">
          <div className="w-1 bg-gradient-to-b  from-[#F48850]  to-[#D25412] h-full"></div>
        </div>
        <p className="text-center lg:text-3xl lg:font-light text-[#444444]">
          What recruiters have to <br /> say about{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F48850] to-[#D25412] font-semibold">
            mFilterIt
          </span>
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-8 w-[80%] 2xl:w-[70%] mx-auto'>
        {
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border p-10 rounded-lg shadow-md hover:shadow-lg max-w-md">
              <div className="flex items-center gap-5 mb-4">
                <img
                  src={testimonial.avatar}
                  alt=""
                  loading="lazy"
                  className=" w-14 h-14 rounded-full object-cover"
                />
                <div className="font-semibold">
                  <div>{testimonial.name}</div>
                  <div>{testimonial.title}</div>
                </div>
              </div>
              <p>
                {testimonial.feedback}
              </p>
            </div>
          ))
        }
      </div>

      <div className="flex w-full flex-wrap justify-center text-xs font-semibold text-white pb-8 pt-4">
        <div className="mt-8">
          <button className="rounded-[7.28px]  border-[3px] border-[#F48850] hover:bg-[#F48850]  w-[160px] h-[40px]  block mx-auto md:mx-0 btn-shadow ">
            <span className="block rounded-[7.28px] text-[#F48850] hover:text-white text-lg font-[400]">
              View More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
