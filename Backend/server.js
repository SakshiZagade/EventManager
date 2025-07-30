const express = require('express');
const mongoose = require('mongoose');
const connect = require('./config/db');
const multer = require('multer'); // Import multer for file uploads
const path = require('path');
const cors = require('cors')
const eventsRoute = require('./routes/eventRoutes');
const app = express();




require('dotenv').config();

// Set up Multer storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage: storage });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Connect to the database
connect();
app.use(cors())
// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (images)
app.use('/uploads', express.static('uploads'));

// Use the image upload middleware for event creation (if you have an image upload route)
app.use('/api/events', upload.single('image'), eventsRoute); // Assuming eventsRoute will handle event logic
const fs = require("fs");


const uploadDir = path.join(__dirname, "uploads");

// ✅ Check if uploads folder exists, create if not
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Uploads folder created successfully!");
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
