// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) =>{
  if (err) {
    console.log('unable to connect to mongo server', err);
  }
  console.log('connected to mongodb server');

  // deleteMany
  // db.collection('Todos').deleteMany({text : 'eat lunch', }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete things');
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text : 'die', }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete things');
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({'completed' : false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete things');
  // })

  db.collection('Users').deleteMany({name : 'Nammonsayhi', }).then((result) => {
    console.log(result.result.n + " documents deleted");
  }, (err) => {
    console.log('Unable to delete things');
  });

  // deleteOne
  db.collection('Users').findOneAndDelete(
    {'_id' : new ObjectID('58ba5a4e2a554b0bb29f5ccd')}
  ).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete things');
  })

  db.close();
})
