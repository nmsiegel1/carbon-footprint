import React, { useState } from 'react';
import './style.css';
// import menu_icon from './images/menu.png';
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
        {/* <img src={menu_icon} alt="3 lines to representing the menu" /> */}
        <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
      </button>
      <div className={isNavExpanded ? 'menuNav expanded' : 'menuNav'}>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/mypledges">
            <li>Pledges</li>
          </a>
          <a href="/calculator">
            <li>Calculator</li>
          </a>
          <a href="/myfootprint">
            <li>My Footprint</li>
          </a>
          <a href="/donation">
            <li>Donate</li>
          </a>
          <a href="/login">
            <li>Log in</li>
          </a>
          {/* <a href="/logout">
            <li>Log out</li>
          </a> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
