import React from 'react';
import Pledges from '../components/Pledges';
import './assets/css/footprint.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const MyFootprint = () => {
  const { data } = useQuery(QUERY_ME);
  console.log('data', data);
  const { username, homeData, travelData } = data?.me || [];
  return (
    <div className="footprint">
      <section>
        <h2 className="footprint-title">{username}'s Carbon Footprint</h2>
        {/* <div>
          <p>Water emissions: {homeData.waterEmissions}</p>
          <p>Electricity emissions: {homeData.electricityEmissions}</p>
          <p>Heat emissions: {homeData.heatEmissions}</p>
        </div>
        <div>
          <p>Vehicle emissions: {travelData.vehicleEmissions}</p>
          <p>Public Transit emissions: {travelData.publicEmissions}</p>
          <p>Plane emissions: {travelData.waterEmissions}</p>
        </div> */}
        <h3>Your total Carbon Footprint:</h3>
      </section>
      <section>
        <Pledges />
      </section>
    </div>
  );
};

export default MyFootprint;
