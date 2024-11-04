// components/Navbar.js
import React from 'react';

const Navbar = ({ onDragStart }) => {
  return (
    <div
      className="navbar"
      draggable
      onDragStart={(e) => onDragStart(e, 'navbar')}
    >
      <h1>Navbar</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
