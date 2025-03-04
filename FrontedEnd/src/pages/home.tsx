import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../component/navbar';
import { getAllPosts } from '../service/api';


const Home: React.FC = () => {

  // useEffect(()=>{
  //   getAllPosts()


  // }, [])
  

  
  return (
    <div className="bg-gray-300 min-h-screen text-gray-200">
      <Navbar/>



      
    </div>
  );
};

export default Home;