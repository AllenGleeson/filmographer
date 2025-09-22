const express = require('express');
const router = express.Router();

// Import route modules
const apiRoutes = require('./api');

// Mount routes
router.use('/api', apiRoutes);

// Future route modules can be added here
// Example:
// router.use('/admin', require('./admin'));

module.exports = router;
