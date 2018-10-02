// Node.js modules
const path = require('path');

// 3rd party modules
const express = require('express');

// Config constants
const PORT = 8080;

// Initialize express
const app = express();

// Config middlewares
app.use(express.static('static'));

// Response with home.html
app.get('/ProjectDory', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Redirect all requests to /ProjectDory
app.get('*', (req, res) => {
  res.redirect('/ProjectDory');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});