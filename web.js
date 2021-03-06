var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger())
var content = fs.readFileSync('index.html');

//console.log(content);

buf = new Buffer(content);

//console.log(buf.toString());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
