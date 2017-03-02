

console.log(/niblets/.test("I like chicken niblets"));


console.log(/i/.exec("I like chicken niblets"));


console.log("Foo foo foo bar foo".match(/(.oo)/));


var str = "Foo foo foo bar foo";
var regex = /(.oo)/g
var matches = [];
var match = regex.exec(str);
while (match) {
    matches.push(match);
    match = regex.exec(str);
}
console.log(matches);


var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.


