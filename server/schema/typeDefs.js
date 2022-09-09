const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Home {
    size: Number,
    energy: Number,
    water: Number
  }

  type Travel {
    vehicleMilesPerYear: Number,
    vehicleMilesPerGallon: Number,
    publicTravel: Number,
    airTravel: Number
  }

`;

module.exports = typeDefs;