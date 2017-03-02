var fs = require('fs');


var path = './data/append_file.txt';


fs.appendFile(path, 'Appended', 'utf8', (err) => {
  if (err) {
    throw err;
  }
  console.log('Data appended successfully!');
});







