const mongoose = require('mongoose');

const { Schema } = mongoose;

const homeSchema = new Schema({
  waterEmissions: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
  electricityEmissions: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
  heatEmissions: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
});

module.exports = homeSchema;
