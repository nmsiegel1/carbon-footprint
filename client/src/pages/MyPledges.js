import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import { REMOVE_PLEDGE } from '../utils/mutations';
import { removePledgeId } from '../utils/localStorage';

const MyPledges = () => {
  const { data, loading } = useQuery(QUERY_ME);
  const myPledges = data?.me.pledgeData || [];

  const [removePledge] = useMutation(REMOVE_PLEDGE, {
    update(cache) {
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, pledgeData: [...me.pledgeData] } },
        });
      } catch (e) {
        console.warn('Pledge deleted by user!');
      }
    },
  });

  // create function that accepts the pledges's mongo _id value as param and deletes the pledge from the database
  const handleDeletePledge = async (pledgeId) => {
    try {
      await removePledge({
        variables: { pledgeData: pledgeId },
      });
      // upon success remove pledgeId from localStorage
      removePledgeId(pledgeId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h2>
        {myPledges.length ? 'My Pledges' : "You haven't saved any pledges yet!"}
      </h2>

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
          <button onClick={() => handleDeletePledge(pledge._id)}>
            Remove Pledge
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyPledges;
