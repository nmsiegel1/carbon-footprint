const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Home {
    _id: ID
    waterEmissions: Number
    electricityEmissions: Number
    heatEmissions: Number
  }

  type Travel {
    _id: ID
    vehicleEmissions: Number
    publicTransitEmissions: Number
    planeEmissions: Number
  }

  type Pledge {
    _id: ID
    pledgeId: String
    action: String
    description: String
    icon: String
    link: String
  }

  input savedPledgeInput {
    pledgeId: String
    action: String
    description: String
    icon: String
    link: String
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

  type Query {
    me: User
    pledges: (username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePledge(input: savedPledgeInput): User
    removePledge(pledgeId: String!): User
    addTravel(vehicleEmissions: Number!, publicTransitEmissions: Number!, planeEmissions: Number!): Travel
    addHome(waterEmissions: Number!, electricityEmissions: Number!, heatEmissions: Number!): Home
  }
`;

module.exports = typeDefs;
