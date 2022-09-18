import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';
import Confetti from 'react-dom-confetti';

import { QUERY_ME } from '../utils/queries';
import { REMOVE_PLEDGE } from '../utils/mutations';
import {
  removePledgeId,
  getCompletedPledgeIds,
  completePledgeIds,
} from '../utils/localStorage';

const MyPledges = () => {
  const { data, loading } = useQuery(QUERY_ME);
  const myPledges = data?.me.pledgeData || [];

  const [completedPledgeIds, setCompletedPledgeIds] = useState(
    getCompletedPledgeIds()
  );

  useEffect(() => {
    return () => completePledgeIds(completedPledgeIds);
  });

  const [active, setActive] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

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
    refetchQueries: [{ query: QUERY_ME }],
  });

  const handleCompletedPledge = async (pledgeId) => {
    const markComplete = myPledges.find((pledge) => pledge._id === pledgeId);

    try {
      setCompletedPledgeIds([...completedPledgeIds, markComplete._id]);
      setActive(true);
    } catch (err) {
      console.error(err);
    }
  };

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
        <div key={pledge._id}>
          <span onClick={() => handleDeletePledge(pledge._id)}>
            {' '}
            <Icon
              icon="akar-icons:circle-x-fill"
              color="#243B4A"
              width="20"
              height="20"
            />
          </span>
          <h3>
            <Icon icon={pledge.icon} color="#243B4A" width="20" height="20" />
            {pledge.action}
          </h3>
          <p>{pledge.description}</p>
          <a href={pledge.link} target="_blank" rel="noopener noreferrer">
            Learn more about this action
          </a>
          <button onClick={() => handleCompletedPledge(pledge._id)}>
            {completedPledgeIds?.some(
              (completedPledgeId) => completedPledgeId === pledge._id
            )
              ? 'Complete!'
              : 'Mark as Complete'}
          </button>
          <Confetti active={active} config={config} />
        </div>
      ))}
    </div>
  );
};

export default MyPledges;
