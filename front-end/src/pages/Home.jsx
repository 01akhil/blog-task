import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="w-[100vw] bg-[#ffffff] flex flex-col items-center ">
      <div className='w-[75vw] flex flex-col items-center justify-center '>
        <Header />
        <Landing/>    
        <CardContainer/>   
      </div>
      <Footer/> 
    </div>
  );
};

export default Home;
