import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLEDGES } from '../../utils/queries';

const Pledges = () => {
  const data = useQuery(QUERY_PLEDGES);

  const pledges = data.pledges || [];

  return (
    <div>
      These are pledges to choose from
      <h2>Pledge to reduce your carbon footprint!</h2>
      {pledges.length(<div>{pledges.action}</div>)}
    </div>
  );
};

export default Pledges;
