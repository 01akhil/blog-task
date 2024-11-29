// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer'

// const Blog = () => {
//   const [posts, setPosts] = useState([]);  // To store fetched posts
//   const [loading, setLoading] = useState(true);  // To manage loading state

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // Perform the GET request to fetch posts
//         const response = await fetch('http://localhost:5000/api/posts');
//         const data = await response.json();
        
//         // Update the state with the fetched posts
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       } finally {
//         setLoading(false);  // Set loading to false after the fetch
//       }
//     };

//     fetchPosts();
//   }, []);  // Empty array means this runs once when the component mounts

//   return (
//     <div className="flex items-center justify-center bg-[#ffffff]">
//       <div className="flex flex-col bg-[#ffffff] w-[75vw] items-center min-h-screen">
//         <Header />

//         {/* Display a loading message while posts are being fetched */}
//         {loading && <p>Loading posts...</p>}

//         {/* Map over the posts and display them */}
//         {!loading && posts.length > 0 ? (
//           posts.map((post) => (
//             <div className="w-[58vw] text-black min-h-screen" key={post._id} >
//               <span className="text-xs bg-[#4a6afb] rounded-sm px-2 py-1 mt-2 font-semibold text-white">
//                 {post.category} {/* Assuming the category is stored in the post */}
//               </span>

//               <h1 className="text-3xl font-bold">{post.title}</h1>

//               <span className="text-xs text-gray-600 px-2 py-1 mt-2">
//                 Author {/* You can add the author if available in the post */}
//               </span>

//               {/* If image exists, display it */}
//               {post.image && (
//                 <img className="w-[100%] h-[50vh]" src={post.image} alt={post.title} />
//               )}

//               {/* Render the content of the post */}
//               <p>{post.content}</p>
//             </div>
//           ))
//         ) : (
//           <div className='min-h-[38.5vh] flex items-center justify-center'>
//             <p className=' text-black '>No posts available.</p>
//           </div>
//         )}

//         <Footer/>
//       </div>
//     </div>
//   );
// };

// export default Blog;



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