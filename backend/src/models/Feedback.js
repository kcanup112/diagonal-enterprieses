const { pool } = require('../config/database');

class Feedback {
    static async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS feedback (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                rating INTEGER CHECK (rating >= 1 AND rating <= 5),
                message TEXT NOT NULL,
                service_type VARCHAR(100),
                is_approved BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(query);
    }

    static async create(feedbackData) {
        const { name, email, rating, message, service_type } = feedbackData;
        const query = `
            INSERT INTO feedback (name, email, rating, message, service_type)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const result = await pool.query(query, [name, email, rating, message, service_type]);
        return result.rows[0];
    }

    static async getAll() {
        const query = 'SELECT * FROM feedback ORDER BY created_at DESC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async getApproved() {
        const query = 'SELECT * FROM feedback WHERE is_approved = true ORDER BY created_at DESC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async getById(id) {
        const query = 'SELECT * FROM feedback WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async approve(id) {
        const query = `
            UPDATE feedback 
            SET is_approved = true, updated_at = CURRENT_TIMESTAMP
            WHERE id = $1
            RETURNING *
        `;
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'DELETE FROM feedback WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async getAverageRating() {
        const query = 'SELECT AVG(rating) as average_rating FROM feedback WHERE is_approved = true';
        const result = await pool.query(query);
        return result.rows[0];
    }
}

module.exports = Feedback;
