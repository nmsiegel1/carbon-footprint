const { Schema } = require('mongoose');

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

module.exports = pledgeSchema;
