const express = require('express');
const app = express();

// add a route to test if the server is running
app.get('/test', (req, res) => {
  console.log('/test request');
  res.send('The server is up and running!');
});

// ping
app.get('/ping', (req, res) => {
  console.log('/ping request');
  res.send('PONG');
});

// root
app.all('/', (req, res) => {
  console.log('root request');
  res.send('Yo!');
});

// catch all other requests
app.all('*', (req, res) => {
  console.log('catch all request: [' + req.url + ']');
  res.send('Sorry, [' + req.url + '] is an invalid URL.');
});

// start the server
port = process.env.PORT || 3000;
console.log('Starting server on port ' + port);
app.listen(port);
