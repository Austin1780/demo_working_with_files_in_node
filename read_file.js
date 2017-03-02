var fs = require('fs');


var path = './data/small.txt';


fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});





