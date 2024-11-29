
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ post }) => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleCardClick = () => {
    navigate(`/blog/${post._id}`);  // Navigate to the blog detail page using the post's ID
  };

  return (
    <div 
      className="bg-white shadow-lg rounded-lg w-full sm:w-[18vw] md:w-[40vw] lg:w-[15vw] h-auto md:h-[45vh] flex flex-col items-center justify-between p-4 hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
      onClick={handleCardClick}  // Make the card clickable
    >
      {/* Image Section */}
      <img 
        className="w-full h-[65%] object-cover rounded-t-lg" 
        src={post.image} 
        alt="Card Thumbnail" 
      />

      <span className="text-xs bg-blue-100 text-blue-600 rounded-full px-2 py-1 mt-2">
        {post.category}  {/* Display category */}
      </span>

      {/* Title Section */}
      <h2 className="text-lg font-semibold text-gray-800 mt-2 text-center">
        {post.title}  {/* Display the title */}
      </h2>

      {/* Writer Section */}
      <div className="flex items-center mt-2">
        <img 
          className="w-8 h-8 rounded-full mr-2" 
          src="https://imgs.search.brave.com/2qLsVM1wuTXIzahLVS1hpUIqSMf8ytwPONSYQSM4GDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYXNpYW4tbWVu/LWF2YXRhcl83ODE0/LTM0NS5qcGc_c2Vt/dD1haXNfaHlicmlk"  // Assuming the post includes an author's image
          alt="Writer" 
        />
        <h3 className="text-sm text-gray-600">{post.author}</h3>  {/* Display author's name */}
      </div>
    </div>
  );
};

export default Card;
