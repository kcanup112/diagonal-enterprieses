const { mockDB } = require('../config/mockDatabase');

class Service {
    static async createTable() {
        console.log('Services table ready (mock)');
    }

    static async create(serviceData) {
        const service = {
            id: mockDB.nextServiceId++,
            title: serviceData.title,
            description: serviceData.description,
            category: serviceData.category,
            price: serviceData.price,
            image_url: serviceData.image_url,
            features: serviceData.features,
            is_active: true,
            created_at: new Date(),
            updated_at: new Date()
        };
        mockDB.services.push(service);
        return service;
    }

    static async getAll() {
        return mockDB.services.filter(service => service.is_active);
    }

    static async getByCategory(category) {
        return mockDB.services.filter(service => service.category === category && service.is_active);
    }

    static async getById(id) {
        return mockDB.services.find(service => service.id === parseInt(id) && service.is_active);
    }

    static async update(id, serviceData) {
        const index = mockDB.services.findIndex(service => service.id === parseInt(id));
        if (index !== -1) {
            mockDB.services[index] = {
                ...mockDB.services[index],
                ...serviceData,
                updated_at: new Date()
            };
            return mockDB.services[index];
        }
        return null;
    }

    static async delete(id) {
        const index = mockDB.services.findIndex(service => service.id === parseInt(id));
        if (index !== -1) {
            mockDB.services[index].is_active = false;
            return mockDB.services[index];
        }
        return null;
    }
}

module.exports = Service;
