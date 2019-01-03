/*
READ WRITE METHOD
[read sream > buffer > saving read > write whitch save from read > save ro send write]

PIPES METHOD
[read sream > buffer > PIPES > saving read
                             > saving write  ]

because of different of data transfer piper is quickest method
*/

var http = require('http');
var fs=require('fs');       // import 'file system' module to deal with os

// to create readable stream we need to use 'createReadStream()' method.
var myReadStream = fs.createReadStream(__dirname+'/sampletext/SampleTextFile_100kb.txt','utf8');
var mywriteStream= fs.createWriteStream(__dirname+'/sampletext/writemepipe.txt');

//myReadStream.pipe(to where data must be pipes);
myReadStream.pipe(mywriteStream);
/*
disadvantage of this method is we can't access between data buffer.
eg- myReadStream.pipe('****'+mywriteStream); will get error

*/
