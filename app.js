const { log } = require('console');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
  const url = req.url;
  const method = req.method;
  if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type = "text" name = "message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method ==='POST'){
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title> This node js tutorial </title></head>');
  res.write('<body>');
  res.write('<h1> This is node JS server!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
  // console.log(req);
  // process.exit();
})

server.listen(3000)