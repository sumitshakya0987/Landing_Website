const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://landing-website-1.onrender.com',
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Logging
console.log("✅ Server starting...");

// Register Routes
try {
  const authRoutes = require('./routes/authRoutes');
  app.use('/auth', authRoutes);
  console.log("✅ Auth routes loaded successfully");
} catch (err) {
  console.error("❌ Error loading auth routes:", err.message);
}

// Serve static files
const clientBuildPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(clientBuildPath));

// React frontend catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
