

var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var urlencodeParser=bodyParser.urlencoded({ extended:false });
//var urlencodeParser=bodyParser.urlencoded({ useNewUrlParser: true });

// Connect to the database
mongoose.connect('mongodb://test:testtest007@ds149754.mlab.com:49754/todo',{ useNewUrlParser: true });

// Create a schema - this is like a blueprint.
var todoSchema = new mongoose.Schema({
  item:String // passing data object figure
});

// Create model
var Todo=mongoose.model('Todo',todoSchema); // 'Todo' is model name as a collection
                                            // variable data store in mongodb



module.exports = function(app){


app.get('/todo',function(req,res){
    // get data from mangodb and passing to view
    /* from_which_model.fine({},callback_function(error,data))
    ({}) - empty item mean find the all items
    ({item:'buy flowe'}) - mean find which item='buy flowe'
    */
    Todo.find({},function(err,data){
      if (err) throw err;
      res.render('todo',{doi:data});
    });


});

app.post('/todo',urlencodeParser,function(req,res){
   // get data from the view and add to mongodb
   var newTodo=Todo(req.body).save(function(err,data){
     if (err) throw err;
     res.json(data);
   });

});

app.delete('/todo/:item',function(req,res){
  console.log(req.params.item.replace(/\- /g," "));
  // delete the requested item from mangodb
  Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
    if (err) throw err;
    res.json(data);
    console.log('json return data : ',data);
  });
});



};
