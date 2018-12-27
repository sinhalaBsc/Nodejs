// header > read the node_18xx tutorial

/*
In this lesson we are looking how to mapping url which client send to server
to identify url we are using http-'req.url' object
change content-type to 'taxt/html'
*/

var http = require('http');
var fs=require('fs');



var server=http.createServer(function(req,res){
  console.log('request url: '+req.url);

  if(req.url==='/home' || req.url ==='/'){
    res.writeHeader(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }else if (req.url==='/contact') {
    res.writeHeader(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/contact.html').pipe(res);
  }else if (req.url==='/api/pro') {
    var jobt=[{name:'samadhi',age:'29'},{name:'pasindu',age:'28'}];
    res.writeHeader(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(jobt));
  }else{
    res.writeHeader(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/notfoud.html').pipe(res);
  }
});

server.listen(3000,'127.0.0.1');
console.log('server work on port 3000');

/*
when we have lotof urls then this method will not eazy for programmer.
we will look better solution with packages in future tutorials.

*/
