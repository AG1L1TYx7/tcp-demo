var net = require('net');

var client = new net.Socket();

client.connect(7000, "127.0.0.1");

client.on('data', function (data) {
    console.log('data: ' +data);
    client.destroy();
});

//Add a 'close' event handler for a client socket
client.on('close', function() {
    console.log('Connection closed');

});