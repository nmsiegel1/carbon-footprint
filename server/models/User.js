const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const homeSchema = require('./Home');
const travelSchema = require('./Travel');
const Pledge = require('./Pledge');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must be a valid email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  homeData: [homeSchema],
  travelData: [travelSchema],
  pledgeData: [{
    type: Schema.Types.ObjectId,
    ref: 'Pledge'
  }],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);
module.exports = User;
