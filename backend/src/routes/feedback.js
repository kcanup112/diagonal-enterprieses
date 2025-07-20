const express = require('express');
const router = express.Router();
const {
    getAllFeedback,
    getApprovedFeedback,
    getFeedbackById,
    createFeedback,
    approveFeedback,
    deleteFeedback,
    getAverageRating
} = require('../controllers/feedbackController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.get('/approved', getApprovedFeedback);
router.get('/rating', getAverageRating);
router.post('/', createFeedback);

// Protected routes (for admin)
router.get('/', authenticateToken, getAllFeedback);
router.get('/:id', authenticateToken, getFeedbackById);
router.put('/:id/approve', authenticateToken, approveFeedback);
router.delete('/:id', authenticateToken, deleteFeedback);

module.exports = router;
