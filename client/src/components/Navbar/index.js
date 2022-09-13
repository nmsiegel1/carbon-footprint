import React, { useState } from 'react';
import './style.css';
import menu_icon from './images/menu.png';
import logo from './images/logo.png';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navBar">
      <a href="/" className="brand-name">
        <img
          src={logo}
          alt="logo of foot outline with the earth inside of it"
          className="navLogo"
        />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={menu_icon} alt="3 lines to representing the menu" />
      </button>
      <div className={isNavExpanded ? 'menuNav expanded' : 'menuNav'}>
        <ul>
          <li>
            <a href="/">Home</a>
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
