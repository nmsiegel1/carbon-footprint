import React from 'react';
import Pledges from '../components/Pledges';
import './assets/css/footprint.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const MyFootprint = () => {
  const { data, loading } = useQuery(QUERY_ME);
  console.log('data', data);
  const { username, homeData, travelData } = data?.me || [];

  console.log(username);
  console.log(homeData);
  console.log(travelData);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div className="footprint">
      <section className="my-footprint">
        <div className="footprint-data">
          {homeData.length || travelData.length ? (
            <div>
              <h2 className="footprint-title">{username}'s Carbon Footprint</h2>
              <div>
                <p>Water emissions: {homeData[0].waterEmissions} kg CO2</p>
                <p>
                  Electricity emissions: {homeData[0].electricityEmissions} kg
                  CO2
                </p>
                <p>Heat emissions: {homeData[0].heatEmissions} kg CO2</p>
                <p>
                  Vehicle emissions: {travelData[0].vehicleEmissions} kg CO2
                </p>
                <p>
                  Public Transit emissions:{' '}
                  {travelData[0].publicTransitEmissions} kg CO2
                </p>
                <p>Plane emissions: {travelData[0].planeEmissions} kg CO2</p>
              </div>
              <p className="total">
                Your total Carbon Footprint:{' '}
                {homeData[0].heatEmissions +
                  homeData[0].electricityEmissions +
                  homeData[0].waterEmissions +
                  travelData[0].vehicleEmissions +
                  travelData[0].publicTransitEmissions +
                  travelData[0].planeEmissions}{' '}
                kg CO2
              </p>
            </div>
          ) : (
            <h2 className="no-info-title">
              You haven't calculated your carbon footprint yet!
            </h2>
          )}
        </div>

        <div className="graph">{/* GRAPH GOES HERE */}</div>
      </section>
      <section>
        {homeData.length || travelData.length ? <Pledges /> : ''}
      </section>
    </div>
  );
};

export default MyFootprint;
