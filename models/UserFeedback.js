const mongoose = require('mongoose');

const UserFeedbackSchema = new mongoose.Schema({
  // Profile Information
  name: String,
  email: String,
  phone: String,
  city: String,
  occupation: String,
  budget: String,
  referralSource: String,
  friendName: String,
  groupName: String,
  
  // Current Situation
  currentSituation: String,
  otherCurrentSituation: String,
  
  // Pain Points
  mainProblems: [String],
  otherMainProblem: String,
  
  // Platform Features
  importantFeatures: [String],
  otherFeature: String,
  
  // Success Metrics
  willingToPay: String,
  recommendation: Number,
  urgency: String,
  
  // Analytics & Metadata
  language: String,
  completionTime: Number,
  submittedAt: String,
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserFeedback', UserFeedbackSchema);