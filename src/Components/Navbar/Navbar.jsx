// import something from somewhere
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

// Function Define Area
function Navbar() {
  return (
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

// Exporting Area
export default Navbar
