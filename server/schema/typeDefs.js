const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Home {
    _id: ID
    size: Number
    electricity: Number
    water: Number
  }

  type Travel {
    _id: ID
    vehicleMilesPerYear: Number
    vehicleMilesPerGallon: Number
    publicTravel: Number
    airTravel: Number
  }

  type Pledge {
    _id: ID
    pledgeId: String
    action: String
    description: String
    image: String
    link: String
  }

  input savedPledgeInput {
    pledgeId: String
    action: String
    description: String
    image: String
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
    addTravel(vehicleMilesPerYear: Number!, vehicleMilesPerGallon: Number!): Travel
    addHome(size: Number!, electricity: Number!, water: Number!): Home
  }
`;

module.exports = typeDefs;
