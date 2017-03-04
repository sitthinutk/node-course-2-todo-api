// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(ObjectID);
console.log(obj);
console.log(ObjectID());
console.log(ObjectID());
console.log(ObjectID());

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) =>{
  if (err) {
    console.log('unable to connect to mongo server', err);
  }
  console.log('connected to mongodb server');
  // db.collection('Todos').insertOne({
  //   'text' : 'Something to do',
  //   'completed' : false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('error adding todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // })
  db.collection('Users').insertOne({
    'name' : 'Nammonsayhi',
    'age' : 21,
    'location' : 'Bangkok'
  }, (err, res) => {
    if (err) {
      return console.log('error adding todo', err);
    }
    console.log(res.ops[0]._id.getTimestamp());
  })
  db.close();
})
