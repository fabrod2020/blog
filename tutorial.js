const http = require('http');
//requires the HTTP module

//method takes two arguments, req and res
//HTTP header defining what type of response we want from that request
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');