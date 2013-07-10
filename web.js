var fs = require('fs');

var content = fs.readFileSync('index.html');

//console.log(content);

buf = new Buffer(content);

console.log(buf.toString());
