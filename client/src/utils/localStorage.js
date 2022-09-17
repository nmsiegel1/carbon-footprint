export const getSavedPledgeIds = () => {
  const savedPledgeIds = localStorage.getItem('saved_pledges')
    ? JSON.parse(localStorage.getItem('saved_pledges'))
    : [];

  return savedPledgeIds;
};

export const savePledgeIds = (pledgeIdArr) => {
  if (pledgeIdArr.length) {
    localStorage.setItem('saved_pledges', JSON.stringify(pledgeIdArr));
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

export const getCompletedPledgeIds = () => {
  const completedPledgeIds = localStorage.getItem('completed_pledges')
    ? JSON.parse(localStorage.getItem('completed_pledges'))
    : [];

  return completedPledgeIds;
};

export const completePledgeIds = (completedArr) => {
  if (completedArr.length) {
    localStorage.setItem('completed_pledges', JSON.stringify(completedArr));
  } else {
    localStorage.removeItem('completed_pledges');
  }
};
