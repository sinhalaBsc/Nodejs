// refer the node_24 tutue

/*
in this lesson we are looking :
   1 . how to send 'file.html' to client using express package .
   2 . how to use 'EJS' templete engine .
*/

var express = require('express'); // import  express module

var app=express();

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/contact',function(req,res){
  res.sendFile(__dirname+'/contact.html'); // send response data to GET request
});

/*
let's make dynamic page using EJS template for dynamic url
  1.  first you have to install EJS
        $ npm install ejs -save
  2.  you have to inform to express manager that you are using such a templete call 'ejs'
        app.set('view engine','ejs'); // just one time
  3. 'express' automatically see html file in the 'views' folder on current directory.
      because of that we need to create 'views' folder to insert ejs files to render.
*/

app.set('view engine','ejs'); // just one time

app.get('/profile/:id',function(req,res){
  /* to response as ejs file we have to user render method. we don't want to define file
  location .because it 'view' folder is default location to render method */
  res.render('profile',{person:req.params.id}); // you can pass data to render
});

  // let's send more data to render template.
app.get('/pro:id',function(req,res){
  var data={age:29,job:'ninja'};
  res.render('pr',{person:req.params.id,data:data}); // you can pass data to render
});

app.listen(3000);
