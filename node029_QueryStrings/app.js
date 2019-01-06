// refer the node_27 tutue

/*
                    Query String

  what is the 'Query String'?
    communication method between client and server using request url.

  for what we are using 'Query String' ?
    parse the request, and pull out the data.

  how it's works ?
    client add some parameters to after target-point of url.

    eg:
      mysite.com/blog/news?page=2
    'page=2' is our query parameters

      mysite.com/contact?person=samadhi&dept=marketing
    'person=samadhi' and 'dept=marketing' are parameters

  how server get data from this Query ?
    eg:
      mysite.com/blog/news?page=2
      target url > mysite.com/blog/news (app.get('/blog/news',function(req,res))

      if url matchs some target then string after '?' symbol is load to
      'req' object as a object.

    eg:(url-mysite.com/blog/news?page=2)
      app.get('/blog/news',function(req,res){
          console.log(req.query);
          res.render('blog');
       });
    result > {page:2}

   step by step>
     1 . change  the '/contact' map in this page.
         i. pass the value to contact.ejs file as object
     2 . go to  view/contact.ejs and take passing value from this app.js file
         and make show
          <%= q.page %>
          and check it's work !!!

     3 .(additional) this method very usefull for when we have html-form
         -add the html-form to 'contact.ejs'
         -there  url is making using input 'name="page"'
         - when you hit submit button it will return same name which you
           entered the 'which you wnat to contact' field.

*/

var express = require('express'); // import  express module

var app=express();
app.set('view engine','ejs'); // just one time

app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
  res.render('index');
});

// url - http://127.0.0.1:3000/contact?page=2
app.get('/contact',function(req,res){
  res.render('contact',{q:req.query}); // passing the query object to render
});

  // let's send more data to render template.
app.get('/pro/:id',function(req,res){
  var data={age:29,job:'ninja',subjects:['sinhala','maths','science','aviation']};
  res.render('pr',{person:req.params.id,data:data}); // you can pass data to render
});

app.listen(3000);
