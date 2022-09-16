import React from 'react';
import Pledges from '../components/Pledges';
import './assets/css/footprint.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const MyFootprint = () => {
  const { data } = useQuery(QUERY_ME);
  console.log('data', data);
  const { username, homeData, travelData } = data?.me || [];

  console.log(username);
  console.log(homeData);
  console.log(travelData);
  return (
    <div className="footprint">
      <section className="my-footprint">
        <div className="footprint-data">
          <h2 className="footprint-title">{username}'s Carbon Footprint</h2>
          {/* <div>
            <p>Water emissions: {homeData[0].waterEmissions}</p>
            <p>Electricity emissions: {homeData[0].electricityEmissions}</p>
            <p>Heat emissions: {homeData[0].heatEmissions}</p>
          </div>
          <div>
            <p>Vehicle emissions: {travelData[0].vehicleEmissions}</p>
            <p>Public Transit emissions: {travelData[0].publicEmissions}</p>
            <p>Plane emissions: {travelData[0].planeEmissions}</p>
          </div> */}

          {/* {homeData.map((data) => (
            <div key={data._id}>
              <p>Water emissions: {data.waterEmissions}</p>
              <p>Electricity emissions: {data.electricityEmissions}</p>
              <p>Heat emissions: {data.heatEmissions}</p>
            </div>
          ))}
          {travelData.map((data) => (
            <div key={data._id}>
              <p>Vehicle emissions: {data.vehicleEmissions}</p>
              <p>Public Transit emissions: {data.publicEmissions}</p>
              <p>Plane emissions: {data.planeEmissions}</p>
            </div>
          ))} */}
          <h3 className="total">Your total Carbon Footprint: </h3>
        </div>
        {/* <div className="graph">GRAPH GOES HERE</div> */}
      </section>
      <section>
        <Pledges />
      </section>
    </div>
  );
};

export default MyFootprint;
