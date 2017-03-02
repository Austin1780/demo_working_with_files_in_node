

var buf = Buffer.alloc(10);
buf.write('1234567890');
console.log(buf);
console.log(buf.toString());


var buf = Buffer.from([255]);
console.log(buf.toString('hex'));


var buf = Buffer.from([1, 2, 3]);
console.log(buf.toString('hex'));


var buf = Buffer.from('Hello world!', 'utf8');
console.log(buf.toString());






