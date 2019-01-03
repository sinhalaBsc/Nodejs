// header > read the node_17xx tutorial

/*
In this lesson we are going to make send json data to client using end method
json is use in website background data communication with server using javascript
change content-type to 'application/json'
*/

var http = require('http');
var fs=require('fs');



var server=http.createServer(function(req,res){
  console.log('request url: '+req.url);
  res.writeHeader(200,{'Content-Type':'application/json'}); // change content-type to 'application/json'
  // let's create object which we want to send
  var myObj={
    name:'Laksahan',
    jab:'programmer',
    age:28
  }
    /* end method will work for 'string data' or 'buffer data'.
    because of that we need convert object to json format string
    using 'JSON.stringify()' method         */
    res.end(JSON.stringify(myObj));


});

server.listen(3000,'127.0.0.1');
console.log('server work on port 3000');
