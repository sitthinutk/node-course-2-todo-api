var mongoose = require('mongoose');

var User = mongoose.model('Users', {
  email : {
    type : String,
    require : true,
    trim : true,
    minlength : 1
  },
  name : {
    type : String,
    require : false
  }
});

module.exports = {User};
