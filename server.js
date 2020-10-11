const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected to server.');
  socket.on('disconnect', function() {
    console.log('A user disconnected from server.');
  });

  socket.on('user_connect', (msg) => {
    console.log('CONNECTED:', msg);
  });
});

server.listen(5000, () => {
  console.log('listening on port 5000');
});
