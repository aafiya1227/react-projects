import React from 'react';
import { Navigate ,Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
      </Routes>
      {/* <Navigate path='/' /> */}
    </div>
  );
};

export default App;