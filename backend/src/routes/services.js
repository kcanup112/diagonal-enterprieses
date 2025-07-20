const express = require('express');
const router = express.Router();
const {
    getAllServices,
    getServiceById,
    getServicesByCategory,
    createService,
    updateService,
    deleteService
} = require('../controllers/servicesController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.get('/category/:category', getServicesByCategory);

// Protected routes (for admin)
router.post('/', authenticateToken, createService);
router.put('/:id', authenticateToken, updateService);
router.delete('/:id', authenticateToken, deleteService);

module.exports = router;
