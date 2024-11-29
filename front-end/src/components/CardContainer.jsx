
import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = () => {
  const [posts, setPosts] = useState([]);  // To store the fetched posts
  const [loading, setLoading] = useState(true);  // To manage loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        setPosts(data);  // Store fetched data in state
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);  // Set loading to false after the fetch
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-[100%] mt-5">
      <div>
        <h2 className="text-black font-bold text-lg">Latest Post</h2>
      </div>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {/* Render cards dynamically from fetched posts */}
        {!loading && posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post._id} post={post} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
