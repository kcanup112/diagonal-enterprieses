import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
};

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
  getByCategory: (category) => api.get(`/services/category/${category}`),
  create: (serviceData) => api.post('/services', serviceData),
  update: (id, serviceData) => api.put(`/services/${id}`, serviceData),
  delete: (id) => api.delete(`/services/${id}`),
};

// Feedback API
export const feedbackAPI = {
  getApproved: () => api.get('/feedback/approved'),
  getAverageRating: () => api.get('/feedback/rating'),
  create: (feedbackData) => api.post('/feedback', feedbackData),
  getAll: () => api.get('/feedback'),
  approve: (id) => api.put(`/feedback/${id}/approve`),
  delete: (id) => api.delete(`/feedback/${id}`),
};

export default api;
