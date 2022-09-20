import React from 'react';
import './assets/css/home.css';
import { Link } from 'react-router-dom';
import MeanCountry from './assets/js/meanCountry';
import MeanIndividual from './assets/js/meanIndividual';
import Logo from './assets/images/logo.png';
import Auth from '../utils/auth';

const Home = () => {
  return (
    <main className="home-main">
      <div>
        <section className="home-header">
          <div className="home-logo">
            <img
              src={Logo}
              alt="logo of a foot oultine with the earth inside it "
            ></img>
          </div>
          <div className="home-title">
            <h1>
              Carbon <span>Footsteps</span>
            </h1>
          </div>
        </section>

        <div className="home-tagline">
          <h2>
            Curious what your <span>IMPACT</span> on the world is?
          </h2>
        </div>
        {Auth.loggedIn() ? (
          ''
        ) : (
          <section className="login-btn">
            <Link to="/login">
              <button type="submit">Calculate Your Carbon Footprint!</button>
            </Link>
          </section>
        )}

        <div className="home-p">
          <p>
            Climate Change is one of the largest issues facing our lives. The
            everyday activities that we do create greenhouse gas emissions that
            then strengthen the greenhouse effect. One of the most common
            emissions come from Carbon Dioxide which is created from burning
            fossil fuels such as coal, oil, and natural gas.
          </p>
        </div>
      </div>
      <section className="footprint-data">
        <div className="calculations">
          <h2>Per capita carbon emissions 2020*</h2>
          <br />
          <MeanCountry />
        </div>
        <div className="graph">
          <h2>Per capita carbon emissions in the USA**</h2>
          <br />
          <MeanIndividual />
        </div>
      </section>

      <section className="home-references">
        <h3>
          <a
            href="https://www.weforum.org/agenda/2019/01/chart-of-the-day-these-countries-have-the-largest-carbon-footprints/"
            rel="noreferrer"
            target="_blank"
          >
            *WeForum
          </a>
          <br />
          <a href="/" rel="noreferrer" target="_blank">
            **Average per capita
          </a>
        </h3>
      </section>
      <br />
    </main>
  );
};

export default Home;
