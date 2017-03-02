var fs = require('fs');


var path = './data/big.txt';


var chunk = new Buffer(1024);
fs.open(path, 'r', (err, fd) => {
  fs.read(fd, chunk, 0, chunk.length, 0, (err, bytesRead, buffer) => {
    if (err) {
      throw err;
    }
    console.log(`Read ${ bytesRead } bytes:\n${ buffer }`);
    fs.close(fd, () => {});
  });
});









