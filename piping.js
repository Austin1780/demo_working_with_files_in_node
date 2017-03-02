
console.log('Hello piping!');


process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.pipe(process.stdout);


process.stdin.on('data', (data) => {
  if (data.trim() === 'q') {
    console.log('Goobye');
    process.exit();
  }
});



