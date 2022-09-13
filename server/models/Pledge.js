const { Schema, model } = require('mongoose');

const pledgeSchema = new Schema({
  action: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Pledge = model('Pledge', pledgeSchema);

module.exports = Pledge;
