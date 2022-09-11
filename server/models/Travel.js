const mongoose = require('mongoose');

const { Schema } = mongoose;

const travelSchema = new Schema({
    vehicleEmissions: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },

    publicTransitEmissions: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },

    planeEmissions: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
})

module.exports = travelSchema;