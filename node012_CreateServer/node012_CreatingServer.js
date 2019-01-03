
var http=require('http');

var server=http.createServer(function(req,res){
  console.log('request url: '+req.url);               // to get request url
  res.writeHeader(200,{'Content-Type':'text/plain'}); // make response header
  res.end('Hey GUAP.. this response to any server/url');/* insert response data
                                                        and send response to client.*/
});
// we need to set particular pole to listen to request.othervice server can't caught request
server.listen(3000,'127.0.0.1');
console.log('server work on port 3000');

/*
function(req,res) - when ever server got request then this funtion will fire
                    this fuction seems like callback function.

REQUEST  - request + request header
RESPONSE - response data + response header
before send response data ,server should add 'response header' to response

Response header
 - Content-Type (inform to browser what type of data sending from server)
                eg- plain text,json.. ect.
 - Status      (inform that what is the situation of server's response)
               eg- 404,500,200.. ect.


*/
