const mongoose = require('mongoose');

const OwnerFeedbackSchema = new mongoose.Schema({
  name: String,
  contact: String,
  city: String,
  pgCount: String,
  problems: [String],
  featureRatings: Object,
  pricingModel: String,
  subscriptionFee: String,
  recommend: String,
  suggestions: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OwnerFeedback', OwnerFeedbackSchema);