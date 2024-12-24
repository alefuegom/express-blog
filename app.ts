import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import express from "express";
import connectDB from "./config/db"; // Import the database connection function
import routes from "./routes/routes";
import bodyParser from "body-parser";

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
