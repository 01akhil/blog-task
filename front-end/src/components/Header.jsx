
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full bg-[#ffffff] flex items-center justify-between h-[8vh] px-4 mt-5'>


<span 
        className="text-black cursor-pointer"
        onClick={() => navigate('/home')} 
      >
        Task<span className="font-bold">Blog</span>
      </span>

      <div className='block lg:hidden'>
        <button onClick={toggleMenu} className='text-black'>
          <span className='block w-6 h-0.5 bg-black mb-1'></span>
          <span className='block w-6 h-0.5 bg-black mb-1'></span>
          <span className='block w-6 h-0.5 bg-black'></span>
        </button>
      </div>

      <ul className={`flex lg:flex gap-8 text-sm text-black ${isMenuOpen ? 'flex-col absolute bg-white w-full h-screen top-0 left-0 z-10 justify-center items-center' : 'hidden lg:flex'}`}>
        <li className='cursor-pointer py-4'>
          <Link to="/home">Home</Link>
        </li>
        <li className='cursor-pointer py-4'>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className='cursor-pointer py-4'>
          <Link to="/create-blog">Create Blog</Link>
        </li>
        
      </ul> 
      {isMenuOpen && (
        <button 
          className='absolute top-0 right-4 text-black text-2xl z-50'
          onClick={toggleMenu}
        >
          &times; 
        </button>
      )}   
    </div>
  );
};

export default Header;


