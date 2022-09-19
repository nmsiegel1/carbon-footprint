import React from 'react';
import './assets/css/donation.css';

const Donation = () => {
  const donations = [
    {
      title: 'Clean Air Task Force',
      description:
        'The Clean Air Task Force (CATF) was founded in 1996 by Armond Cohen to enact federal policy that would force older coal plants in America to improve their emissions. Today, the charity is a global non-profit organization that works to safeguard against the worst impacts of climate change.',
      link: 'https://www.catf.us/',
    },
    {
      title: 'Cool Earth',
      description:
        'Cool Earth funds indigenous rainforest communities to tackle the root causes of deforestation and invest in projects that protect vital carbon sinks. The cash funds are used by local communities to run sustainability education programs which have led to the development of solar energy farms, bee-keeping projects, and sustainable waste solutions.',
      link: 'https://www.coolearth.org/',
    },
    {
      title: 'Carbon180',
      description:
        'Carbon180 works to build a world that removes more carbon than it produces. Their Carbon Economy Consortium brings together leading experts from all over the world to develop new pathways towards carbon removal solutions, and works closely with farmers to accelerate the adoption of agricultural practices that store carbon to help tackle climate change.',
      link: 'https://carbon180.org/',
    },
  ];
  const resources = [
    {
      link: 'http://www.globalstewards.org/reduce-carbon-footprint.htm',
      title: 'Reduce Carbon Footprint',
    },
    {
      link: 'https://www.epa.gov/climateleadership/ghg-reduction-programs-strategies',
      title: 'EPA Strategies',
    },
    {
      link: 'https://www.nps.gov/pore/learn/nature/climatechange_action_home.htm',
      title: 'Climate Change Action',
    },
    {
      link: 'https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions',
      title: 'Our World In Data',
    },
  ];
  return (
    <main className="donation-main">
      <div>
        <h2 className="donation-title">
          Looking for more ways to help the environment?
        </h2>
        <h3 className="donate">Donate to fight climate change:</h3>
        <div className="donation">
          {donations.map(({ title, link, description }) => (
            <div className="donation-card" key={title}>
              <h4 className="donation-card-title">{title}</h4>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                <button type="submit">Donate Now!</button>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="resource">
          Learn more about lowering your carbon footprint:
        </h3>
        <div className="resources">
          {resources.map(({ link, title }) => (
            <a key={title} href={link} target="_blank" rel="noreferrer">
              <button type="submit">{title}</button>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Donation;
