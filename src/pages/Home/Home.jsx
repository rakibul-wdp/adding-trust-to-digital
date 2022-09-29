import React from 'react';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Numbers from '../../components/Numbers/Numbers';

const Home = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <Banner />
      <Services />
      <Numbers />
    </div>
  );
};

export default Home;
