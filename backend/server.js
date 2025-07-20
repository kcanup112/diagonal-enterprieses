const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./src/config/mockDatabase');

const app = express();
const port = process.env.PORT || 5000;

// Connect to mock database
const startServer = async () => {
    try {
        await connectDB();
        
        const authRoutes = require('./src/routes/auth');
        const servicesRoutes = require('./src/routes/services');
        const feedbackRoutes = require('./src/routes/feedback');

        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        // Basic route
        app.get('/', (req, res) => {
            res.json({ message: 'Diagonal Enterprises API is running!' });
        });

        app.use('/api/auth', authRoutes);
        app.use('/api/services', servicesRoutes);
        app.use('/api/feedback', feedbackRoutes);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();