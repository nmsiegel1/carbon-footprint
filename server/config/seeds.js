const db = require('./connection');
const { User, Pledge, Home, Travel } = require('../models');

db.once('open', async () => {
  await Pledge.deleteMany();

  const pledge = await Pledge.insertMany([
    {
      action: 'Purchase Electric Vehicle',
      description:
        'A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year. This number can vary based on a vehicle’s fuel, fuel economy, and the number of miles driven per year. Switching to a fully electrict car brings this down to zero!',
      icon: 'bxs:car',
      link: 'https://www.epa.gov/greenvehicles/explaining-electric-plug-hybrid-electric-vehicles',
    },
    {
      action: 'Purchase Hybrid Vehicle',
      description:
        'A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year. This number can vary based on a vehicle’s fuel, fuel economy, and the number of miles driven per year. This number can vary based on a vehicle’s fuel, fuel economy, and the number of miles driven per year. Tailpipe emissions of hybrid cars vary depending on battery capacity, how it is driven and how often it is charged but there is huge potential to reduce emissions from driving a hybrid.',
      icon: 'bxs:car',
      link: 'https://www.epa.gov/greenvehicles/explaining-electric-plug-hybrid-electric-vehicles',
    },
    {
      action: 'Install Solar Panels',
      description:
        'Solar power is one of the most promising renewable energy sources today. Solar cells can be used as auxiliary or supplemental power sources for your home.',
      icon: 'material-symbols:solar-power-outline-rounded',
      link: 'https://www.epa.gov/sustainable-water-infrastructure/solar-cells-renewable-energy-fact-sheet',
    },
    {
      action: 'Purchase Green Electricity',
      description:
        "One in four utilites are now offering a green power upgrade option. If you have not joined yet, it's a simple and effective way to power your home more sustainably.",
      icon: 'healthicons:electricity-outline',
      link: 'https://www.epa.gov/greenpower',
    },
    {
      action: 'Use Public Transportation',
      description:
        'Roughly 17 percent of U.S. greenhouse gas emissions comes from cars and light-duty trucks. Using public transportation can help improve road congestions, reduce air pollution and lower greenhouse gas emissions.',
      icon: 'zondicons:travel-train',
      link: 'https://www.epa.gov/smartgrowth/smart-growth-and-transportation',
    },
    {
      action: 'Walk or Bike',
      description:
        'Car trips under 1 mile add up to about 10 billion miles of driving in the US per year. Converting half of our drives under 1 mile to walking or biking could save 2 million metric tons of CO2 emissions per year!',
      icon: 'ic:round-directions-bike',
      link: 'https://www.epa.gov/greenvehicles/what-if-we-kept-our-cars-parked-trips-less-one-mile',
    },
    {
      action: 'Use Energy Star Appliances',
      description:
        'Many appliances for your home from refrigerators to air conditioners can be purchased with an ENERGY STAR rating. These products meet strict energy guidelines set by the EPA and can help save money on utility bills as well as protect the climate by reducing pollution and greenhouse gas emissions.',
      icon: 'cil:fridge',
      link: 'https://www.energystar.gov/products',
    },
    {
      action: 'Reduce Air Travel',
      description:
        'A two hour flight produces emissions equal to about a month of typical driving. Reducing plane travel is one of the best thinkgs you can do to reduce your carbon footprint.',
      icon: 'fa6-solid:plane',
      link: 'https://www.epa.gov/regulations-emissions-vehicles-and-engines/regulations-greenhouse-gas-emissions-aircraft',
    },
    {
      action: 'Eat a Low Carbon Diet',
      description:
        'A third of all food emissions in the United States come from red meat and dairy products, while chicken and vegetables have up to ten times smaller footprints per serving. Small diet changes can truly make a big impact!.',
      icon: 'fluent:food-24-filled',
      link: 'https://shrinkthatfootprint.com/food-carbon-footprint-diet/',
    },
    {
      action: 'Regulate Thermostat',
      description:
        'Smart settings on your thermostat is one of the best things you can do to save energy because heating is the largest single contributor to energy use in typical homes, even in many moderate climates.',
      icon: 'material-symbols:mode-heat-cool',
      link: 'https://www.energy.gov/energysaver/programmable-thermostats',
    },
    {
      action: 'Install Low Flow Showerhead',
      description:
        'A typical showerhead uses about 3 gallons of water per minute while a low flow showerhead uses 2 gallons of water per minute. Switching to a low flow showerhead saves on average 8-10 gallons of water per shower.',
      icon: 'bx:water',
      link: 'https://www.epa.gov/watersense/showerheads',
    },
    {
      action: 'Use LED Lightbulbs',
      description:
        'LED lightbulbs use 75% less energy and last 25 times longer than incandescent lighting. Switching out the lightbulbs in your home can help save you money and energy consumption.',
      icon: 'healthicons:electricity-outline',
      link: 'https://www.energy.gov/energysaver/lighting-choices-save-you-money',
    },
    {
      action: 'Use Rechargable Batteries',
      description:
        'Battery production has a huge negative impact on the environment as a whole. Rechargeable batteries use up to 23 times less non-renewable natural resources, 28 times less of an impact on global warming, 30 times less of an impact on air pollution and 12 times less of an impact on water pollution than disposable batteries.',
      icon: 'akar-icons:battery-charging',
      link: 'https://www.onegreenplanet.org/lifestyle/rechargeable-batteries-a-better-choice/',
    },
    {
      action: 'Install Water Efficient Landscaping',
      description:
        'Water efficient landscapes can be obtained by introducing more drought-tolerant plants to your landscape and maintaining them more efficiently with drip-irrigation.',
      icon: 'bx:water',
      link: 'https://www.energy.gov/energysaver/landscaping-water-conservation',
    },
    {
      action: 'Reduce Waste',
      description:
        'The methane emissions from municipal solid waste landfills in 2020 were approximately equivalent to the greenhouse gas emissions from about 20.3 million passenger vehicles driven for one year or the CO2 emissions from nearly 11.9 million homes’ energy use for one year. Collectively reducing waste can help decrease emissions dramatically.',
      icon: 'bx:water',
      link: 'https://www.epa.gov/lmop/basic-information-about-landfill-gas',
    },
  ]);

  console.log('Pledges seeded');

  // Do we want all of this to be seeded with the user? I'll put it there for now
  // await Home.deleteMany();

  // const home = await Home.insertMany([]);

  // console.log('Home data seeded');

  // await Travel.deleteMany();

  // const travel = await Travel.insertMany([]);

  console.log('Travel data seeded');

  await User.deleteMany();

  await User.create([
    {
      name: 'Greta Thunberg',
      email: 'gretasavestheworld@gmail.com',
      password: 'password12345',
      travelData: [{
        vehicleEmissions: 85774,
        publicTransitEmissions: 0,
        planeEmissions: 327483,
      }],
      homeData: [{
        waterEmissions: 1155122,
        electricityEmissions: 13648,
        heatEmissions: 17789,
      }],
      pledgeData: []
     },
     { 
      name: 'John Muir',
      email: 'johninthewild@yahoo.com',
      password: 'password54321',
      travelData: [{
        vehicleEmissions: 212862,
        publicTransitEmissions: 18329,
        planeEmissions: 0,
      }],
      homeData: [{
        waterEmissions: 1130962,
        electricityEmissions: 253638449,
        heatEmissions: 5264,
      }],
      pledgeData: []
     },
     { 
      name: 'Wangari Maathai',
      email: 'wmaathai@earthsave.com',
      password: 'password23456',
      travelData: [{
        vehicleEmissions: 71033,
        publicTransitEmissions: 59284,
        planeEmissions: 70175,
      }],
      homeData: [{
        waterEmissions: 1125002,
        electricityEmissions: 596360610,
        heatEmissions: 0,
      }],
      pledgeData: []
     },
     { 
      name: 'David Brower',
      email: 'dbrowersierra@hotmail.com',
      password: 'password65432',
      travelData: [{
        vehicleEmissions: 222160,
        publicTransitEmissions: 31618,
        planeEmissions: 0,
      }],
      homeData: [{
        waterEmissions: 863174,
        electricityEmissions: 223644490,
        heatEmissions: 8502,
      }],
      pledgeData: []
     },
     { 
      name: 'Winona LaDuke',
      email: 'winonald@example.com',
      password: 'password56789',
      travelData: [{
        vehicleEmissions: 0,
        publicTransitEmissions: 91647,
        planeEmissions: 56140,
      }],
      homeData: [{
        waterEmissions: 2197286,
        electricityEmissions: 689639,
        heatEmissions: 77,
      }]
     },
     { 
      name: 'Chico Mendez',
      email: 'rainforestsforever@aol.com',
      password: 'password98765',
      travelData: [{
        vehicleEmissions: 255434,
        publicTransitEmissions: 0,
        planeEmissions: 0,
      }],
      homeData: [{
        waterEmissions: 1885962,
        electricityEmissions: 966533,
        heatEmissions: 0,
      }],
      pledgeData: []
     }
  ]);

  console.log('Users seeded');

  process.exit();
});
