var fs = require('fs');


var path = '.';


fs.readdir(path, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});







