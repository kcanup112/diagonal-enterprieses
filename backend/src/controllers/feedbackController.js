const Feedback = require('../models/MockFeedback');

// Get all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.getAll();
        res.status(200).json(feedback);
    } catch (error) {
        console.error('Error getting feedback:', error);
        res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
    }
};

// Get approved feedback only
exports.getApprovedFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.getApproved();
        res.status(200).json(feedback);
    } catch (error) {
        console.error('Error getting approved feedback:', error);
        res.status(500).json({ message: 'Error retrieving approved feedback', error: error.message });
    }
};

// Get feedback by ID
exports.getFeedbackById = async (req, res) => {
    const { id } = req.params;
    try {
        const feedback = await Feedback.getById(id);
        if (feedback) {
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        console.error('Error getting feedback:', error);
        res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
    }
};

// Create new feedback
exports.createFeedback = async (req, res) => {
    try {
        const feedbackData = req.body;
        const newFeedback = await Feedback.create(feedbackData);
        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback: newFeedback
        });
    } catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
};

// Approve feedback
exports.approveFeedback = async (req, res) => {
    const { id } = req.params;
    try {
        const approvedFeedback = await Feedback.approve(id);
        if (approvedFeedback) {
            res.status(200).json({
                message: 'Feedback approved successfully',
                feedback: approvedFeedback
            });
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        console.error('Error approving feedback:', error);
        res.status(500).json({ message: 'Error approving feedback', error: error.message });
    }
};

// Delete feedback
exports.deleteFeedback = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedFeedback = await Feedback.delete(id);
        if (deletedFeedback) {
            res.status(200).json({ message: 'Feedback deleted successfully' });
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        console.error('Error deleting feedback:', error);
        res.status(500).json({ message: 'Error deleting feedback', error: error.message });
    }
};

// Get average rating
exports.getAverageRating = async (req, res) => {
    try {
        const result = await Feedback.getAverageRating();
        res.status(200).json({
            averageRating: parseFloat(result.average_rating) || 0
        });
    } catch (error) {
        console.error('Error getting average rating:', error);
        res.status(500).json({ message: 'Error calculating average rating', error: error.message });
    }
};
