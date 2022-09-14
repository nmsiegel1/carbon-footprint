import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      homeData {
        _id
        waterEmissions
        electricityEmissions
        heatEmissions
      }
      travelData {
        _id
        vehicleEmissions
        publicTransitEmissions
        planeEmissions
      }
      pledgeData {
        _id
        action
        description
        icon
        link
      }
    }
  }
`;

export const QUERY_PLEDGES = gql`
query Pledges {
    pledges {
      _id
      action
      description
      icon
      link
    }
  }

`;

// OR IS IT
// pledges {
//   _id
//   action
//   description
//   icon
//   link
// }
