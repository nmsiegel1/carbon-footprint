import React from 'react';
import './style.css';
import { Icon } from '@iconify/react';

function Footer(props) {
  return (
    <footer className="footer">
      <section className="footer-info">
        <section className="footer-info-left">
          <h3 className="footer-info-menu">Carbon Footsteps</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/calculator">Calculator</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </section>

        <section className="footer-info-center">
          <h3 className="footer-info-learn">Learn More</h3>
          <ul>
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
              <a href="/donation">Donate</a>
            </li>
            <li>
              <a href="/mypledges">My Pledges</a>
            </li>
          </ul>
        </section>

        <section className=" footer-info-right">
          <div className="footer-info-copyright">
            <Icon icon="mdi:copyright" color="#243B4A" width="20" height="12" />{' '}
            2022 Copyright
          </div>
        </section>
      </section>
      <hr className="footer-separator" />
    </footer>
  );
}

export default Footer;
