// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const getVisitors = () => api.get('/dashboard/visitors');
// Add other API calls...
