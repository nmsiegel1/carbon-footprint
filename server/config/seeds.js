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
      car: 'small',
      vehicleMilesPerYear: 20000,
      train: 'no',
      trainMiles: 0,
      bus: 'no',
      busMiles: 0,
      plane: 'yes',
      airTravel: 70000,
      showers: 182,
      showerMinutes: 15,
      flushes: 1095,
      bottles: 1825,
      laundry: 52,
      fridge: 'yes',
      TV: 'yes',
      TVHours: 730,
      desktop: 'no',
      desktopHours: 0,
      laptop: 'yes',
      laptopHours: 365,
      monitor: 'no',
      monitorHours: 0,
      climate: 'cold',
      size: 1500,
      air: 'no',
      airDays: 0,
      gas: 'yes',
      gasDays: 180,
      oil: 'no',
      oilDays: 0,
    },
    {
      name: 'John Muir',
      email: 'johninthewild@yahoo.com',
      password: 'password54321',
      car: 'average',
      vehicleMilesPerYear: 40000,
      train: 'yes',
      trainMiles: 10000,
      bus: 'no',
      busMiles: 0,
      plane: 'no',
      airTravel: 0,
      showers: 100,
      showerMinutes: 30,
      flushes: 1000,
      bottles: 1900,
      laundry: 40,
      fridge: 'yes',
      TV: 'no',
      TVHours: 0,
      desktop: 'yes',
      desktopHours: 1460,
      laptop: 'no',
      laptopHours: 0,
      monitor: 'no',
      monitorHours: 0,
      climate: 'cool',
      size: 800,
      air: 'yes',
      airDays: 60,
      gas: 'no',
      gasDays: 0,
      oil: 'yes',
      oilDays: 90,
    },
    {
      name: 'Wangari Maathai',
      email: 'wmaathai@earthsave.com',
      password: 'password23456',
      car: 'hybrid',
      vehicleMilesPerYear: 24000,
      train: 'no',
      trainMiles: 0,
      bus: 'yes',
      busMiles: 15000,
      plane: 'yes',
      airTravel: 10000,
      showers: 365,
      showerMinutes: 10,
      flushes: 730,
      bottles: 2500,
      laundry: 60,
      fridge: 'yes',
      TV: 'yes',
      TVHours: 365,
      desktop: 'yes',
      desktopHours: 1000,
      laptop: 'no',
      laptopHours: 0,
      monitor: 'yes',
      monitorHours: 1000,
      climate: 'hot',
      size: 2000,
      air: 'yes',
      airDays: 200,
      gas: 'no',
      gasDays: 0,
      oil: 'no',
      oilDays: 0,
    },
    {
      name: 'David Brower',
      email: 'dbrowersierra@hotmail.com',
      password: 'password65432',
      car: 'SUV',
      vehicleMilesPerYear: 30000,
      train: 'no',
      trainMiles: 0,
      bus: 'yes',
      busMiles: 8000,
      plane: 'no',
      airTravel: 0,
      showers: 150,
      showerMinutes: 40,
      flushes: 365,
      bottles: 1100,
      laundry: 26,
      fridge: 'no',
      TV: 'no',
      TVHours: 0,
      desktop: 'no',
      desktopHours: 0,
      laptop: 'yes',
      laptopHours: 1825,
      monitor: 'yes',
      monitorHours: 1825,
      climate: 'moderate',
      size: 2500,
      air: 'yes',
      airDays: 90,
      gas: 'no',
      gasDays: 0,
      oil: 'yes',
      oilDays: 60,
    },
    {
      name: 'Winona LaDuke',
      email: 'winonald@example.com',
      password: 'password56789',
      car: 'none',
      vehicleMilesPerYear: 0,
      train: 'yes',
      trainMiles: 50000,
      bus: 'no',
      busMiles: 0,
      plane: 'yes',
      airTravel: 12000,
      showers: 365,
      showerMinutes: 15,
      flushes: 2190,
      bottles: 3000,
      laundry: 52,
      fridge: 'yes',
      TV: 'yes',
      TVHours: 730,
      desktop: 'no',
      desktopHours: 0,
      laptop: 'no',
      laptopHours: 0,
      monitor: 'no',
      monitorHours: 0,
      climate: 'warm',
      size: 3000,
      air: 'yes',
      airDays: 182,
      gas: 'yes',
      gasDays: 183,
      oil: 'no',
      oilDays: 0,
    },
    {
      name: 'Chico Mendez',
      email: 'rainforestsforever@aol.com',
      password: 'password98765',
      car: 'average',
      vehicleMilesPerYear: 48000,
      train: 'no',
      trainMiles: 0,
      bus: 'no',
      busMiles: 0,
      plane: 'no',
      airTravel: 0,
      showers: 365,
      showerMinutes: 45,
      flushes: 730,
      bottles: 1000,
      laundry: 104,
      fridge: 'yes',
      TV: 'yes',
      TVHours: 1095,
      desktop: 'yes',
      desktopHours: 365,
      laptop: 'no',
      laptopHours: 0,
      monitor: 'no',
      monitorHours: 0,
      climate: 'hot',
      size: 2100,
      air: 'yes',
      airDays: 300,
      gas: 'no',
      gasDays: 0,
      oil: 'no',
      oilDays: 0,
    },
  ]);

  console.log('Users seeded');

  process.exit();
});
