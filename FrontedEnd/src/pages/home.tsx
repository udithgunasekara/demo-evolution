import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../component/navbar';
import { getAllPosts } from '../service/api';
import { Post } from '../types';
import PostCard from '../component/postCard';


const Home: React.FC = () => {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    console.log("Fetching posts...");
    try {
      const response = await getAllPosts(); 
      console.log("Response:", response.data);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  

  
  return (
    <div className="bg-gray-300 min-h-screen text-gray-200">
      <Navbar/>

      <div className="p-4">
        <h1 className="text-2xl text-blue-900 font-bold">Posts</h1>
        {post.length > 0 ? (
          post.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;