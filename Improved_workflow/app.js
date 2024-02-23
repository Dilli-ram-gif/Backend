const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); //allows the next to continue next request to the middleware in line
})

app.use((req, res, next) => {
  console.log("In the another middleware!");
  res.write('<h1>Hello from Express!</h1>')
})


app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
