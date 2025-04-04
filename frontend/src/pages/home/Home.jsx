import React from 'react';
import Banner from '../../pages/home/Banner'; 
import TopSellers from '../../pages/home/topSellers'; 
import Recommended from '../../pages/home/recommended';
import News from '../../pages/home/news';

const Home = () => {  // Component names should be capitalized
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News/>
    </>
  );
};

export default Home;
