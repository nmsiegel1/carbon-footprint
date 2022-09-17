import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function Graph(graphData) {

  let electricityEmissions = graphData.graphData.homeData[0].electricityEmissions;
  let vehicleEmissions = graphData.graphData.travelData[0].vehicleEmissions;
  let planeEmissions = graphData.graphData.travelData[0].planeEmissions;
  let waterEmissions = graphData.graphData.homeData[0].waterEmissions;
  let heatEmissions = graphData.graphData.homeData[0].heatEmissions;
  let publicTransitEmissions = graphData.graphData.travelData[0].publicTransitEmissions;


  const data = {
    labels: ['Electricity Emissions', 'Vehicle Emissions', 'Plane Emissions', 'Water Emissions', 'Heat Emissions', 'Public Transit Emissions'],
  datasets: [
    {
      label: '# of Votes',
      data: [electricityEmissions, vehicleEmissions, planeEmissions, waterEmissions, heatEmissions, publicTransitEmissions],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  }

  return (
    <div>
        <Doughnut 
            data={data}
            height={'400px'}
            width={'400px'}
            options={{ maintainAspectRatio: false }}
        >
        </Doughnut>
    </div>
  );
}
