// Import packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const path = require('path');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();

// Allow cross origin resource fetching
app.use(cors());

// Handle uploaded files
app.use(fileUpload());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database URI
const uri =
  'mongodb://localhost:27017/garage_door_local?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
try {
  mongoose.connect(uri);

  // Connect database
  const connection = mongoose.connection;
  connection.once('open', () =>
    console.log('MongoDB database connection established successfully\n')
  );
} catch (error) {
  console.error(error);
}

// Import and use routes
app.use('/users', require('./routes/api/users'));
// timestamps of door status change
app.use('/logs', require('./routes/api/logs'));
app.use('/variables', require('./routes/api/variables'));
// control door
app.use('/door', require('./routes/api/door'));

// Static folder
// app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`\nServer started on port ${PORT}`));
