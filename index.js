const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

// This code sets up a basic Express.js server that listens on port 3000 and responds with "Hello World!" when a GET request is made to the root endpoint. You can test this by running the node index.js command in your terminal and opening http://localhost:3000in your browser.