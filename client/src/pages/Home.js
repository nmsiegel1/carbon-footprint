import React from 'react';
import './assets/css/home.css';
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
        <div>
          <h2>The average American household carbon footprint is</h2>
        </div>
        <div className="graph">
          <MeanIndividual />
        </div>
      </section>
    </main>
  );
};

export default Home;
