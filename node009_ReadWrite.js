
// import core module name 'fc' to read and write text files.
var fs = require('fs');

//--------------------------synchronous-----------------------------------------

//read text file synchronously
var sread= fs.readFileSync('node009_readme.txt','utf8'); //
/* 'utf8' - encode the return value. othervice it will return binary code.
   ?? if there not such a file on directory ??
*/
console.log(sread);


// write text file synchronously
fs.writeFileSync('node009_weiteme.txt','synchronous write');
/*
if this name of file arn't on directory yet then nodejs will create the file and write on it.
if file already exist on directory the nodejs will rewite argument on that file.
*/

//--------------------------asynchronous----------------------------------------
// asynchronous method we have to use callback function


//read text file asynchronously
fs.readFile('node009_readme.txt','utf8',function(err,data){
  console.log(data);
});
/* 'utf8' - encode the return value. othervice it will return binary code.
   function(err,data) - callbak function. because of asynchronous and  'Callback' must be a function
   ?? if there not such a file on directory ??
*/



// write text file asynchronously
fs.writeFile('node009_weiteme.txt','asynchronous write',function(err){
  console.log('already write');
});
/*
if this name of file arn't on directory yet then nodejs will create the file and write on it.
if file already exist on directory the nodejs will rewite argument on that file.
*/
