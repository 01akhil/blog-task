
import React from 'react'
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Blog=()=>{
  return(
    
    <div className='w-[100vw] min-h-screen flex  justify-center'>
      <div className='w-[75vw] '>
      <Header/>
      <CardContainer />
      <Footer/>
      </div>
    </div>
  )
}

export default Blog;