const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', ws => {
  console.log('Bajaj Client is Connected Successfully!');

  ws.on('message', message => {
    console.log(`Client Said : ${message}`);
    
    ws.send(`Server Response : ${message}`);
  });

  ws.on('close', () => {
    console.log('Bajaj Client disconnected');
  });

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server is running on ws://localhost:3001');
