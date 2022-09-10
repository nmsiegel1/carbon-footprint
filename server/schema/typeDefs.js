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

  type Pledge {
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

  }
`;

module.exports = typeDefs;
