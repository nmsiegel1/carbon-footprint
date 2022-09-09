const mongoose = require('mongoose');

const { Schema } = mongoose;

const homeSchema = new Schema({
  size: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
  energy: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
  water: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;