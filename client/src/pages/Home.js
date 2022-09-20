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
        <div className="home-p">
          <p>
            Climate Change is one of the largest issues facing our lives today.
            The long-term shifts in temperature and weather patterns globally
            have huge ramifications and are in large part caused by human
            activity. Our everyday activities produce carbon dioxide and methane
            emissions (also called carbon emissions) which are directly causing
            this shift in climate. The amount of carbon emissions produced by an
            individual or organization is called a carbon footprint.
          </p>
          <br />
          <p>
            So what do we do about it? Small changes to our daily routine can
            make a big impact on our carbon footprints. Any reduction in carbon
            emissions can help slow climate change and hopefully stop any
            further climate disasters. We know this can all feel like a lot so
            we are here to guide you through taking your first footsteps towards
            change. First use our calculator tool to see your carbon footprint.
            Then make pledges to make small changes to your daily routine and in
            turn reduce your carbon footprint!
          </p>
        </div>

        {Auth.loggedIn() ? (
          <section className="login-btn">
            <Link to="/calculator">
              <button type="submit">Calculate Your Carbon Footprint!</button>
            </Link>
          </section>
        ) : (
          <section className="login-btn">
            <Link to="/login">
              <button type="submit">Calculate Your Carbon Footprint!</button>
            </Link>
          </section>
        )}
      </div>
      <section className="footprint-data">
        <div className="graph chart">
          <h2>Annual Carbon Emissions - Metric Tons</h2>
          <br />
          <h4>
            Global annual carbon emissions from 2020: 34,807,259,099 metric tons
          </h4>
          <br />
          <a
            href="https://ourworldindata.org/co2/"
            rel="noreferrer"
            target="_blank"
          >
            <MeanCountryAnnual />
          </a>
        </div>

        <div className="calculations chart">
          <h2>Annual Per Capita Carbon Emissions - Metric Tons</h2>
          <br />
          <h4>
            Global annual per capita carbon emissions from 2020: 4.47 metric
            tons
          </h4>
          <br />
          <a
            href="https://ourworldindata.org/co2/"
            rel="noreferrer"
            target="_blank"
          >
            <MeanCountry />
          </a>
        </div>
      </section>
      <section className="footprint-data">
        <div className="calculations chart">
          <h2>
            Per-Household Annual Carbon Emissions in the United States - Metric
            Tons
          </h2>
          <br />
          <a
            href="https://www.zerofy.net/2022/04/04/household-co2-emissions.html"
            rel="noreferrer"
            target="_blank"
          >
            <MeanHousehold />
          </a>
        </div>
        <div className="graph chart">
          <h2>Breakdown of the Average American's Carbon Footprint</h2>
          <br />
          <a
            href="https://suncommon.com/understanding-your-carbon-footprint/"
            rel="noreferrer"
            target="_blank"
          >
            <MeanIndividual />
          </a>
        </div>
      </section>
      <br />
    </main>
  );
};

export default Home;
