const db = require('./connection');
const { User, Pledge, Home, Travel } = require('../models');

db.once('open', async () => {
  await Pledge.deleteMany();

  const pledge = await Pledge.insertMany([
    {
      action: 'Purchase Electric Vehicle',
      description: '',
      icon: 'bxs:car',
      link: 'https://www.epa.gov/greenvehicles/explaining-electric-plug-hybrid-electric-vehicles',
    },
    {
      action: 'Purchase Hybrid Vehicle',
      description: '',
      icon: 'bxs:car',
      link: 'https://www.epa.gov/greenvehicles/explaining-electric-plug-hybrid-electric-vehicles',
    },
    {
      action: 'Install Solar Panels',
      description: '',
      icon: 'material-symbols:solar-power-outline-rounded',
      link: 'https://www.epa.gov/sustainable-water-infrastructure/solar-cells-renewable-energy-fact-sheet',
    },
    {
      action: 'Purchase Green Electricity',
      description: '',
      icon: 'healthicons:electricity-outline',
      link: 'https://www.epa.gov/greenpower',
    },
    {
      action: 'Use Public Transportation',
      description: '',
      icon: 'zondicons:travel-train',
      link: 'https://www.epa.gov/smartgrowth/smart-growth-and-transportation',
    },
    {
      action: 'Walk or Bike',
      description: '',
      icon: 'ic:round-directions-bike',
      link: 'https://www.epa.gov/greenvehicles/what-if-we-kept-our-cars-parked-trips-less-one-mile',
    },
    {
      action: 'Install Tankless Water Heater',
      description: '',
      icon: 'material-symbols:water-heater-outline',
      link: 'https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters',
    },
    {
      action: 'Use Energy Star Appliances',
      description: '',
      icon: 'cil:fridge',
      link: 'https://www.energystar.gov/products',
    },
    {
      action: 'Reduce Air Travel',
      description: '',
      icon: 'fa6-solid:plane',
      link: 'https://www.epa.gov/regulations-emissions-vehicles-and-engines/regulations-greenhouse-gas-emissions-aircraft',
    },
    {
      action: 'Eat a Low Carbon Diet',
      description: '',
      icon: 'fluent:food-24-filled',
      link: 'https://shrinkthatfootprint.com/food-carbon-footprint-diet/',
    },
    {
      action: 'Regulate Thermostat',
      description: '',
      icon: 'material-symbols:mode-heat-cool',
      link: 'https://www.energy.gov/energysaver/programmable-thermostats',
    },
    {
      action: 'Install Low Flow Showerhead',
      description: '',
      icon: 'bx:water',
      link: 'https://www.epa.gov/watersense/showerheads',
    },
    {
      action: 'Use LED Lightbulbs',
      description: '',
      icon: 'healthicons:electricity-outline',
      link: 'https://www.energy.gov/energysaver/lighting-choices-save-you-money',
    },
    {
      action: 'Use Rechargable Batteries',
      description: '',
      icon: 'akar-icons:battery-charging',
      link: 'https://blueandgreentomorrow.com/environment/rechargeable-batteries-savior-in-fight-against-climate-change/',
    },
    {
      action: 'Install Water Efficient Landscaping',
      description: '',
      icon: 'bx:water',
      link: 'https://www.energy.gov/energysaver/landscaping-water-conservation',
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
      vehicleEmissions: 85774,
      publicTransitEmissions: 0,
      planeEmissions: 327483.31,
      waterEmissions: 1155122,
      electricityEmissions: 13648,
      heatEmissions: 17789,
     },
     { 
      name: 'John Muir',
      email: 'johninthewild@yahoo.com',
      password: 'password54321',
      vehicleEmissions: 212862,
      publicTransitEmissions: 18329,
      planeEmissions: 0,
      waterEmissions: 1130962,
      electricityEmissions: 253638449,
      heatEmissions: 5264,
     },
     { 
      name: 'Wangari Maathai',
      email: 'wmaathai@earthsave.com',
      password: 'password23456',
      vehicleEmissions: 71033,
      publicTransitEmissions: 59284,
      planeEmissions: 70175,
      waterEmissions: 1125002,
      electricityEmissions: 596360610,
      heatEmissions: 0,
     },
     { 
      name: 'David Brower',
      email: 'dbrowersierra@hotmail.com',
      password: 'password65432',
      vehicleEmissions: 222160,
      publicTransitEmissions: 31618,
      planeEmissions: 0,
      waterEmissions: 863174,
      electricityEmissions: 223644490,
      heatEmissions: 8502,
     },
     { 
      name: 'Winona LaDuke',
      email: 'winonald@example.com',
      password: 'password56789',
      vehicleEmissions: 0,
      publicTransitEmissions: 91647,
      planeEmissions: 56140,
      waterEmissions: 2197286,
      electricityEmissions: 689639,
      heatEmissions: 77,
     },
     { 
      name: 'Chico Mendez',
      email: 'rainforestsforever@aol.com',
      password: 'password98765',
      vehicleEmissions: 255434,
      publicTransitEmissions: 0,
      planeEmissions: 0,
      waterEmissions: 1885962,
      electricityEmissions: 966533,
      heatEmissions: 0,
     }
  ]);

  console.log('Users seeded');

  process.exit();
});
