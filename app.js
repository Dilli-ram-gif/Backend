const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) =>{
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