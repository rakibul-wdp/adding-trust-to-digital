import React from 'react';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Numbers from '../../components/Numbers/Numbers';
import Trusted from '../../components/Trusted/Trusted';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Banner />
      <Services />
      <Numbers />
      <Trusted />
      <Testimonials />
    </div>
  );
};

export default Home;
