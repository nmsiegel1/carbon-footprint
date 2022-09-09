const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Home {
    size: Number,
    energy: Number,
    water: Number
  }

`;

module.exports = typeDefs;