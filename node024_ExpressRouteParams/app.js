// refer the node_23 tutue

/*
in this lesson we are looking how to use 'express' package to route and
dynamic route
*/

var express = require('express'); // import  express module

var app=express();

app.get('/',function(req,res){
  res.send('this is the home page');
});

app.get('/contact',function(req,res){
  res.send('this is the contact page'); // send response data to GET request
});

// now we are looking how to set dynamic urls.it seems like variable url
app.get('/profile/:id',function(req,res){
  res.send('profile id '+req.params.id);
});

app.listen(3000);
