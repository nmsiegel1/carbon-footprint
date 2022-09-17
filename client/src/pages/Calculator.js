import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/calculator.css';

import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem, Slider } from '@mui/material';

import { useMutation } from '@apollo/client';
import { ADD_TRAVEL, ADD_HOME } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { Box } from '@mui/system';

const Calculator = () => {
  // set state of user form
  const [formState, setFormState] = useState({
    carType: 'Small',
    carMiles: 0,
    busMiles: 0,
    trainMiles: 0,
    planeMiles: 0,
    showerNumber: 0,
    minutes: 0,
    laundry: 0,
    flushes: 0,
    bottles: 0,
    fridge: 'Yes',
    TV: 0,
    laptop: 0,
    desktop: 0,
    monitor: 0,
    climate: 'Cold',
    size: 0,
    acDays: 0,
    gasDays: 0,
    oilDays: 0,
  });
  let {
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

  // navigate to new page
  const navigate = useNavigate();

  // set useMutation to populate meQuery for both ADD_TRAVEL and ADD_HOME
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
      }
      catch (e) {
        console.warn(e);
      }
    },
  });

  // function to calculate home and travel data
  const calculateFootprint = async (
    carType,
    carMiles,
    trainMiles,
    busMiles,
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
    oilDays
  ) => {
    let vehicleEmissions;
    switch (carType) {
      case 'Small':
        // vehicleEmissions = Math.round(4.2887(carMiles));
        vehicleEmissions = Math.round(4.2887 * carMiles);
        break;
      case 'Average':
        vehicleEmissions = Math.round(5.32155 * carMiles);
        break;
      case 'Hybrid':
        vehicleEmissions = Math.round(2.9597 * carMiles);
        break;
      default:
        vehicleEmissions = Math.round(7.40532 * carMiles);
        break;
    }

    const publicTransitEmissions = Math.round(
      1.832934 * trainMiles + 3.952283 * busMiles
    );

    const planeEmissions = Math.round(4.678333 * planeMiles);

    const showerEmissions = 78 * showerNumber * minutes;
    const laundryEmissions = 170 * laundry;
    const flushesEmissions = 582.4 * flushes;
    const bottlesEmissions = 161.98 * bottles;
    const waterEmissions = Math.round(
      showerEmissions + laundryEmissions + flushesEmissions + bottlesEmissions
    );

    let fridgeEmissions;
    if (fridge === 'No') {
      fridgeEmissions = 0;
    } else {
      fridgeEmissions = 495;
    }

    const TVEmissions = 14.8272 * TV;
    const desktopEmissions = 29.01095 * desktop;
    const laptopEmissions = 7.73625 * laptop;
    const monitorEmissions = 4.512814 * monitor;

    let ACEmissions, gasEmissions, oilEmissions;
    switch (climate) {
      case 'cold':
        ACEmissions = 0.0126 * size * acDays;
        gasEmissions = ((0.07644 * size) / 365) * gasDays;
        oilEmissions = ((32.68055 * size) / 365) * oilDays;
        break;
      case 'cool':
        ACEmissions = 0.0252 * size * acDays;
        gasEmissions = ((0.0637 * size) / 365) * gasDays;
        oilEmissions = ((26.68412 * size) / 365) * oilDays;
        break;
      case 'moderate':
        ACEmissions = 0.0504 * size * acDays;
        gasEmissions = ((0.05733 * size) / 365) * gasDays;
        oilEmissions = ((20.68769 * size) / 365) * oilDays;
        break;
      case 'warm':
        ACEmissions = 0.06301 * size * acDays;
        gasEmissions = ((0.05096 * size) / 365) * gasDays;
        oilEmissions = ((13.9919 * size) / 365) * oilDays;
        break;
      default:
        ACEmissions = 0.07561 * size * acDays;
        gasEmissions = ((0.0446 * size) / 365) * gasDays;
        oilEmissions = ((8.09518 * size) / 365) * oilDays;
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
      await addTravel({
        variables: { vehicleEmissions, publicTransitEmissions, planeEmissions },
      });
      await addHome({
        variables: { waterEmissions, electricityEmissions, heatEmissions },
      });
      navigate('/myfootprint');
    } catch (err) {
      console.error(err);
    }
  };

  // function to handle the change of state for the form
  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  // form handler to submit to calculation functions
  function handleSubmit(event) {
    event.preventDefault();
    calculateFootprint(
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
      oilDays
    );


  }

  return (
    <main className="calculator-main">
      <h2>My Carbon Footprint</h2>
      <section className="slider-sections">
        <h3>My Travel</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="car-type">Car Type</InputLabel>
              <Select
                labelId="car-type"
                id="carType"
                name="carType"
                defaultValue={carType}
                value={carType}
                onChange={handleChange}
              >
                <MenuItem value={'Small'}>Small</MenuItem>
                <MenuItem value={'Average'}>Average</MenuItem>
                <MenuItem value={'SUV'}>SUV</MenuItem>
                <MenuItem value={'Hybrid'}>Hybrid</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ m: 1, width: 300 }}>
              <label>Car Miles Per Year</label>
              <Slider
                aria-label="Car Miles"
                defaultValue={0}
                onChange={handleChange}
                valueLabelDisplay="on"
                name="carMiles"
                step={10000}
                marks
                min={0}
                max={40000}
              ></Slider>
            </Box>

            <Box sx={{ m: 1, width: 300 }}>
              <label>Bus Miles Per Year</label>
              <Slider
                aria-label="Bus Miles"
                defaultValue={0}
                onChange={handleChange}
                valueLabelDisplay="on"
                name="busMiles"
                step={10000}
                marks
                min={0}
                max={40000}
              ></Slider>
            </Box>

            <Box sx={{ m: 1, width: 300 }}>
              <label>Train Miles Per Year</label>
              <Slider
                aria-label="Bus Miles"
                defaultValue={0}
                onChange={handleChange}
                valueLabelDisplay="on"
                name="trainMiles"
                step={10000}
                marks
                min={0}
                max={40000}
              ></Slider>
            </Box>

            <Box sx={{ m: 1, width: 300 }}>
              <label>Plane Miles</label>
              <Slider
                aria-label="Bus Miles"
                defaultValue={0}
                onChange={handleChange}
                valueLabelDisplay="on"
                name="planeMiles"
                step={2000}
                marks
                min={0}
                max={10000}
              ></Slider>
            </Box>
          </div>

          <div>
            <h3>My Home</h3>
            <div>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="fridgeLabel">Fridge</InputLabel>
                <Select
                  labelId="fridgeLabel"
                  id="fridge"
                  name="fridge"
                  defaultValue={fridge}
                  value={fridge}
                  onChange={handleChange}
                >
                  <MenuItem value={'Yes'}>Yes</MenuItem>
                  <MenuItem value={'No'}>No</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="climate">Climate</InputLabel>
                <Select
                  labelId="fridgeLabel"
                  id="fridge"
                  name="climate"
                  defaultValue={climate}
                  value={climate}
                  onChange={handleChange}
                >
                  <MenuItem value={'Cold'}>Cold</MenuItem>
                  <MenuItem value={'Cool'}>Cool</MenuItem>
                  <MenuItem value={'Moderate'}>Moderate</MenuItem>
                  <MenuItem value={'Warm'}>Warm</MenuItem>
                  <MenuItem value={'Hot'}>Hot</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Number of Showers Per Year</label>
                <Slider
                  aria-label="Number of Showers"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="showerNumber"
                  step={400}
                  marks
                  min={0}
                  max={2000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Time spent in the Shower (Minutes)</label>
                <Slider
                  aria-label="Time spent in Shower"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="minutes"
                  step={10}
                  marks
                  min={0}
                  max={120}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Loads of Laundry Per Year</label>
                <Slider
                  aria-label="Loads of Laundry"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="laundry"
                  step={50}
                  marks
                  min={0}
                  max={600}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Number of Flushes Per Year</label>
                <Slider
                  aria-label="Flushes"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="flushes"
                  step={500}
                  marks
                  min={0}
                  max={5000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Bottles of Water Per Year</label>
                <Slider
                  aria-label="Bottles of Water"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="bottles"
                  step={500}
                  marks
                  min={0}
                  max={3000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Hours of TV Per Year</label>
                <Slider
                  aria-label="Hours of TV Watched Per Year"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="TV"
                  step={100}
                  marks
                  min={0}
                  max={5000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Hours of Laptop Use (Plugged In) Per Year</label>
                <Slider
                  aria-label="Hours of Laptop"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="laptop"
                  step={100}
                  marks
                  min={0}
                  max={5000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Hours of Desktop Use Per Year</label>
                <Slider
                  aria-label="Hours of Desktop"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="desktop"
                  step={100}
                  marks
                  min={0}
                  max={5000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Hours of Monitor Use Per Year</label>
                <Slider
                  aria-label="Hours of Monitor"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="monitor"
                  step={100}
                  marks
                  min={0}
                  max={5000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Square Feet of Your Residence</label>
                <Slider
                  aria-label="Square Feet"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="size"
                  step={500}
                  marks
                  min={0}
                  max={8000}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Days You Run Your A/C</label>
                <Slider
                  aria-label="AC Days"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="acDays"
                  step={5}
                  marks
                  min={0}
                  max={365}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Days You Run Your Heat (Natural Gas)</label>
                <Slider
                  aria-label="Gas Days"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="gasDays"
                  step={5}
                  marks
                  min={0}
                  max={365}
                ></Slider>
              </Box>

              <Box sx={{ m: 1, width: 300 }}>
                <label>Days You Run Your Heat (Oil)</label>
                <Slider
                  aria-label="Oil Days"
                  defaultValue={0}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  name="oilDays"
                  step={5}
                  marks
                  min={0}
                  max={365}
                ></Slider>
              </Box>
            </div>
          </div>

          <button type="submit">Find My Footprint</button>
        </form>
      </section>
    </main>
  );
};

export default Calculator;
