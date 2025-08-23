const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Test route (بعداً پاک می‌کنیم)
app.get("/", (req, res) => {
  res.json({ message: "🚀 Shikpoosh API is running..." });
});

module.exports = app;
