# Diagonal Enterprises

Welcome to the Diagonal Enterprises project! This is a full-stack web application that provides a comprehensive platform for various services, including 3D design and construction, repair and maintenance, and home services. The application is built using Node.js with Express for the backend and React for the frontend, with PostgreSQL as the database.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

- **src/app.js**: Initializes the Express application, sets up middleware, and imports routes for authentication, services, and feedback.
- **src/config/database.js**: Contains the configuration for connecting to the PostgreSQL database.
- **src/controllers/**: Contains controllers for handling business logic:
  - **authController.js**: Functions for user authentication (registration and login).
  - **servicesController.js**: Functions to handle service-related requests.
  - **feedbackController.js**: Functions to manage customer feedback submissions and retrieval.
- **src/models/**: Defines the database models:
  - **User.js**: User model with properties like username and password.
  - **Service.js**: Service model with properties for service details.
  - **Feedback.js**: Feedback model with properties for customer feedback.
- **src/routes/**: Sets up routes for different endpoints:
  - **auth.js**: Authentication-related endpoints.
  - **services.js**: Service-related endpoints.
  - **feedback.js**: Feedback-related endpoints.
- **src/middleware/auth.js**: Middleware functions for authenticating requests.
- **package.json**: Lists dependencies and scripts for the backend application.
- **server.js**: Entry point for the backend server, starting the Express application.

### Frontend

- **src/components/**: Contains React components for the application:
  - **Navbar.js**: Navigation bar component.
  - **Hero.js**: Displays the company name and photo.
  - **ServiceCard.js**: Displays individual service cards with animations.
  - **Gallery.js**: Showcases images.
  - **Contact.js**: Displays contact details.
  - **Feedback.js**: Displays customer feedback.
- **src/pages/**: Contains pages for the application:
  - **Home.js**: Main page with Navbar, Hero, ServiceCards, Gallery, Contact, and Feedback components.
  - **Services.js**: Lists all available services.
  - **About.js**: Provides information about the company.
- **src/styles/index.css**: CSS styles for the frontend application.
- **src/App.js**: Main application component that sets up routing and renders pages.
- **src/index.js**: Entry point for the React application.
- **public/index.html**: Main HTML file for the React application.
- **package.json**: Lists dependencies and scripts for the frontend application.

## Features

- Responsive design with a modern user interface.
- Dynamic service cards with animations.
- Gallery to showcase projects and services.
- Contact section for inquiries.
- Customer feedback section to display testimonials.

## Getting Started

To get started with the project, follow these steps:

### Option 1: Quick Start (Recommended)
Use the provided startup scripts:
- **Windows Command Prompt**: Double-click `start-project.bat`
- **PowerShell**: Right-click `start-project.ps1` → "Run with PowerShell"

### Option 2: Manual Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up the PostgreSQL database and update the database configuration in `src/config/database.js`.

4. Start the backend server:
   ```
   npm run dev
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

### Node.js Compatibility Fix

If you encounter OpenSSL errors with newer Node.js versions, the project has been configured with legacy OpenSSL provider support:

- The `package.json` includes `NODE_OPTIONS=--openssl-legacy-provider` in the start scripts
- A `.env` file is configured with the necessary options
- This fixes compatibility issues with Node.js v17+ and older Create React App versions

Now you can access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.
