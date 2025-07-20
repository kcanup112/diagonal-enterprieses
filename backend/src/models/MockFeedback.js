const { mockDB } = require('../config/mockDatabase');

class Feedback {
    static async createTable() {
        console.log('Feedback table ready (mock)');
    }

    static async create(feedbackData) {
        const feedback = {
            id: mockDB.nextFeedbackId++,
            name: feedbackData.name,
            email: feedbackData.email,
            rating: feedbackData.rating,
            message: feedbackData.message,
            service_type: feedbackData.service_type,
            is_approved: false,
            created_at: new Date(),
            updated_at: new Date()
        };
        mockDB.feedback.push(feedback);
        return feedback;
    }

    static async getAll() {
        return mockDB.feedback;
    }

    static async getApproved() {
        return mockDB.feedback.filter(feedback => feedback.is_approved);
    }

    static async getById(id) {
        return mockDB.feedback.find(feedback => feedback.id === parseInt(id));
    }

    static async approve(id) {
        const index = mockDB.feedback.findIndex(feedback => feedback.id === parseInt(id));
        if (index !== -1) {
            mockDB.feedback[index].is_approved = true;
            mockDB.feedback[index].updated_at = new Date();
            return mockDB.feedback[index];
        }
        return null;
    }

    static async delete(id) {
        const index = mockDB.feedback.findIndex(feedback => feedback.id === parseInt(id));
        if (index !== -1) {
            const deletedFeedback = mockDB.feedback[index];
            mockDB.feedback.splice(index, 1);
            return deletedFeedback;
        }
        return null;
    }

    static async getAverageRating() {
        const approvedFeedback = mockDB.feedback.filter(feedback => feedback.is_approved);
        if (approvedFeedback.length === 0) {
            return { average_rating: 0 };
        }
        const total = approvedFeedback.reduce((sum, feedback) => sum + feedback.rating, 0);
        return { average_rating: total / approvedFeedback.length };
    }
}

module.exports = Feedback;
