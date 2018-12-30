// refer the node_27 tute

/*
  step by step :
      1. we are separating css and javascript code from all x.ejs files
         and store that codes as separate files
           eg : index.ejs + contact.ejs + script.js + style.css

      2. and linking to all  x.ejs with script.js and style.css as nomal situaion.
           eg: css file located './assets/style.css'
           <head>
              <link href='/assets/style.css' rel='stylesheet' type='text/css' />
           </head>

      3. but it's not  working like other frame-work.'css' file not getting download as a
          respone.because of that html file show without css.that why in nodejs you have
         to set that html and css file both work each others before download to client.

      4. as a solution for above problem we are using 'Middleware'.Middleware is code that
          run between request and respones.

          app.use('/assets',function(req,res,next){
              console.log(req.url);
              next();
          });

          eg shows original Middleware method.
          if any url consist '/assets' then before fire 'app.get('/assets/something',function(req,res)'
          'app.use('/assets',function(req,res,next)' fucntion will work. using this method we can
          add css to html file.

      5. but fortunately express comes with some middleware.it will map given link ('/assets')
         where our static files are stored. when 'x.ejs' file if firing then css file link will
         firing. then
        app.use('/assets',express.static(assets));
        code start to work and it will mapping css(all static files) with html.

        ( all static files : css +js )
*/

var express = require('express'); // import  express module

var app=express();
app.set('view engine','ejs'); // just one time

app.use('/assets',express.static('assets'));


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
