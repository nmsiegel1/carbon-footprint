import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Graph(graphData) {
  let electricityEmissions =
    graphData.graphData.homeData[0].electricityEmissions;
  let vehicleEmissions = graphData.graphData.travelData[0].vehicleEmissions;
  let planeEmissions = graphData.graphData.travelData[0].planeEmissions;
  let waterEmissions = graphData.graphData.homeData[0].waterEmissions;
  let heatEmissions = graphData.graphData.homeData[0].heatEmissions;
  let publicTransitEmissions =
    graphData.graphData.travelData[0].publicTransitEmissions;

  const data = {
    labels: [
      'Electricity Emissions',
      'Vehicle Emissions',
      'Plane Emissions',
      'Water Emissions',
      'Heat Emissions',
      'Public Transit Emissions',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [
          electricityEmissions,
          vehicleEmissions,
          planeEmissions,
          waterEmissions,
          heatEmissions,
          publicTransitEmissions,
        ],
        backgroundColor: [
          'rgba(162, 213, 159, 1)',
          'rgba(98, 187, 160, 1)',
          'rgba(72, 139, 118, 1)',
          'rgba(27, 80, 109, 1)',
          'rgba(44, 130, 179, 1)',
          'rgba(155, 209, 229, 1)',
        ],
        borderColor: [
          'rgba(36, 59, 74, 1)',
          'rgba(36, 59, 74, 1)',
          'rgba(36, 59, 74, 1)',
          'rgba(36, 59, 74, 1)',
          'rgba(36, 59, 74, 1)',
          'rgba(36, 59, 74, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '40vh',
        width: '40vw',
      }}
    >
      <Doughnut
        data={data}
        height={'400px'}
        options={{
          maintainAspectRatio: false,
          resizeDelay: 0,
          responsive: true,
        }}
      ></Doughnut>
    </div>
  );
}
