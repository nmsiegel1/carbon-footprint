import React from 'react';
import './style.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-12 mt-2 mb-0">
          <p className="mb-0">
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
          </p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12 copyright">
          <p>
            <i className="fa fa-copyright" aria-hidden="true"></i> CARBON
            FOOTSTEPS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
