const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CVGenius Server is running' });
});

// API check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CVGenius API is running' });
});

// Main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ CVGenius Server running on port ${PORT}`);
  console.log(`📖 Visit: http://localhost:${PORT}`);
});

module.exports = app;
