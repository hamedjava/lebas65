require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// اتصال به دیتابیس
connectDB();

// ران کردن سرور
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
