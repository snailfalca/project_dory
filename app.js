// Node.js modules
const fs = require('fs');
const path = require('path');

// 3rd party modules
const express = require('express');

// Config constants
const PORT = 8080;

// Initialize express
const app = express();

// Config middlewares
app.use(express.static('static'));

// Response with favicon file
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// Response with home.html
app.get('/ProjectDory', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});