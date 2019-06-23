// Our imported libraries
const express = require('express');

// Assigning Express to an app constant
const app = express();

// Creating our first route which is looking for requests from http://localhost:4000/
app.get(`/`, (req, res) => { // res is the response object and req is the request object
  // Our response
  res.send(`Home`);
});

// Creating our first route which is looking for requests from http://localhost:4000/
app.get(`/greeting`, (req, res) => {
  // Our response
  res.send(`Hey 'dere world!`);
});

// Starting our server on port 4000
app.listen((process.env.PORT || 4000), () => console.log('Listening on 4000'));