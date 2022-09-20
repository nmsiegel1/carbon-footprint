import React, { useState } from 'react';
import './style.css';
import logo from './images/logo.png';
import Auth from '../../utils/auth';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className={isNavExpanded ? 'menuNav expanded' : 'menuNav'}>
          <div className={isMenuClicked ? 'menu-icon-close' : 'menu-icon-open'}>
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/" onClick={() => Auth.logout()}>
                <li>Logout</li>
              </a>
              <a href="/about">
                <li>About</li>
              </a>
              <a href="/calculator">
                <li>Footprint Calculator</li>
              </a>
              <a href="/myfootprint">
                <li>My Footprint</li>
              </a>
              <a href="/mypledges">
                <li>My Pledges</li>
              </a>
              <a href="/donation">
                <li>Want To Do More?</li>
              </a>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className={isNavExpanded ? 'menuNav expanded' : 'menuNav'}>
          <div className={isMenuClicked ? 'menu-icon-close' : 'menu-icon-open'}>
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/login">
                <li>Log In/Sign Up</li>
              </a>
              <a href="/about">
                <li>About</li>
              </a>
              <a href="/donation">
                <li>Want To Do More?</li>
              </a>
            </ul>
          </div>
        </div>
      );
    }
  }

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
          setIsMenuClicked(!isMenuClicked);
        }}
      ></button>
      {showNavigation()}
    </nav>
  );
};

export default Navbar;
