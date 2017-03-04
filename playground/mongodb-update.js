// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) =>{
  if (err) {
    console.log('unable to connect to mongo server', err);
  }
  console.log('connected to mongodb server');

  // simple update
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("58ba6a5ce4ad20758e821e6a")
  // }, {
  //   $set : {
  //     completed : true
  //   }
  // }, {
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // })

  // ex 1
  db.collection('Users').findOneAndUpdate({
    name : "Beam"
  }, {
    $set : {
      name : "Sam"
    },
    $inc : {
      age : 2
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })

  db.close();
})
