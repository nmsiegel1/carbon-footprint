import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_PLEDGES, QUERY_ME } from '../../utils/queries';
import { ADD_PLEDGE } from '../../utils/mutations';

const Pledges = () => {
  const { data } = useQuery(QUERY_PLEDGES);
  const pledges = data?.pledges || [];

  const { pledgeData } = useQuery(QUERY_ME);
  console.log('pledgeData', pledgeData);

  const [addPledge] = useMutation(ADD_PLEDGE, {
    update(cache) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, pledgeData: [...me.pledgeData] } },
        });
      } catch (e) {
        console.warn(e);
      }
    },
  });

  // create function to handle saving a pledge to our database
  const handleSavedPledge = async (pledgeId) => {
    // get access to user

    try {
      await addPledge({
        variables: { pledgeData: pledgeId },
      });
      console.log('pledgeId', pledgeId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Take action to reduce your carbon footprint!</h2>
      {pledges.map((pledge) => (
        <div key={pledge._id}>
          <h3>
            <Icon icon={pledge.icon} color="#243B4A" width="20" height="20" />
            {pledge.action}
          </h3>
          <p>{pledge.description}</p>
          <a href={pledge.link} target="_blank" rel="noopener noreferrer">
            Learn more about this action
          </a>
          <button onClick={() => handleSavedPledge(pledge._id)}>
            {/* {savedPledgeIds?.some(
                        (savedPledgeId) => savedPledgeId === pledge._id
                      )
                        ? "Pledge saved!"
                        : "Make This Pledge"} */}
            Make This Pledge
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pledges;
