var socket = require('socket.io-client')('http://localhost:5000');
socket.on('connect', function() {
  console.log("Connected!");
});
