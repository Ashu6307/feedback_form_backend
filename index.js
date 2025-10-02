const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const OwnerFeedback = require('./models/OwnerFeedback');
const UserFeedback = require('./models/UserFeedback');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://ashu6307:Rita1602@cluster0.hf2iy.mongodb.net/pg-feedback', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});


// Submit feedback
app.post('/api/owner-feedback', async (req, res) => {
  try {
    const feedback = new OwnerFeedback(req.body);
    await feedback.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/user-feedback', async (req, res) => {
  try {
    const feedback = new UserFeedback(req.body);
    await feedback.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all feedback for admin dashboard
app.get('/api/owner-feedback', async (req, res) => {
  try {
    const feedbacks = await OwnerFeedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/user-feedback', async (req, res) => {
  try {
    const feedbacks = await UserFeedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Feedback server running on port 5000');
});
