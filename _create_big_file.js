var fs = require('fs');


var path = './data/big.txt';


console.log(`Creating big text file: ${ path }`);


const ITERATIONS = 1250000;


var writeStream = fs.createWriteStream(path);


for (var i = 0; i < ITERATIONS; i++) {
  var str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo accusamus quia deleniti magni perspiciatis ducimus dolore. Repellat laborum assumenda eos maxime, nulla, similique consequuntur rerum asperiores ea, recusandae rem!\n\n\n\n`;
  writeStream.write(str);
}


writeStream.end();


writeStream.on('finish', () => {
  var stats = fs.statSync(path);
  var size = stats.size / (1000 * 1000);
  console.log(`Created file with size: ${ size }MB`);
});




