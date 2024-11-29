import React from 'react'

const Footer = () => {
  return (
    <div className='w-[75vw] mt-16 bg-[#f6f6f7] flex items-center justify-center'>
      <div className='w-full max-w-screen-xl px-4 py-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-black'>

        {/* About Section */}
        <div className='sm:w-full'>
          <h3 className='font-bold text-lg mb-2'>About</h3>
          <p className='text-sm mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi enim repudiandae voluptatibus natus ut tempora quidem, libero sint excepturi officiis?
          </p>
          <h3><strong>Email:</strong> info@gmail.com</h3>
          <h3><strong>Phone:</strong> 909 090 9090</h3>
        </div>

        {/* Quick Links Section */}
        <div className='sm:w-full'>
          <h3 className='font-bold text-lg mb-2'>Quick Links</h3>
          <ul className='text-sm space-y-2'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
            <li>Favourites</li>
          </ul>
        </div>

        {/* Category Section */}
        <div className='sm:w-full'>
          <h3 className='font-bold text-lg mb-2'>Category</h3>
          <ul className='text-sm space-y-2'>
            <li>Lifestyle</li>
            <li>Automobiles</li>
            <li>Technology</li>
            <li>Engineering</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white flex items-center justify-center flex-col p-6 rounded-lg shadow-lg mt-5 sm:w-full">
          <h3 className="font-bold text-lg text-gray-800">Weekly Newsletter</h3>
          <p className="text-gray-600 text-center text-sm mt-1 mb-4">
            Subscribe to our newsletter to get the latest articles and exclusive offers delivered to your inbox.
          </p>
          
          <input 
            type="email" 
            className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your email address" 
            name="email" 
            id="email"
          />
          
          <button 
            className="text-center bg-[#4a6afb] text-white font-semibold py-2 px-8 rounded-lg mt-4 hover:bg-[#3a5edc] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all w-full">
            Subscribe
          </button>
        </div>

      </div>
    </div>
  )
}

export default Footer
