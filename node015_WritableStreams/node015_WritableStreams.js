var http = require('http');
var fs=require('fs');       // import 'file system' module to deal with os

// to create readable stream we need to use 'createReadStream()' method.
var myReadStream = fs.createReadStream(__dirname+'/sampletext/SampleTextFile_100kb.txt','utf8');
var mywriteStream= fs.createWriteStream(__dirname+'/sampletext/writeme.txt');

// to after every read stream by 'SampleTextFile_100kb' work write stream to save data in 'writeme.txt'

myReadStream.on('data',function(chuk){
  mywriteStream.write('***'+chuk);
  console.log('new chunk is recive');
  //console.log(chuk);
});

/*
in this stream system we pass value from some where to another.this cost time.
there more qucker way to do this file transfer call 'Pipes'
we will look 'Pipes' way in next tutorial
*/
