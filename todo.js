const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:/admin', {useNewUrlParser:true});
// mongoose.connect('mongodb://localhost:27017', {useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to mongodb!');
});


const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
});


todoSchema.statics.all = function(callback){
  return Todo.find({}, function(err, todos){
    callback({ todos: todos });
  });
};
const Todo = mongoose.model('Todo', todoSchema);

module.export = Todo;
