
/*
to make package.json file [https://github.com/sinhalaBsc/Nodejs/blob/master/node021_PackageJson.File/app.js]
$ npm init

to install express
$ npm install express -save

to render files
$ npm install ejs -save

to post body-data map
$ npm install body-parser -save

to install mangodb
$


*/


var express= require('express');
//>var todocontro= require('./controllers/todoController');
var todocontroDB= require('./controllers/todoControllerDB');

var app=express();

// set template engine
app.set('view engine','ejs');

// fire the todo function from controllers
//>todocontro(app);
todocontroDB(app);
// middleware static file process
//app.use('/assets',express.static('assets'));
app.use(express.static('./public')); // without specifying url it's make
                                     // middleware to all urls from public folder.





// listen to port
app.listen(3000);
console.log('you are listen to port 3000');
