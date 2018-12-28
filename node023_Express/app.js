/*
---------- Express ----------------------------------
 * Easy and flexible routing system.
 * Integrates(ඒකාබද්ධ කරයි) with many templating engines.
 * Contains a middleware framework.

 frist of all install the Express package
   $ npm install express
   (if using PackageJson > $ npm install express -save)
*/

var express = require('express'); // import  express module

var app=express();                /* make express app to access to all
                                   fucntioality on express module which help
                                   us routing and setting up template engines */
// app.listen(3000);                // set the port number using express module

/*
now we are listening to the requset.
let's see how to response to request.
response is depends on type of request. there are 4 different type of requests.

 HTTP Methods(verbs)    Responding to request
  - GET                  - app.get('route',fn)
  - POST                 - app.post('route',fn)
  - DELETE               - app.delete('route',fn)
  - PUT
*/

// just user GET request
app.get('/',function(req,res){
  // here we don't use header. experss do it for you
  res.send('this is the home page');

});

app.get('/contact',function(req,res){

  res.send('this is the contact page');

});




app.listen(3000);                // set the port number using express module
