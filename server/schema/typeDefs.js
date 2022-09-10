const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Home {
    size: Number
    electricity: Number
    water: Number
  }

  type Travel {
    vehicleMilesPerYear: Number
    vehicleMilesPerGallon: Number
    publicTravel: Number
    airTravel: Number
  }

  type User {
    _id: ID
    username: String
    email: String
    homeData: [Home]
    travelData: [Travel]
    pledgeData: [Pledge]
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
