const http = require('http');
const websocket = require('ws');

const httpServer = http.createServer((req, res) => {
  res.end("Browse localhost:8000 to see this string")
})

const wsServer = new websocket.Server({server: httpServer})
wsServer.on('headers', (headers, req) => {
  console.log(headers);
})

wsServer.on('connection', (wsSocket, req) => {
  wsSocket.send('Run the server then open justWs.html. F12->Console and this string should be in the Message.')
  wsSocket.on('message', (msg) => {
    console.log(msg);
})
})

httpServer.listen(8000)