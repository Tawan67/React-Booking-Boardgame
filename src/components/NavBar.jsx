import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
function Navbar() {
//   const navStyle = { display: 'flex', gap: '20px', padding: '10px', background: '#f4f4f4' };
  
  return (
    <nav class='component-top-right'>
      {/* ใช้ Link แทนแท็ก <a> เพื่อการนำทางภายในแอปฯ */}
      <Link to="/" class="link-box">Home</Link>
      <Link to="/about" class="link-box">About</Link>
      <Link to="/contact" class="link-box">Contact</Link>
      <Link to="/dashboard" class="link-box">Dashboard (Nested Route)</Link>
    </nav>
  );
}

export default Navbar;