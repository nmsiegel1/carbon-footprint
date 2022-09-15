import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_PLEDGES, QUERY_ME } from '../utils/queries';
import { REMOVE_PLEDGE } from '../utils/mutations';

const MyPledges = () => {
  const data = useQuery(QUERY_ME);
  console.log('data', data);
  const myPledges = data.data.me?.pledgeData || [];
  console.log('my pledges', myPledges);
  // const myPledges = data.
  return (
    <div>
      <h2>My Pledges</h2>

      {myPledges.map((pledge) => (
        <div key={pledge.action}>
          <h3>
            <Icon icon={pledge.icon} color="#243B4A" width="20" height="20" />
            {pledge.action}
          </h3>
          <p>{pledge.description}</p>
          <a href={pledge.link} target="_blank" rel="noopener noreferrer">
            Learn more about this action
          </a>
          <button>Remove Pledge</button>
        </div>
      ))}
    </div>
  );
};

export default MyPledges;
