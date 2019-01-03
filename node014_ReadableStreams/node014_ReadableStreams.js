/*
---------------------------------Streams--------------------------------------
there is three type of Streams in node.js

- Writable streams - allow node js to write data to a stream to client.
- Readable streams - allow node js to reade data from a stream from client.
- Duplex - can reade and write to a stream.

*/
var http = require('http');
var fs=require('fs');       // import 'file system' module to deal with os

// to create readable stream we need to use 'createReadStream()' method.
var myReadStream = fs.createReadStream(__dirname+'/sampletext/SampleTextFile_100kb.txt','utf8');
// fs.  - whitch file we need to read as stream.
// ,'utf8' -for encode characters. with out this argument return values show as numbers.
//var myReadStream = fs.createReadStream(__dirname+'/sampletext/SampleTextFile_100kb.txt');
// __dirname+ = ./

//'createReadStream' method inherits from event emitter.event call 'data'
myReadStream.on('data',function(chuk){
  console.log('new chunk is recive');
  console.log(chuk);
});







/*
for download sample text file
>> https://sample-videos.com/download-sample-text-file.php


*/
