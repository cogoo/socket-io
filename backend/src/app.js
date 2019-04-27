var io = require('socket.io')(8080);

// handle incoming connections from clients
io.on('connection', function(socket) {
  socket.on('channel', function(channel) {
    socket.join(channel);
  });
});

const channel = 'game_room_1';
setInterval(() => {
  io.to(channel).emit('game', {message: 'this is gameroom 1'});
}, 1000);

const channel2 = 'game_room_2';
setInterval(() => {
  io.to(channel2).emit('game',  {message: 'this is gameroom 2'});
}, 1000);
