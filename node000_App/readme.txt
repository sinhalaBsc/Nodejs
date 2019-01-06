
javascript, filter function

trim() function, in javascript

if(err) throw err, in javascript (error handling in js)


you have to keep space
<li><%= todos[i].item %></li> --> GOOD! 
<li> <%= todos[i].item %> </li> --> Not good!﻿

in node.js we are installing package on app.js directory. but sub directory
can acess those packages.

//************************* mongodb *******************************************
we are using package to connect and interact with mongoDB server call 'mongoose'
install mongoose to current path
$ npm install mongoose -save

and import the mongodb to file which we are using database.
var mongoose = require('mongoose'); 

you have to register on mlab.com to make mongo database server.

db name - sinhala
email - samadhivkcom@gmail.com
user name - sinhale
pwd - samadhi007

to create new database
click the "Create new" on https://mlab.com/home
and follow the instraction
after created new db just click on it.
and click "User" to make new users to created database.
click the "Add database user"

and copy the created string get permission to connect between nodejs and mlabserver
mongodb://<dbuser>:<dbpassword>@ds149754.mlab.com:49754/todo

// Connect to the database put this with quotation marks on file which we import 'mongoose' package
mongodb://<dbuser>:<dbpassword>@ds149754.mlab.com:49754/todo
    <dbuser> = test
    <dbpassword> = testtest007
and last string >
mongoose.connect('mongodb://test:testtest007@ds149754.mlab.com:49754/todo');



//********************** insert to dummie data to mongodb *************************

// Create a schema - this is like a blueprint.
var todoSchema = new mongoose.Schema({
  item:String // passing data object figure
});

// Create model
var Todo=mongoose.model('Todo',todoSchema); // 'Todo' is model name as a collection
                                            // variable data store in mongodb

// insert data to mongodb
//> var itemOne= Todo({item:'Buy flowers'});
// add with callback function
var itemOne= Todo({item:'Buy flowers'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});

/* database step by step
1 . connect to the database
2 . check the what is the Schema.
3 .
4 . when restart our app then it will save our data in mongodb server 
*/


//**********************  dynamic data & functions with mongodb *************************













 

