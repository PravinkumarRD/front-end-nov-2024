const express = require('express');
const app = express();
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

// Broadcast a message to all connected clients
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

wss.on('connection', ws => {
  console.log('Client connected');
  
  ws.on('message', message => {
    console.log(`Received: ${message}`);
    // Broadcast the received message to all clients
    broadcast(`Client: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');
});

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
