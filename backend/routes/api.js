const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Future API routes will be added here
// Example:
// router.use('/users', require('./users'));
// router.use('/auth', require('./auth'));
// router.use('/projects', require('./projects'));

module.exports = router;
