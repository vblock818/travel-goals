// const http = require("http");

// const server = http.createServer((request,response) => {
//     response.statusCode = 200;
//     response.end('<h1>Hallo World</h1>');
// });

// server.listen(3000);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1><p>lorem</p>')
})

app.get('/about', function (req, res) {
    res.send('<h1>Hello About</h1><p>lorem ipsum</p>')
  })

  app.get('/impresum', function (req, res) {
    res.send('<h1>Aktuele Zeit</h1><p>'+ new Date().toISOString()+'</p>')
  })

app.listen(3000)