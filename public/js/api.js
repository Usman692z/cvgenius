// API Client for CVGenius
const API_BASE = typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : '/api';

function getToken() {
    return localStorage.getItem('token');
}

async function apiCall(endpoint, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    const token = getToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            ...options,
            headers
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'API request failed');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Placeholder functions for future implementation
async function register(email, password, name) {
    console.log('Register endpoint: /auth/register');
}

async function login(email, password) {
    console.log('Login endpoint: /auth/login');
}

async function getCurrentUser() {
    console.log('Get user endpoint: /auth/me');
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

async function getResumes() {
    console.log('Get resumes endpoint: /resumes');
}

async function createResume(title) {
    console.log('Create resume endpoint: /resumes');
}

console.log('✅ API client loaded');
