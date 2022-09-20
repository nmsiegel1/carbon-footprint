import React from 'react';

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
    <section>
      <h2>Take Your First Carbon Footsteps With Us!</h2>
      <p>
        We here at Carbon Footsteps believe that it is important for all of us
        to reduce our contributions to climate change. This team of full-stack
        developers was inspired to answer the question: Where do we start to
        lower our CO2 emissions? After searching for a carbon footprint
        calculator that had everything we needed, we decided to research and
        make our own! Each piece of the calculator, each graph, each pledge was
        crafted by the team below. We know it can be tough and guilt-inducing to
        learn about your carbon footprint. We are here to help you take the baby
        steps to offset your emissions and feel proud to fulfill your goals!
        Contact any member of the team below to get your questions answered, and
        click on our GitHub repositories to see more of our work.
      </p>
      <div>
        {team.map((teammate) => (
          <div key={teammate.name}>
            <img
              src={teammate.src}
              alt={teammate.name}
              style={{ width: 150 }}
            ></img>
            <h3>{teammate.name}</h3>
            <a href="mailto:{teammate.email}">
              <h4>{teammate.name}'s Email</h4>
            </a>
            <a href={teammate.href} target="_blank" rel="noopener noreferrer">
              <h5>{teammate.name}'s GitHub Repository</h5>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
