var fs = require('fs');

var path = './data/write_file.txt';


var data = 'Lorem ipsum dolor sit amet.';


fs.writeFile(path, data, 'utf8', (err) => {
  if (err) {
    throw err;
  }
});


