import React from 'react';
import './style.css';
import Logo from '../Navbar/images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-info">
        <section className="footer-info-left">
          <img
            className="footer-logo"
            src={Logo}
            alt="logo of a foot oultine with the earth inside it"
          ></img>
          <div>
            <h3 className="footer-info-menu">Carbon Footsteps</h3>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a
                  href="https://github.com/nmsiegel1/carbon-footprint"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github Repository
                </a>
              </li>
              <li>
                <a href="/donation">Fight Climate Change</a>
              </li>
            </ul>
          </div>
        </section>
        <section className=" footer-info-right">
          <div className="footer-info-copyright">
            &copy; 2022 Carbon Footsteps
          </div>
        </section>
      </section>
      <hr className="footer-separator" />
    </footer>
  );
}

export default Footer;
