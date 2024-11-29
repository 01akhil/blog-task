import React, { useState, useEffect } from 'react';
import Screenshot from '../assets/Screenshot.png';
import Twitter from '../assets/Twitter.webp';
import LinkedIn from '../assets/LinkedIn.webp';
import Medium from '../assets/Medium.webp';
import Button from './Button';

const Landing = () => {
  const paragraph =
    "This is a task for the company CrowdWisdomTrading for the role of full stack intern. This website is developed using Reactjs, Express, MongoDB, and NodeJS. Used Cloudinary for uploading the thumbnails of blogs and writer's profile pictures. Deployed this project on render, Thanks for checking out the project.";

  const [displayedText, setDisplayedText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const [showText, setShowText] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 50); 
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (showText && index < paragraph.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + paragraph[index]); 
        setIndex((prev) => prev + 1); 
      }, 10);
      return () => clearInterval(interval); 
    }
  }, [showText, index]);

  return (
    <div className="w-full text-black flex flex-col lg:flex-row mt-[5vh] px-4">
      {/* Text Section */}
      <div className="w-full lg:w-[50vw] mb-8 lg:mb-0">
        <h1 className="text-[#d05270] font-bold text-3xl md:text-4xl">Task Blog</h1>
        <h1 className="text-2xl md:text-3xl">A place to learn & grow</h1>

        <p className="mt-[5vh] overflow-hidden border-r-4 border-black w-full h-[35vh] md:h-[20vh] lg:h-[25vh]">
          {displayedText}
        </p>

        <div className="flex gap-4 items-center mt-[5vh] flex-wrap justify-center">
          {/* Twitter Button */}
          <Button 
            label="Twitter" 
            bgColor="bg-[#46addf]" 
            icon={Twitter} 
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          />
          {/* LinkedIn Button */}
          <Button 
            label="LinkedIn" 
            bgColor="bg-[#1274b0]" 
            icon={LinkedIn} 
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          />
          {/* Medium Button */}
          <Button 
            label="Medium" 
            bgColor="bg-[#010001]" 
            icon={Medium} 
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[30vw] flex justify-center">
        <img src={Screenshot} alt="Screenshot" className="w-full h-auto max-w-[100%] lg:max-w-[80%]" />
      </div>
    </div>
  );
};

export default Landing;
