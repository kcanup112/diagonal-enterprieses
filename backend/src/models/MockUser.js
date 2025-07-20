const { mockDB } = require('../config/mockDatabase');

class User {
    static async createTable() {
        console.log('Users table ready (mock)');
    }

    static async create(userData) {
        const user = {
            id: mockDB.nextUserId++,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            created_at: new Date(),
            updated_at: new Date()
        };
        mockDB.users.push(user);
        return user;
    }

    static async findByEmail(email) {
        return mockDB.users.find(user => user.email === email);
    }

    static async findById(id) {
        return mockDB.users.find(user => user.id === id);
    }

    static async getAll() {
        return mockDB.users.map(user => ({
            id: user.id,
            username: user.username,
            email: user.email,
            created_at: user.created_at
        }));
    }
}

module.exports = User;
