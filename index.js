const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Tamago Pan!');
});

app.get('/api/users', (req, res) => {
  res.send('List of users here');
});

app.post('/api/users', (req, res) => {
  res.send('Post a new user here');
});

app.put('/api/users/:id', (req, res) => {
  res.send('Update user by ID');
});

app.delete('/api/users/:id', (req, res) => {
  res.send('Delete user by ID');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

// This code sets up a basic Express.js server that listens on port 3000 and responds with "Hello World!" when a GET request is made to the root endpoint. You can test this by running the node index.js command in your terminal and opening http://localhost:3000 in your browser.

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/exprestfulapi');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);
