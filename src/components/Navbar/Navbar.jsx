import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/mFilterIt_logo.svg';
import './navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const menuRoutes = (
    <>
      <NavLink>
        <li className='hover:text-[#F48850]'>Our Solutions</li>
      </NavLink>
      <NavLink>
        <li className='hover:text-[#F48850]'>Resources</li>
      </NavLink>
      <NavLink>
        <li className='hover:text-[#F48850]'>About Us</li>
      </NavLink>
      <NavLink>
        <li className='hover:text-[#F48850]'>Careers</li>
      </NavLink>
    </>
  );

  return (
    <div data-aos="fade-down">
      <nav className="h-[70px]  relative  w-full  lg:mb-20 flex items-center">
        <div className="w-[90%] mx-auto">
          <ul className="items-center hidden space-x-8 lg:flex justify-between">
            <img src={logo} alt="" className="h-[40px] cursor-pointer" />
            <div className="flex items-center gap-5">
              <div className="space-x-[40px]  flex text-lg">{menuRoutes}</div>
              <div className="ml-10">
                <button className="rounded-[7.28px] btn-shadow  border-[3px] border-[#F48850] hover:bg-[#F48850]  w-[128px] h-[40px]  block mx-auto md:mx-0">
                  <span className="block rounded-[7.28px] text-[#F48850] hover:text-white text-lg font-[400]">
                    Contact Us
                  </span>
                </button>
              </div>
            </div>
          </ul>

          <div className={`flex justify-between items-center lg:hidden my-10`} onClick={handleClick}>
            <img src={logo} alt="" className='cursor-pointer h-[40px]' />
            {open ? (
              <AiOutlineClose className="text-2xl text-[#FFD333]" />
            ) : (
              <FaBars className="text-2xl text-[#FFD333]" />
            )}
          </div>
        </div>
      </nav>

      <div>
        <div className={`${open ? 'menu-active' : 'menu-inactive h-0'} pl-10   mobile-menu `}>
          <div className="flex flex-col space-y-10   font-bold mobile-links text-2xl">
            {menuRoutes}
          </div>
          <button className="rounded-[7.28px] mt-5 border-[3px] border-[#F48850]  w-[128px] h-[40px] md:mx-0">
            <span className="block rounded-[7.28px] text-[#F48850] text-lg font-[400]">
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
