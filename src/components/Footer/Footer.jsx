import React from 'react';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Logo from "../../assets/images/footerLogo.png";
import Instagram from '../../assets/images/icons8-instagram.svg';

const Footer = () => {
  return (
    <>
      <div className="mt-40 mb-5 bg-gray-200 w-full h-[3px]"></div>
      <section className='px-5 md:px-32'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 pl-10 md:pl-0 '>

            <div>
              <p className='font-bold'>Our Solutions</p>
              <p>Ad Traffic Validation</p>
              <p>Brand Hygiene Protection</p>
              <p>eCommerce Competitive Analytics</p>
              <p>Mobile Identity Solution</p>

            </div>

            <div>
              <p className='font-bold'>Quick Links</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Careers</p>
              <p>CSR</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p className='font-bold'>Resources</p>
              <p>Blogs</p>
              <p>Case Studies</p>
              <p>Reports</p>
              <p>Newsroom & Media</p>
              <p>PSU Solutions</p>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className=''>
              <div>
                <div className='flex gap-4 mt-10 md:mt-0 mx-14'>
                  <span className=''><FaTwitter className='text-[#1DA1F2] h-8 w-full'></FaTwitter></span>
                  <span><img src={Instagram} alt="" /></span>
                  <span><FaFacebookSquare className='text-[#1877F2] h-8 w-full' /></span>
                  <span><FaYoutube className='text-[#E43535] h-8 w-full' /></span>
                  <span><FaLinkedinIn className='text-[#0076B2] h-8 w-full' /></span>
                </div>
              </div>

              <div className='rounded-lg border-2 p-[30px] mt-4'>
                <p className='font-bold mb-4 text-[#1E1E1E]'>Sign Up For Our Newsletter *</p>

                <input type="text" name="text"
                  className='p-1 text-center border border-slate-400 rounded-md w-full'
                  placeholder='Email Address' id="" />

                <div className="mt-8 flex justify-center">
                  <button className="rounded-[7.28px]  border-[3px] border-[#F48850] hover:bg-[#F48850]  w-[160px] h-[40px]  block mx-auto md:mx-0 btn-shadow ">
                    <span className="block rounded-[7.28px] text-[#F48850] hover:text-white text-lg font-[400]">
                      Subscribe
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='mt-5 md:mt-0'>
          <img src={Logo} className='w-[150px]' alt="" />
          <p>©2023 mFilterIt. All rights reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;