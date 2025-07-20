const { pool } = require('./database');
const User = require('../models/User');
const Service = require('../models/Service');
const Feedback = require('../models/Feedback');

const initializeDatabase = async () => {
    try {
        console.log('Initializing database tables...');
        
        // Create tables
        await User.createTable();
        await Service.createTable();
        await Feedback.createTable();
        
        console.log('Database tables created successfully!');
        
        // Insert sample services
        const sampleServices = [
            {
                title: 'Residential 3D Design & Construction',
                description: 'Complete residential design and construction services with 3D modeling and visualization. We create stunning homes with modern architecture and efficient construction techniques.',
                category: '3d-construction',
                price: 150000.00,
                image_url: '/images/3d-construction.jpg',
                features: ['3D Modeling', 'Architectural Design', 'Construction Management', 'Interior Design', 'Project Planning']
            },
            {
                title: 'Repair & Maintenance Services',
                description: 'Professional repair and maintenance services for residential and commercial properties. From plumbing to electrical work, we handle all your maintenance needs.',
                category: 'repair-maintenance',
                price: 5000.00,
                image_url: '/images/repair-maintenance.jpg',
                features: ['Plumbing Repair', 'Electrical Work', 'HVAC Maintenance', 'Painting', 'General Repairs']
            },
            {
                title: 'Complete Home Services',
                description: 'Comprehensive home services including cleaning, gardening, security systems, and smart home installations. Making your home comfortable and secure.',
                category: 'home-services',
                price: 2500.00,
                image_url: '/images/home-services.jpg',
                features: ['House Cleaning', 'Gardening', 'Security Systems', 'Smart Home Setup', 'Maintenance Planning']
            },
            {
                title: 'Commercial Construction',
                description: 'Professional commercial construction services for offices, retail spaces, and industrial buildings. Quality construction with timely delivery.',
                category: '3d-construction',
                price: 500000.00,
                image_url: '/images/commercial-construction.jpg',
                features: ['Commercial Design', 'Project Management', 'Quality Control', 'Timely Delivery', 'Cost Effective']
            }
        ];

        for (const service of sampleServices) {
            try {
                await Service.create(service);
            } catch (error) {
                console.log('Service already exists or error creating:', error.message);
            }
        }

        // Insert sample feedback
        const sampleFeedback = [
            {
                name: 'John Smith',
                email: 'john@example.com',
                rating: 5,
                message: 'Excellent service! The team was professional and delivered exactly what we wanted. Highly recommend Diagonal Enterprises.',
                service_type: '3d-construction',
                is_approved: true
            },
            {
                name: 'Sarah Johnson',
                email: 'sarah@example.com',
                rating: 4,
                message: 'Great repair service. Quick response and quality work. Very satisfied with their maintenance services.',
                service_type: 'repair-maintenance',
                is_approved: true
            },
            {
                name: 'Michael Brown',
                email: 'michael@example.com',
                rating: 5,
                message: 'Amazing home services! They transformed our house into a smart home. Professional team and great results.',
                service_type: 'home-services',
                is_approved: true
            }
        ];

        for (const feedback of sampleFeedback) {
            try {
                await Feedback.create(feedback);
            } catch (error) {
                console.log('Feedback already exists or error creating:', error.message);
            }
        }

        console.log('Sample data inserted successfully!');
        
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

module.exports = { initializeDatabase };
