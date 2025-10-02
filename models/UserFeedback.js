const mongoose = require('mongoose');

const UserFeedbackSchema = new mongoose.Schema({
  name: String,
  age: String,
  occupation: String,
  city: String,
  mainFactor: String,
  factorRatings: Object,
  bookingMethod: String,
  paymentMode: String,
  appInterest: String,
  badExperience: String,
  goodExperience: String,
  suggestions: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserFeedback', UserFeedbackSchema);