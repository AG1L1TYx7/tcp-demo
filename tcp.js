var net = require('net');

//the handler arguement is automatically set as listener for the console
var server = net.createServer(function (socket) {
    console.log("Connection from" + socket.remoteAddress);
    socket.end("hello world\n");
});

server.listen(7000, "127.0.0.1");