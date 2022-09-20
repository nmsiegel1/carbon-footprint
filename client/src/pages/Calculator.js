import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './assets/css/calculator.css';

import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem, Slider } from '@mui/material';

import { useMutation } from '@apollo/client';
import { ADD_TRAVEL, ADD_HOME } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { Box } from '@mui/system';
import Auth from '../utils/auth';

const Calculator = () => {
  // set state of user form
  const [formState, setFormState] = useState({
    carType: 'SUV',
    carMiles: 1000,
    busMiles: 0,
    trainMiles: 0,
    planeMiles: 0,
    showerNumber: 8,
    minutes: 10,
    laundry: 10,
    flushes: 5,
    bottles: 14,
    fridge: 'Yes',
    TV: 4,
    laptop: 2,
    desktop: 8,
    monitor: 6,
    climate: 'Warm',
    size: 2000,
    acDays: 150,
    gasDays: 150,
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
      } catch (e) {
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
        ACEmissions = 0 * size * acDays;
        gasEmissions = ((0.07644 * size) / 365) * gasDays;
        oilEmissions = ((32.68055 * size) / 365) * oilDays;
        break;
      case 'cool':
        ACEmissions = 0.0125 * size * acDays;
        gasEmissions = ((0.0637 * size) / 365) * gasDays;
        oilEmissions = ((26.68412 * size) / 365) * oilDays;
        break;
      case 'moderate':
        ACEmissions = 0.0252 * size * acDays;
        gasEmissions = ((0.05733 * size) / 365) * gasDays;
        oilEmissions = ((20.68769 * size) / 365) * oilDays;
        break;
      case 'warm':
        ACEmissions = 0.0504 * size * acDays;
        gasEmissions = ((0.05096 * size) / 365) * gasDays;
        oilEmissions = ((13.9919 * size) / 365) * oilDays;
        break;
      default:
        ACEmissions = 0.06301 * size * acDays;
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
    <div>
      {Auth.loggedIn() ? (
        <main className="calculator-main">
          <h1>Carbon Footprint Calculator</h1>
          <p className="description">
            Click each dropdown or slider and then the "Find My Footprint"
            button below to calculate your carbon footprint. Just calculate for
            yourself, not your household. The numbers you see are the average
            American's data. You can use those numbers to help you figure out
            your own usage!
          </p>
          <h4>
            * Note: This is a paired down carbon footprint calculator. There are
            many more factors that contribute to your footprint that we have not
            taken into consideration such as diet, shopping habits and
            accounting for all of the members of your household.
          </h4>
          <section className="slider-sections">
            <form onSubmit={handleSubmit}>
              <div className="calculator">
                <div className="travel">
                  <h2>My Travel</h2>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="car-type">Car Type</InputLabel>
                    <Select
                      sx={{
                        color: '#243b4a',
                        margin: '0 0 15px 0',
                      }}
                      labelId="car-type"
                      id="carType"
                      name="carType"
                      defaultValue={carType}
                      value={carType}
                      onChange={handleChange}
                      className="car-type"
                    >
                      <MenuItem value={'Small'}>Small</MenuItem>
                      <MenuItem value={'Average'}>Average</MenuItem>
                      <MenuItem value={'SUV'}>SUV</MenuItem>
                      <MenuItem value={'Hybrid'}>Hybrid</MenuItem>
                    </Select>
                  </FormControl>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label className="slider">Car Miles Per Month</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Car Miles"
                      defaultValue={1000}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="carMiles"
                      step={500}
                      marks
                      min={0}
                      max={3000}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Bus Miles Per Month</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Bus Miles"
                      defaultValue={0}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="busMiles"
                      step={500}
                      marks
                      min={0}
                      max={3000}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Train Miles Per Month</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Train Miles"
                      defaultValue={0}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="trainMiles"
                      step={50}
                      marks
                      min={0}
                      max={1000}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Plane Miles Per Month</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Plane Miles"
                      defaultValue={0}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="planeMiles"
                      step={100}
                      marks
                      min={0}
                      max={4000}
                    ></Slider>
                  </Box>
                </div>

                <div className="home1">
                  <h2>My Home</h2>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="fridgeLabel">Fridge</InputLabel>
                    <Select
                      sx={{
                        color: '#243b4a',
                        margin: '0 0 15px 0',
                      }}
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
                      sx={{
                        color: '#243b4a',
                        margin: '0 0 15px 0',
                      }}
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
                    <label>Number of Showers Per Week</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Number of Showers"
                      defaultValue={8}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="showerNumber"
                      step={4}
                      marks
                      min={0}
                      max={24}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Time spent in the Shower (Minutes)</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Time spent in Shower"
                      defaultValue={10}
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
                    <label>Loads of Laundry Per Month</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Loads of Laundry"
                      defaultValue={10}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="laundry"
                      step={5}
                      marks
                      min={0}
                      max={60}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Number of Flushes Per Day</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Flushes"
                      defaultValue={5}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="flushes"
                      step={1}
                      marks
                      min={0}
                      max={10}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Bottles of Water From the Sink Per Week</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Bottles of Water"
                      defaultValue={14}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="bottles"
                      step={1}
                      marks
                      min={0}
                      max={21}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Hours of TV Per Day</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Hours of TV"
                      defaultValue={4}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="TV"
                      step={2}
                      marks
                      min={0}
                      max={12}
                    ></Slider>
                  </Box>
                </div>
                <div className="home2">
                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Hours of Laptop Use (Plugged In) Per Day</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Hours of Laptop"
                      defaultValue={2}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="laptop"
                      step={1}
                      marks
                      min={0}
                      max={24}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Hours of Desktop Use Per Day</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Hours of Desktop"
                      defaultValue={8}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="desktop"
                      step={4}
                      marks
                      min={0}
                      max={16}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Hours of Monitor Use Per Day</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Hours of Monitor"
                      defaultValue={6}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      name="monitor"
                      step={3}
                      marks
                      min={0}
                      max={12}
                    ></Slider>
                  </Box>

                  <Box sx={{ m: 1, width: 300 }}>
                    <label>Square Feet of Your Residence</label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Square Feet"
                      defaultValue={2000}
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
                    <label>Days You Run Your A/C (at Full Blast)</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="AC Days"
                      defaultValue={150}
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
                    <label>
                      Days You Run Your Heat (Natural Gas, at Full Blast)
                    </label>
                    <Slider
                      sx={{
                        color: '#2C82B3',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: '#2C82B3',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
                      aria-label="Gas Days"
                      defaultValue={150}
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
                    <label>Days You Run Your Heat (Oil, at Full Blast)</label>
                    <Slider
                      sx={{
                        color: 'green',
                        margin: '40px 0 15px 0',
                        '& .MuiSlider-valueLabel': {
                          borderRadius: '15px',
                          backgroundColor: 'green',
                        },
                        '& .MuiSlider-rail': {
                          padding: '5px',
                        },
                      }}
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
              <div className="calculator-btn">
                <button type="submit">Find My Footprint</button>
              </div>
            </form>
          </section>
        </main>
      ) : (
        <div className="not-logged-in">
          <h2 className="no-info-title">
            Log in to use our carbon footprint calculator!
          </h2>
          <Link to="/login">
            <button type="submit">Log In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Calculator;
