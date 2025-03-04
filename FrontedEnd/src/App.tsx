import { useState } from 'react';
import Test from './test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SomethingProvider from './context/contextProvider';

function App() {
 

  return (

    <SomethingProvider>

    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </Router>

    
    </SomethingProvider>
    
    
  );
}

export default App;
