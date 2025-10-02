const mongoose = require('mongoose');

const OwnerFeedbackSchema = new mongoose.Schema({
  // Profile Information
  name: String,
  email: String,
  phone: String,
  city: String,
  propertyType: String,
  propertyCount: String,
  
  // Challenges
  biggestChallenge: String,
  otherChallenge: String,
  
  // Platform Value
  switchReasons: [String],
  otherSwitchReason: String,
  
  // Features
  topFeatures: [String],
  otherFeature: String,
  
  // Success Metrics
  readyToPay: String,
  marketingSpend: String,
  recommendation: Number,
  timing: String,
  
  // Analytics & Metadata
  completionTime: Number,
  language: String,
  submittedAt: String,
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OwnerFeedback', OwnerFeedbackSchema);