const { pool } = require('../config/database');

class Service {
    static async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS services (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                category VARCHAR(100) NOT NULL,
                price DECIMAL(10, 2),
                image_url VARCHAR(500),
                features TEXT[],
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(query);
    }

    static async create(serviceData) {
        const { title, description, category, price, image_url, features } = serviceData;
        const query = `
            INSERT INTO services (title, description, category, price, image_url, features)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `;
        const result = await pool.query(query, [title, description, category, price, image_url, features]);
        return result.rows[0];
    }

    static async getAll() {
        const query = 'SELECT * FROM services WHERE is_active = true ORDER BY created_at DESC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async getByCategory(category) {
        const query = 'SELECT * FROM services WHERE category = $1 AND is_active = true ORDER BY created_at DESC';
        const result = await pool.query(query, [category]);
        return result.rows;
    }

    static async getById(id) {
        const query = 'SELECT * FROM services WHERE id = $1 AND is_active = true';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async update(id, serviceData) {
        const { title, description, category, price, image_url, features } = serviceData;
        const query = `
            UPDATE services 
            SET title = $1, description = $2, category = $3, price = $4, image_url = $5, features = $6, updated_at = CURRENT_TIMESTAMP
            WHERE id = $7
            RETURNING *
        `;
        const result = await pool.query(query, [title, description, category, price, image_url, features, id]);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'UPDATE services SET is_active = false WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = Service;
