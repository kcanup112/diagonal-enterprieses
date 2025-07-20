const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (example)
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
