
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { id } = useParams();  // Get the dynamic ID from the URL
  const [post, setPost] = useState(null);  // To store the full blog post
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`);  // Fetch individual post data
        const data = await response.json();
        setPost(data);  // Store the post data
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);  // Refetch when ID changes

  if (loading) {
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center text-xl text-red-600">Post not found.</div>;
  }

  return (
    <div className="w-[90vw] md:w-[75vw] mx-auto bg-white rounded-lg">
      <Header />    

      {/* Image Section */}
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-[300px] object-cover rounded-lg shadow-md mb-6 mt-5"
      />

      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{post.title}</h1>

      {/* Metadata Section */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-600">{post.category}</span>
        <span className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      {/* Content Section */}
      <div 
        className="text-lg text-gray-700" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <Footer />
    </div>
  );
};

export default BlogDetail;
