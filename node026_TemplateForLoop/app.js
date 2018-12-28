// refer the node_24 tutue

/*
  link  127.0.0.1:3000/pro/12

  in ejs templete file :
      for output value - <%= value %>
      for condition or loop  - <% value.forEach(function(x){}); %>

*/

var express = require('express'); // import  express module

var app=express();
app.set('view engine','ejs'); // just one time

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});



  // let's send more data to render template.
app.get('/pro/:id',function(req,res){
  var data={age:29,job:'ninja',subjects:['sinhala','maths','science','aviation']};
  res.render('pr',{person:req.params.id,data:data}); // you can pass data to render
});

app.listen(3000);
