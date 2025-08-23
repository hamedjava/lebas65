const mongoose = require('mongoose');
require('dotenv').config(); // لود کردن متغیرهای محیطی

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("❌ MongoDB URI is not defined in .env file!");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI); // ⚡️ حذف گزینه‌های deprecated
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
