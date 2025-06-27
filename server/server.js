const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://landing-website-1.onrender.com',
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/auth', require('./routes/authRoutes'));

// Serve React frontend from /client/dist
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Handle frontend routes (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
