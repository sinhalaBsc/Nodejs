// header > read the node_16xx tutorial

/*
In this lesson we are going to make send html file to client
frist make a html file
change content-type to 'text/html'
*/

var http = require('http');
var fs=require('fs');



var server=http.createServer(function(req,res){
  console.log('request url: '+req.url);
  res.writeHeader(200,{'Content-Type':'text/html'}); // change content-type to 'text/html'
  var myReadStream = fs.createReadStream(__dirname+'/node017_ServingHTML.html','utf8');
  myReadStream.pipe(res);  // inside this ..request automatically getting 'end' .
  //res.end('hi guap');
  // ??if there 'res' send several respones to client ??

});

server.listen(3000,'127.0.0.1');
console.log('server work on port 3000');

/*
you are sending this text without html. becouse of that some time you are  getting
error or notification about data encoding.
*/
