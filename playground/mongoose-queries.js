const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo stuff
var todoId = '58bace3cde2faf170aea140b';
var userId = '58ba8a931a0442112deeae42'

if (!ObjectID.isValid(todoId) && !ObjectID.isValid(userId) ) {
  console.log('some ID is not valid');
  return;
}

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

Todo.findById(todoId).then((todo) => {
  if (!todo) {
    return console.log('Sorry, Id not found');
  }
  console.log('Todo By Id', todo);
}, (err) => {
  console.log('ID not valid, how can it come to this point !');
});

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Sorry, Id not found');
  }
  console.log('User By Id', user);
}, (err) => {
  console.log('ID not valid, how can it come to this point !');
});
