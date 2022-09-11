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

  await Home.deleteMany();

  const home = await Home.insertMany([]);

  console.log('Home data seeded');

  await Travel.deleteMany();

  const travel = await Travel.insertMany([]);

  console.log('Travel data seeded');

  await User.deleteMany();

  await User.create({});

  await User.create({});

  console.log('Users seeded');

  process.exit();
});
