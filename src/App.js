// import Something from 'somewhere';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Main/Home/Home';
import Contact from './Components/Main/Contact/Contact';
import Blog from './Components/Main/Blog/Blog';
import About from './Components/Main/About/About';
import Services from './Components/Main/Services/Services';

// Function Define Area
function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/about'element={<About />} />
          <Route path='/services'element={<Services />} />
          <Route path='/blog'element={<Blog/>} />
          <Route path='/contact'element={<Contact />}></Route>
      </Routes>
    </div>
      </BrowserRouter>
    
  )
}
// Exporting Area
export default App