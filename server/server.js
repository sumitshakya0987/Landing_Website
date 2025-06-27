const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://landing-website-1.onrender.com',
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// 🔧 Ensure the path here is correct:
app.use('/auth', authRoutes); // ✅ No colon without parameter

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
