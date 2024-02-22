const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
  res.end("Hello from Server!")
  })
})
server.listen(8000, () =>"Server connected!");