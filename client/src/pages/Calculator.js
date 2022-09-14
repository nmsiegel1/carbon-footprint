import React, { useState } from 'react';
import Pledges from '../components/Pledges';

import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';

import { useMutation } from '@apollo/client';
import { ADD_TRAVEL, ADD_HOME } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const Calculator = () => {
  // set state of user form
  const [formState, setFormState] = useState({
    carType: '',
    carMiles: 0,
    busMiles: 0,
    trainMiles: 0,
    planeMiles: 0,
    showerNumber: 0,
    minutes: 0,
    laundry: 0,
    flushes: 0,
    bottles: 0,
    fridge: 0,
    TV: 0,
    laptop: 0,
    desktop: 0,
    monitor: 0,
    size: 0,
    climate: '',
    acDays: 0,
    gasDays: 0,
    oilDays: 0,
  });
  const {
    carType,
    carMiles,
    busMiles,
    trainMiles,
    planeMiles,
    showerNumber,
    minutes,
    laundry,
    flushes,
    bottles,
    fridge,
    TV,
    laptop,
    desktop,
    monitor,
    size,
    climate,
    acDays,
    gasDays,
    oilDays,
  } = formState;

  // set useMutation to populate meQuery
  const [addTravel] = useMutation(ADD_TRAVEL, {
    update(cache) {
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, travelData: [...me.travelData] } },
        });
      } catch (e) {
        console.warn(e);
      }
    },
  });

  const [addHome] = useMutation(ADD_HOME, {
    update(cache) {
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, homeData: [...me.homeData] } },
        });
      } catch (e) {
        console.warn(e);
      }
    },
  });

  // function to calculate Travel data and use mutation to input to database
  const calculateTravel = async (
    carType,
    carMiles,
    trainMiles,
    busMiles,
    planeMiles
  ) => {
    let carEmissions;
    switch (carType) {
      case 'small':
        carEmissions = Math.round(4.2887(carMiles));
        break;
      case 'average':
        carEmissions = Math.round(5.32155(carMiles));
        break;
      case 'hybrid':
        carEmissions = Math.round(2.9597(carMiles));
        break;
      default:
        carEmissions = Math.round(7.40532(carMiles));
        break;
    }

    const publicTravelEmissions = Math.round(
      1.832934(trainMiles) + 3.952283(busMiles)
    );

    const planeEmissions = Math.round(4.678333(planeMiles));
    try {
      await addTravel({
        variables: {
          carEmissions: carEmissions,
          publicTravelEmissions: publicTravelEmissions,
          planeEmissions: planeEmissions,
        },
      });
      addTravel(carEmissions, publicTravelEmissions, planeEmissions);
    } catch (err) {
      console.error(err);
    }
  };
  // function to calculate Home data and use mutation to input to database
  const calculateHome = async (
    showerNumber,
    minutes,
    laundry,
    flushes,
    bottles,
    fridge,
    TV,
    laptop,
    desktop,
    monitor,
    size,
    climate,
    acDays,
    gasDays,
    oilDays
  ) => {
    const showerEmissions = 78(showerNumber)(minutes);
    const laundryEmissions = 170(laundry);
    const flushesEmissions = 582.4(flushes);
    const bottlesEmissions = 161.98(bottles);
    const waterEmissions = Math.round(
      showerEmissions + laundryEmissions + flushesEmissions + bottlesEmissions
    );

    let fridgeEmissions;
    if (!fridge) {
      fridgeEmissions = 0;
    } else {
      fridgeEmissions = 495;
    }

    const TVEmissions = 14.8272(TV);
    const desktopEmissions = 29.01095(desktop);
    const laptopEmissions = 7.73625(laptop);
    const monitorEmissions = 4.512814(monitor);

    let ACEmissions, gasEmissions, oilEmissions;
    switch (climate) {
      case 'cold':
        ACEmissions = 2637.648(size)(acDays);
        gasEmissions = (0.07644(size) / 365)(gasDays);
        oilEmissions = (32.68055(size) / 365)(oilDays);
        break;
      case 'cool':
        ACEmissions = 5275.296(size)(acDays);
        gasEmissions = (0.0637(size) / 365)(gasDays);
        oilEmissions = (26.68412(size) / 365)(oilDays);
        break;
      case 'moderate':
        ACEmissions = 10550.6(size)(acDays);
        gasEmissions = (0.05733(size) / 365)(gasDays);
        oilEmissions = (20.68769(size) / 365)(oilDays);
        break;
      case 'warm':
        ACEmissions = 13188.25(size)(acDays);
        gasEmissions = (0.05096(size) / 365)(gasDays);
        oilEmissions = (13.9919(size) / 365)(oilDays);
        break;
      default:
        ACEmissions = 15825.9(size)(acDays);
        gasEmissions = (0.0446(size) / 365)(gasDays);
        oilEmissions = (8.09518(size) / 365)(oilDays);
        break;
    }

    const electricityEmissions = Math.round(
      fridgeEmissions +
        TVEmissions +
        desktopEmissions +
        laptopEmissions +
        monitorEmissions +
        ACEmissions
    );

    const heatEmissions = Math.round(gasEmissions + oilEmissions);
    try {
      await addHome({
        variables: {
          waterEmissions: waterEmissions,
          electricityEmissions: electricityEmissions,
          heatEmissions: heatEmissions,
        },
      });
      addHome(waterEmissions, electricityEmissions, heatEmissions);
    } catch (err) {
      console.error(err);
    }
  };

  function handleChange(event) {
    // use spread operator to retain the other key-value pairs in the object
    // not sure if we can use name?
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  // form handler
  function handleSubmit(event) {
    event.preventDefault();
    calculateTravel(carType, carMiles, busMiles, trainMiles, planeMiles);
    calculateHome(
      showerNumber,
      minutes,
      laundry,
      flushes,
      bottles,
      fridge,
      TV,
      laptop,
      desktop,
      monitor,
      size,
      climate,
      acDays,
      gasDays,
      oilDays
    );
  }
  // not sure how to put the name on each slider or select...might have to rethink the change handler, use event.target.id?
  return (
    <main>
      <div>EXAMPLE Calculator TEXT</div>
        <section>
          <h2>My Home</h2>
          <form onSubmit={handleSubmit}>
            <input></input>
            <Select
            labelId="car-type"
            id="carType"
            value={carType}
            label="Car Type"
            onChange={handleChange}
            ></Select>

            <input></input>
            <Slider
            aria-label="car-miles"
            defaultValue={0}
            // getAriaValueText={valuetext}
            step={10}
            marks
            min={0}
            max={40}
            valueLabelDisplay="on"
            ></Slider>
          </form>
        </section>
      <Pledges />
    </main>
  );
};

export default Calculator;
