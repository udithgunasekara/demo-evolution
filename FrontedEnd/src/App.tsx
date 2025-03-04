import { useState } from 'react';
import Test from './test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SomethingProvider from './context/contextProvider';
import Home from './pages/home';
import AddPost from './pages/addPost';

function App() {
 

  return (

    <SomethingProvider>

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addPost" element={<AddPost/>} />
      </Routes>
    </Router>

    
    </SomethingProvider>
    
    
  );
}

export default App;
