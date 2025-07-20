# Diagonal Enterprises - Setup Instructions

## Prerequisites

Before running the application, make sure you have the following installed:

1. **Node.js** (version 14 or higher)
2. **PostgreSQL** (version 12 or higher)
3. **npm** (comes with Node.js)

## Database Setup

1. **Install PostgreSQL** if you haven't already
2. **Create a new database** named `diagonal_enterprises`
3. **Update the environment variables** in `backend/.env` with your database credentials:
   ```
   DB_USER=your_postgres_username
   DB_HOST=localhost
   DB_NAME=diagonal_enterprises
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd diagonal-enterprises
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Environment Configuration

Create a `.env` file in the backend directory with the following variables:
```
# Database Configuration
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=diagonal_enterprises
DB_PASSWORD=your_postgres_password
DB_PORT=5432

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development
```

## Running the Application

### Option 1: Run Both Services Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Option 2: Run from Root Directory

**Backend:**
```bash
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `GET /api/services/category/:category` - Get services by category
- `POST /api/services` - Create new service (protected)
- `PUT /api/services/:id` - Update service (protected)
- `DELETE /api/services/:id` - Delete service (protected)

### Feedback
- `GET /api/feedback/approved` - Get approved feedback
- `GET /api/feedback/rating` - Get average rating
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback (protected)
- `PUT /api/feedback/:id/approve` - Approve feedback (protected)
- `DELETE /api/feedback/:id` - Delete feedback (protected)

## Features

### Frontend Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean and professional design with animations
- **Service Showcase**: Interactive service cards with animations
- **Image Gallery**: Showcases company work and projects
- **Contact Form**: Integrated with backend for inquiries
- **Customer Feedback**: Display approved customer testimonials
- **Navigation**: Smooth scrolling and routing between pages

### Backend Features
- **RESTful API**: Clean API structure with proper HTTP methods
- **Authentication**: JWT-based authentication system
- **Database Integration**: PostgreSQL with custom query builders
- **Input Validation**: Comprehensive validation for all endpoints
- **Error Handling**: Proper error responses and logging
- **CORS Support**: Configured for cross-origin requests
- **Environment Configuration**: Flexible environment-based configuration

## Database Schema

The application automatically creates the following tables:

### Users Table
- `id` (Primary Key)
- `username` (Unique)
- `email` (Unique)
- `password` (Hashed)
- `created_at`
- `updated_at`

### Services Table
- `id` (Primary Key)
- `title`
- `description`
- `category`
- `price`
- `image_url`
- `features` (Array)
- `is_active`
- `created_at`
- `updated_at`

### Feedback Table
- `id` (Primary Key)
- `name`
- `email`
- `rating` (1-5)
- `message`
- `service_type`
- `is_approved`
- `created_at`
- `updated_at`

## Development Commands

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## Troubleshooting

### Database Connection Issues
1. Make sure PostgreSQL is running
2. Check if the database `diagonal_enterprises` exists
3. Verify database credentials in `.env` file
4. Ensure PostgreSQL is accepting connections on port 5432

### Port Conflicts
- If port 5000 is in use, change `PORT` in backend `.env`
- If port 3000 is in use, React will automatically suggest port 3001

### Module Not Found Errors
- Run `npm install` in both backend and frontend directories
- Delete `node_modules` and `package-lock.json`, then reinstall

## Production Deployment

### Backend Deployment
1. Set `NODE_ENV=production` in environment variables
2. Use a production database (not localhost)
3. Set secure `JWT_SECRET`
4. Configure proper CORS origins

### Frontend Deployment
1. Run `npm run build` to create production build
2. Serve the `build` folder using a web server
3. Update `REACT_APP_API_URL` to point to production API

## Support

For issues or questions:
- Email: support@diagonalenterprises.com
- Phone: +1 (555) 123-4567

## License

This project is licensed under the MIT License.
