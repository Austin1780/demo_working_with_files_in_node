var fs = require('fs');


var path = './data/big.txt';


var readStream = fs.createReadStream(path, 'utf8');


var numBytes = 0;
readStream.on('data', (data) => {
  console.log(data.length);
  numBytes += data.length;
});


readStream.on('end', () => {
  console.log(`Stream read ${ numBytes } bytes`);
});


try {
  var data = fs.readFileSync(path, 'utf8');
} catch(err) {
  console.error(err);
}





