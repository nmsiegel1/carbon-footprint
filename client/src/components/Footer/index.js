import React from 'react';
import './style.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="contain">
        <div className="col">
          <h1>Carbon Footsteps</h1>
          <ul>
            <li>About</li>
            <li>Calculator</li>
            <li>Contact Us</li>
          </ul>
          {/* <p className="mb-0">
            <a
              href="https://github.com/nmsiegel1/carbon-footprint"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a>
            <a href="/donation">
              <i className="fa fa-wallet fa-lg" aria-hidden="true"></i>
            </a>
            <a href="/mypledges">
              <i className="fa fa-check fa-lg" aria-hidden="true"></i>
            </a>
          </p> */}
        </div>
      </div>
      <div className="col">
        <h1>Learn More</h1>
        <ul>
          <li>
            <a
              href="https://github.com/nmsiegel1/carbon-footprint"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github fa-md" aria-hidden="true"></i>
              Github Repository
            </a>
          </li>
          <li>
            <a href="/donation">
              <i className="fa fa-wallet fa-md" aria-hidden="true"></i>
              Donate
            </a>
          </li>
          <li>
            <a href="/mypledges">
              <i className="fa fa-check fa-md" aria-hidden="true"></i>
              My pledges
            </a>
          </li>
        </ul>
      </div>
      <div className=" col copyright">
        <i className="fa fa-copyright" aria-hidden="true"></i> 2022 Copyright
      </div>
      <div className="clearfix"></div>
    </footer>
  );
}

export default Footer;
