import React, { useState } from 'react';
import './style.css';
import menu_icon from './menu.png';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navBar">
      <a href="/" className="brand-name">
        Carbon Footsteps
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img
          src={menu_icon}
          alt="3 lines to representing the menu"
          className="navLogo"
        />
      </button>
      <div className={isNavExpanded ? 'menuNav expanded' : 'menuNav'}>
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
