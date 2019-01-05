// refer the node_26 tutue

/*
  step by step :
      1. make 'nav.ejs' file in include (better './view/include' directory)
      2. include the 'nav.ejs' file to rendering xxx.ejs following way
            <% include partial/nav.ejs %>
      3. if you want add include to other html then you have to copy those
         html file to 'views' directory and convert html-> ejs. and after only
         add those includes.
      4. when link nav bar frist make link using 'express'.
                app.get('/contact',function(req,res){
                  res.render('contact');
                });
        after you can link this '/contact' link in include file <a href='/contact'>contact</a>
        further explain:
        how to write 'www.domain/contact' this url on include file to link this request form include file.
        <a href='/contact'>contact</a>


      * inside render you don't need to wite '.ejs'
        eg: have to write > res.render('contact');
            but not with  > res.render('contact.ejs');
*/

var express = require('express'); // import  express module

var app=express();
app.set('view engine','ejs');    // just one time

app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact');
});

  // let's send more data to render template.
app.get('/pro/:id',function(req,res){
  var data={age:29,job:'ninja',subjects:['sinhala','maths','science','aviation']};
  res.render('pr',{person:req.params.id,data:data}); // you can pass data to render
});

app.listen(3000);
