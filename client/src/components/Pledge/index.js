import React from 'react';
import { Icon } from '@iconify/react';

const Pledge = (props) => {
  const pledge = props.pledge;

  return (
    <div>
      <div>
        <h3>
          <Icon icon={pledge.icon} color="#243B4A" width="20" height="20" />
          {pledge.action}
        </h3>
        <p>{pledge.description}</p>
        <a href={pledge.link} target="_blank" rel="noopener noreferrer">
          Learn more about this action
        </a>
        <button>Make This Pledge</button>
      </div>
    </div>
  );
};

export default Pledge;
