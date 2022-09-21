import React from 'react';
import './assets/css/about.css';
import { Icon } from '@iconify/react';

const About = () => {
  const team = [
    {
      name: 'Nina Siegel',
      src: require('./assets/images/Nina.jfif'),
      email: 'siegel.nina.m@gmail.com',
      href: 'https://github.com/nmsiegel1',
    },
    {
      name: 'Gilina McBride',
      src: require('./assets/images/Gilina.JPG'),
      email: 'gilinamcbride@gmail.com',
      href: 'https://github.com/gilinamcbride',
    },
    {
      name: 'Daniel Conlon',
      src: require('./assets/images/Daniel.jfif'),
      email: 'danielcconlon@gmail.com',
      href: 'https://github.com/DanielCConlon',
    },
    {
      name: 'Mtende Roll',
      src: require('./assets/images/Mtende.jfif'),
      email: 'rollmtende@gmail.com',
      href: 'https://github.com/MtendeRoll',
    },
    {
      name: 'Amanda Klenk',
      src: require('./assets/images/Amanda.jpg'),
      email: 'amandamklenk@gmail.com',
      href: 'https://github.com/amklenk',
    },
  ];

  return (
    <section className="team-main">
      <h1>
        Take your first <span>Carbon Footsteps</span> with us!
      </h1>
      <div className="about-info">
        <p>
          We here at <span>Carbon Footsteps</span> believe that it is important
          for all of us to reduce our contributions to climate change. This team
          of full-stack developers was inspired to answer the question: Where do
          we start to lower our CO2 emissions? After searching for a carbon
          footprint calculator that had everything we needed, we decided to
          research and make our own! Each piece of the calculator, each graph,
          each pledge was crafted by the team below. We know it can be tough and
          guilt-inducing to learn about your carbon footprint. We are here to
          help you take the baby steps to offset your emissions and feel proud
          to fulfill your goals! Contact any member of the team below to get
          your questions answered, and click on our GitHub repositories to see
          more of our work.
        </p>
      </div>
      <div className="team-info">
        {team.map((teammate) => (
          <div className="team-container" key={teammate.name}>
            <h2>{teammate.name}</h2>
            <img
              src={teammate.src}
              alt={teammate.name}
              style={{ width: 200 }}
            ></img>
            <div className="links-row">
              <div className="links-col">
                <a href="mailto:{teammate.email}">
                  <h3>
                    <Icon icon="clarity:email-line" color="#243B4A" />
                  </h3>
                </a>
              </div>
              <div className="links-col">
                <a
                  href={teammate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>
                    <Icon icon="akar-icons:github-fill" color="#243B4A" />
                  </h4>
                </a>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
