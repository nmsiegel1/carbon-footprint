import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    'United States',
    'China',
    'Germany',
    'Japan',
    'Russia',
    'Continent of Africa',
    'Conitnent of South America',
  ],
  datasets: [
    {
      label: 'Carbon Emissions in Metric Tons',
      data: [14.24, 7.41, 7.69, 8.51, 10.81, 0.99, 2.31],
      backgroundColor: [
        'rgba(162, 213, 159, 1)',
        'rgba(98, 187, 160, 1)',
        'rgba(72, 139, 118, 1)',
        'rgba(27, 80, 109, 1)',
        'rgba(44, 130, 179, 1)',
        'rgba(155, 209, 229, 1)',
        'rgba(164, 66, 141, 1)',
      ],
      borderColor: [
        'rgba(36, 59, 74, 1)',
        'rgba(36, 59, 74, 1)',
        'rgba(36, 59, 74, 1)',
        'rgba(36, 59, 74, 1)',
        'rgba(36, 59, 74, 1)',
        'rgba(36, 59, 74, 1)',
        'rgba(36, 59, 74, 1)',
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
        'rgba(162, 213, 159, 0.4)',
        'rgba(98, 187, 160, 0.4)',
        'rgba(72, 139, 118, 0.4)',
        'rgba(27, 80, 109, 0.4)',
        'rgba(44, 130, 179, 0.4)',
        'rgba(155, 209, 229, 0.4)',
        'rgba(164, 66, 141, 0.4)',
      ],
    },
  ],
};

const MeanCountry = () => {
  return (
    <div style={{ position: 'relative', height: '40vh', width: '40vw' }}>
      <Bar
        data={data}
        height={'400px'}
        options={{
          maintainAspectRatio: false,
          resizeDelay: 0,
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      ></Bar>
    </div>
  );
};

export default MeanCountry;
