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
  wsSocket.send('Hi Client.')
  wsSocket.on('message', (msg) => {
    wsSocket.send('Client said ' + msg)
    console.log('Client said ' + msg);
  })
})

httpServer.listen(8000)