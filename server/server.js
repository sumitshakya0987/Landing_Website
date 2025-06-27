const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://landing-website-oe2m.vercel.app', // ✅ No trailing slash
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/auth', authRoutes);

// Root route - prevent "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Backend API is running...');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
