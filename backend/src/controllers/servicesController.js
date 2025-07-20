const Service = require('../models/MockService');

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.getAll();
        res.status(200).json(services);
    } catch (error) {
        console.error('Error getting services:', error);
        res.status(500).json({ message: 'Error retrieving services', error: error.message });
    }
};

// Get a service by ID
exports.getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.getById(id);
        if (service) {
            res.status(200).json(service);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        console.error('Error getting service:', error);
        res.status(500).json({ message: 'Error retrieving service', error: error.message });
    }
};

// Get services by category
exports.getServicesByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const services = await Service.getByCategory(category);
        res.status(200).json(services);
    } catch (error) {
        console.error('Error getting services by category:', error);
        res.status(500).json({ message: 'Error retrieving services by category', error: error.message });
    }
};

// Create a new service
exports.createService = async (req, res) => {
    try {
        const serviceData = req.body;
        const newService = await Service.create(serviceData);
        res.status(201).json(newService);
    } catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ message: 'Error creating service', error: error.message });
    }
};

// Update a service
exports.updateService = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceData = req.body;
        const updatedService = await Service.update(id, serviceData);
        if (updatedService) {
            res.status(200).json(updatedService);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: 'Error updating service', error: error.message });
    }
};

// Delete a service
exports.deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedService = await Service.delete(id);
        if (deletedService) {
            res.status(200).json({ message: 'Service deleted successfully' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: 'Error deleting service', error: error.message });
    }
};