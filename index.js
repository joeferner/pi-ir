
var lircjs = require('lircjs');

var lirc = lircjs.connect();

lirc.on('connect', function() {
  console.log('lirc connected');
});

lirc.on('error', function(err) {
  console.log('lirc error', err);
});

lirc.on('end', function(err) {
  console.log('lirc end');
});

lirc.on('code', function(code) {
  console.log('lirc code', code);
});

//lirc.remotes(console.log);
//lirc.remoteCommands('mceusb', console.log);

//lirc.sendOnce('remote1', 'code1', console.error);
//lirc.sendOnce('remote1', ['code1', 'code2'], console.error);
lirc.simulate('0000000000007bfe', 0, 'KEY_1', 'mceusb', console.error);

setTimeout(function() {
  lirc.close();
}, 1000);
