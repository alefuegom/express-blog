require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const connectDB = require("./config/db"); // Import the database connection function
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
