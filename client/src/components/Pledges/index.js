import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';
import './pledges.css';

import { QUERY_PLEDGES, QUERY_ME } from '../../utils/queries';
import { ADD_PLEDGE } from '../../utils/mutations';
import { savePledgeIds, getSavedPledgeIds } from '../../utils/localStorage';

const Pledges = () => {
  // get data from pledge query
  const { data } = useQuery(QUERY_PLEDGES);
  // target pledge data for mapping
  const pledges = data?.pledges || [];

  // state for targeting ids to change text of button
  const [savedPledgeIds, setSavedPledgeIds] = useState(getSavedPledgeIds());

  useEffect(() => {
    return () => savePledgeIds(savedPledgeIds);
  });

  // add pledge mutation
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

  // function to handle saving a pledge to our database
  const handleSavedPledge = async (pledgeId) => {
    // find pledge in the in state by matching id
    const pledgeToSave = pledges.find((pledge) => pledge._id === pledgeId);

    try {
      await addPledge({
        // save to array
        variables: { pledgeData: pledgeId },
      });

      // save ids to local storage to change text on button
      setSavedPledgeIds([...savedPledgeIds, pledgeToSave._id]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pledge-main">
      <h2>Take action to reduce your carbon footprint!</h2>
      <p className="pledge-info">
        Make pledges to commit to reducing your carbon footprint. View your
        pledges in the My Pledges section and mark them complete when you
        complete that task.
      </p>
      <div className="pledge-data">
        {pledges.map((pledge) => (
          <div className="pledge" key={pledge._id}>
            <h3 className="pledge-title">
              <Icon icon={pledge.icon} color="#243B4A" width="25" height="25" />
              {'  '}
              {pledge.action}
            </h3>
            <p>{pledge.description}</p>
            <a href={pledge.link} target="_blank" rel="noopener noreferrer">
              Learn more about this pledge
            </a>
            <button
              id={pledge._id}
              className="pledge-btn"
              onClick={() => handleSavedPledge(pledge._id)}
            >
              {savedPledgeIds?.some(
                (savedPledgeId) => savedPledgeId === pledge._id
              )
                ? 'Pledge saved!'
                : 'Make This Pledge'}
            </button>
          </div>
        ))}
      </div>
      <div className="goto-pledge-btn">
        <Link to="/mypledges">
          <button type="submit">See Your Pledges</button>
        </Link>
      </div>
    </div>
  );
};

export default Pledges;
