var fs = require('fs');


var path = './data/create_write_stream.txt';


console.log('Opening write stream...');
var writeStream = fs.createWriteStream(path);


process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', (data) => {
  if (data.trim() === '\\q') {
    writeStream.end();
    console.log('Closing write stream');
    process.exit();
  } else {
    console.log(`Writing: ${ data }`);
    writeStream.write(data);
  }
});








