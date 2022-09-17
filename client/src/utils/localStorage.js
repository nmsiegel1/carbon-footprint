export const getSavedPledgeIds = () => {
  const savedPledgeIds = localStorage.getItem('saved_pledges')
    ? JSON.parse(localStorage.getItem('saved_pledges'))
    : [];

  return savedPledgeIds;
};

export const savePledgeIds = (pledgeData) => {
  if (pledgeData.length) {
    localStorage.setItem('saved_pledges', JSON.stringify(pledgeData));
  } else {
    localStorage.removeItem('saved_pledges');
  }
};

export const removePledgeId = (pledgeId) => {
  const savedPledgeIds = localStorage.getItem('saved_pledges')
    ? JSON.parse(localStorage.getItem('saved_pledges'))
    : null;

  if (!savedPledgeIds) {
    return false;
  }

  const updatedSavedPledgeIds = savedPledgeIds?.filter(
    (savedPledgeId) => savedPledgeId !== pledgeId
  );
  localStorage.setItem('saved_pledges', JSON.stringify(updatedSavedPledgeIds));

  return true;
};
