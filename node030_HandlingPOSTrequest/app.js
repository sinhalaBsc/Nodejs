// refer the node_29 tutue

/*  POST requests

  - POST is a request method.
  - POST requests, ask server to accept/store data which is
    enclosed in the body of the request(not request url).
  - often used when submitting forms.

  now we need
   $ sudo node body-parser

   var bodyParser= require('body-parser');

   var urlencodeParser=bodyParser.urlencoded({ extended:false });


  step by step :
      1. goto view/contact.ejs and make a form as 29 tutorial.
      2  but you have to change form header as follwing.
         <form id='contact-form' method="POST" action="/contact">
           - default method is "GET"
           - we have to set action url because now we don't define
             url to map on app.js

      3. create 'POST' maping roughter on app.js
            app.get('/contact',function(req,res){
              res.render('contact');
            });
      4. now when we click 'submit' button that form body-data want
         to come inside of above  "app.get('/contact'" map roughter.
         for this between request response middleware process
         we are using "body-parser" package from npm packages
         to install 'body-parser'
           $ sudo node body-parser

      5. then inform that we are using 'body-parser' to app.js
           > var bodyParser= require('body-parser');
      6. next load body-data to variable from post request.
           >var urlencodeParser=bodyParser.urlencoded({ extended:false });

      7. now we can pass to post-rout-map using variable above.Data will
         load 'req.body' as object.

         app.post('/contact',urlencodeParser,function(req,res){
           console.log(req.body);
           res.render('contact');
         });
         now you can see from data as object on terminal when click submit button.



*/

var express = require('express'); // import  express module

var app=express();
var bodyParser= require('body-parser');
var urlencodeParser=bodyParser.urlencoded({ extended:false });
app.set('view engine','ejs'); // just one time

app.use('/assets',express.static('assets'));
// app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact');
});

app.get('/contact',function(req,res){
  res.render('contact');
});

app.post('/contact',urlencodeParser,function(req,res){
  console.log(req.body);
  res.render('contact');
});

  // let's send more data to render template.
app.get('/pro/:id',function(req,res){
  var data={age:29,job:'ninja',subjects:['sinhala','maths','science','aviation']};
  res.render('pr',{person:req.params.id,data:data}); // you can pass data to render
});

app.listen(3000);
