// this tutorial show how to Create and Remove Directories

var fs = require('fs');

// delete the file (only file)
//>fs.unlink('file name reletive to this current runing file');

// create Directories synchronously
//>fs.mkdirSync('stuff');

// delete Directories synchronously
//>fs.rmdirSync('stuff');
/*
if there not such a file then nodejs will return error massage.
*/

// create directory ,readfile , and write text file on created directory asynchronously
fs.mkdir('stuff',function(){
  fs.readFile('node010_readme.txt','utf8',function(err,data){
    console.log(data);
    fs.writeFile('./stuff/node010_writeMe.txt',data,function(err){});
  });
});

// delete directory
// we can't delete the directory until it's empty.frist you have to delete all files in that directory.

fs.unlink('./stuff/node010_writeMe.txt', function(){ // delete file inside folder
  fs.rmdir('stuff');                                 // 
});
