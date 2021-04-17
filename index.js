// Hello World Node Application
var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res){
  res.send('Hello world, Node.js app running on Docker (Local Mode)');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);