var mongoose = require('mongoose');

// configure mongoose's promise promise we know
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// ES6 syntax
mongoose.exports = {mongoose};

// old syntax
// mongoose.exports = {
//   mongoose : mongoose
// };
