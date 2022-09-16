import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        }
    }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
         _id
        username
        email
        }
    }
}
`;

export const ADD_TRAVEL = gql`
    mutation addTravel($vehicleEmissions: Int!, $publicTransitEmissions: Int!, $planeEmissions: Int!) {
    addTravel(vehicleEmissions: $vehicleEmissions, publicTransitEmissions: $publicTransitEmissions, planeEmissions: $planeEmissions) {
        _id
        username
        email
        travelData {
         _id
        vehicleEmissions
        publicTransitEmissions
        planeEmissions
        }
    }
}
`;

export const ADD_HOME = gql`
    mutation addHome($waterEmissions: Int!, $electricityEmissions: Int!, $heatEmissions: Int!) {
    addHome(waterEmissions: $waterEmissions, electricityEmissions: $electricityEmissions, heatEmissions: $heatEmissions) {
        _id
        username
        email
        homeData {
        _id
        waterEmissions
        electricityEmissions
        heatEmissions
        }
    }
}
`;

export const ADD_PLEDGE = gql`
    mutation addPledge($pledgeData: [ID]) {
    addPledge(pledgeData: $pledgeData) {
        _id
        username
        email
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

export const REMOVE_PLEDGE = gql`
mutation removePledge($pledgeData: ID) {
  removePledge(pledgeData: $pledgeData) {
    username
    email
    pledgeData {
      _id
    }
  }
}
`;