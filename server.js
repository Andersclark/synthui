const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 666;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('data', (data) => {
    console.log('data: ' + data);
  });
  socket.on('draw', (data) => {
    console.log(`X: ${data.x}, Y: ${data.y}`);
  })
});

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});