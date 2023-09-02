require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;// Replace with your desired port number

// Define a route that responds to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
