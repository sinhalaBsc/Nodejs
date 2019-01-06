var data =[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];

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

*/

module.exports = function(app){


app.get('/todo',function(req,res){
    res.render('todo',{doi:data});
});

app.post('/todo',urlencodeParser,function(req,res){
   data.push(req.body);
   res.json(data);
});

app.delete('/todo/:item',function(req,res){

  data =data.filter(function(todo){
    console.log(todo.item.replace(/ /g,'-') ,' ',req.params.item);
    return todo.item.replace(/ /g, "-") !== req.params.item;
  });
  res.json(data);
});



};
