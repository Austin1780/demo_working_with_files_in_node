var fs = require('fs');


var path = './tmp/';


try {
  fs.rmdirSync(path);
} catch (err) {
  console.log('No directory to remove yet.');
}


var p = new Promise((resolve) => {
  fs.mkdir(path, (err) => {
    if (err) {
      throw err;
    }
    resolve(path);
    console.log(`Successfully created directory: ${ path }`);
  });
});


p.then((path) => {
  fs.rmdir(path, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Successfully removed directory: ${ path }`);
  });
})
  .catch((err) => {
    console.error(err);
  });



