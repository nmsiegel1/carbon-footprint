const mongoose = require('mongoose');

const { Schema } = mongoose;

const travelSchema = new Schema({
    vehicleMilesPerYear: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },

    vehicleMilesPerGallon: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },

    publicTravel: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },

    airTravel: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    }
})


const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;