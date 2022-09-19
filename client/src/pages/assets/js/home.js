import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Home', 'Travel'],
  datasets: [
    {
      label: 'The Average American Home and Travel Carbon Footprint',
      data: [300, 100],
      backgroundColor: ['rgb(36, 59, 74)', 'rgb(86, 110, 61)'],
      hoverOffset: 4,
    },
  ],
  options: {
    responsive: true,
  },
};

const Example = () => {
  return <Pie data={data} />;
};

export default Example;
