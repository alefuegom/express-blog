require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const connectDB = require("./config/db"); // Import the database connection function
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use("/api", routes);

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
