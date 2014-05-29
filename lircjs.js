var net = require('net');

var socket = new net.Socket();

socket.on('connect', function() {
  console.log('connected');
});

socket.on('data', function(data) {
  var str = data.toString().trim();
  var parts = str.split(' ');
  var evt = {
    code: parts[0],
    repeatCount: parts[1],
    buttonName: parts[2],
    remoteName: parts[3]
  }
  console.log(JSON.stringify(evt, null, 2));
});

socket.on('error', function(err) {
  console.log('error', err);
});

socket.connect('/var/run/lirc/lircd');
