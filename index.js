const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
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