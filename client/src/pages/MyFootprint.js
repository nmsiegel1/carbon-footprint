import React from 'react';
import { Link } from 'react-router-dom';
import Pledges from '../components/Pledges';
import { Graph } from '../components/Graph';
import { addCommas } from '../utils/helpers.js';
import './assets/css/footprint.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const MyFootprint = () => {
  const { data, loading } = useQuery(QUERY_ME);

  const { username, homeData, travelData } = data?.me || [];

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="footprint">
      {Auth.loggedIn() ? (
        <div>
          <section className="my-footprint">
            <div>
              {homeData.length || travelData.length ? (
                <div className="footprint-data">
                  <div className="calculations">
                    <h2 className="footprint-title">
                      {username}'s Carbon Footprint
                    </h2>
                    <p>
                      Water emissions: {addCommas(homeData[0].waterEmissions)}{' '}
                      kg CO2
                    </p>
                    <p>
                      Electricity emissions:{' '}
                      {addCommas(homeData[0].electricityEmissions)} kg CO2
                    </p>
                    <p>
                      Heat emissions: {addCommas(homeData[0].heatEmissions)} kg
                      CO2
                    </p>
                    <p>
                      Vehicle emissions:{' '}
                      {addCommas(travelData[0].vehicleEmissions)} kg CO2
                    </p>
                    <p>
                      Public Transit emissions:{' '}
                      {addCommas(travelData[0].publicTransitEmissions)} kg CO2
                    </p>
                    <p>
                      Plane emissions: {addCommas(travelData[0].planeEmissions)}{' '}
                      kg CO2
                    </p>
                    <p className="total">
                      Your total Carbon Footprint:{' '}
                      {addCommas(
                        homeData[0].heatEmissions +
                          homeData[0].electricityEmissions +
                          homeData[0].waterEmissions +
                          travelData[0].vehicleEmissions +
                          travelData[0].publicTransitEmissions +
                          travelData[0].planeEmissions
                      )}{' '}
                      kg CO2
                    </p>
                  </div>
                  <div className="graph">
                    <Graph graphData={{ homeData, travelData }} />
                  </div>
                </div>
              ) : (
                <h2 className="no-info-title">
                  You haven't calculated your carbon footprint yet!
                </h2>
              )}
            </div>
          </section>
          <section>
            {homeData.length || travelData.length ? <Pledges /> : ''}
          </section>
        </div>
      ) : (
        <div className="not-logged-in">
          <h2 className="no-info-title">
            Log in to see your carbon footprint!
          </h2>
          <Link to="/login">
            <button type="submit">Log In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyFootprint;
