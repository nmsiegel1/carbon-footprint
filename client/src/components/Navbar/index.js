import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navBar">
      <a href="/" className="brand-name">
        Carbon Footsteps
      </a>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="menuNav">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/mypledges">Pledges</a>
          </li>
          <li>
            <a href="/calculator">Calculator</a>
          </li>
          <li>
            <a href="/login">Log in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
