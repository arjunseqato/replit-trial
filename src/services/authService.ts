import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import type { LoginCredentials, AuthResponse } from '../types/auth';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // For demo purposes, simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'demo@example.com' && credentials.password === 'password123') {
        resolve({
          token: 'mock-jwt-token',
          user: {
            id: '1',
            email: credentials.email,
            name: 'Demo User'
          }
        });
      } else {
        reject({ message: 'Invalid credentials' });
      }
    }, 1000);
  });
};