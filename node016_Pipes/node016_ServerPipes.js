// header > frist read the node016_Pipes.js



var http = require('http');
var fs=require('fs');



var server=http.createServer(function(req,res){
  console.log('request url: '+req.url);
  res.writeHeader(200,{'Content-Type':'text/plain'});
  var myReadStream = fs.createReadStream(__dirname+'/sampletext/SampleTextFile_100kb.txt','utf8');
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
