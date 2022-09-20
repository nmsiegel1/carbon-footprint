import React from 'react';
import './assets/css/home.css';
import { Link } from 'react-router-dom';
import MeanCountry from './assets/js/meanCountry';
import MeanIndividual from './assets/js/meanIndividual';
import MeanCountryAnnual from './assets/js/meanCountryAnnual';
import MeanHousehold from './assets/js/meanHousehold';
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
        <div className="graph">
          <h2>Annual Carbon Emissions in 2020*</h2>
          <br />
          <h4>Global annual carbon emissions: 34,807,259,099 metric tons</h4>
          <br />
          <MeanCountryAnnual />
        </div>
        <div className="calculations">
          <h2>Annual Per Capita Carbon Emissions in 2020*</h2>
          <br />
          <h4>Global annual per capita carbon emissions: 4.47 metric tons</h4>
          <br />
          <MeanCountry />
        </div>
      </section>
      <section className="footprint-data">
        <div className="calculations">
          <h2>Per-Household Annual Carbon Emissions in the United States**</h2>
          <br />
          <MeanHousehold />
        </div>
        <div className="graph">
          <h2>Breakdown of the Average American's Carbon Footprint***</h2>
          <br />
          <MeanIndividual />
        </div>
      </section>

      <section className="home-references">
        <h3>
          <a
            href="https://ourworldindata.org/co2/"
            rel="noreferrer"
            target="_blank"
          >
            *World Data
          </a>
          <br />
          <a
            href="https://www.zerofy.net/2022/04/04/household-co2-emissions.html"
            rel="noreferrer"
            target="_blank"
          >
            **Per Household Footprint
          </a>
          <br />
          <a
            href="https://suncommon.com/understanding-your-carbon-footprint/"
            rel="noreferrer"
            target="_blank"
          >
            ***Average Footprint Breakdown
          </a>
        </h3>
      </section>
      <br />
    </main>
  );
};

export default Home;
