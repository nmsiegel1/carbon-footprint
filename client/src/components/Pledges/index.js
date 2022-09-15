import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLEDGES } from '../../utils/queries';
import Pledge from '../Pledge';

const Pledges = () => {
  const data = useQuery(QUERY_PLEDGES);

  const pledges = data.data?.pledges || [];

  return (
    <div>
      <h2>Pledge to reduce your carbon footprint!</h2>
      <div>
        {pledges.map((pledge) => (
          <div key={pledge.action}>
            <Pledge pledge={pledge} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pledges;
