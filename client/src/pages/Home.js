import React from 'react';
import './assets/css/home.css';
import MeanCountry from './assets/js/meanCountry';
import MeanIndividual from './assets/js/meanIndividual';
// import './assets/js/home.js';

// import Example from './assets/js/home.js';

const Home = () => {
  return (
    <main className="home-main">
      <div>
        <h1 className="home-title">
          Carbon <span>Footsteps</span>
        </h1>
        <div className="home-tagline">
          <p>
            Curious what your <span>IMPACT</span> on the world is?
          </p>
        </div>
        <div className="home-p">
          <p>
            Greenhouse gas emissions from human activities strengthen the
            greenhouse effect, contributing to climate change. Most is carbon
            dioxide from burning fossil fuels: coal, oil, and natural gas. The
            largest emitters include coal in China and large oil and gas
            companies, many state-owned by OPEC and Russia
          </p>
        </div>
      </div>
      <section className="footprint-data">
        <div className="calculations">
          <h2 className="footprint-title">
            Per capita carbon emissions in the world's largest economies in
            2016* in metric tons
          </h2>
          <MeanCountry />
        </div>
        <div className="graph">
          <h2 className="footprint-title">
            Per capita carbon emmisions in the USA**
          </h2>
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
