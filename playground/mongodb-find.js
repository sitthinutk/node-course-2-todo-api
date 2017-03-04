// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) =>{
  if (err) {
    console.log('unable to connect to mongo server', err);
  }
  console.log('connected to mongodb server');

  db.collection('Todos').find({}).toArray().then((docs) => {
    console.log('Todos - fetch all');
    console.log(JSON.stringify(docs, undefined, 2));
  }, () => {
    console.log('Unable to fetch data');
  })

  db.collection('Todos').find({}).count().then((count) => {
    console.log(`Todos count : ${count}`);
  }, (err) => {
    console.log('Unable to count data ', err);
  })

  db.collection('Todos').find({'completed':true}).toArray().then((docs) => {
    console.log('Todos - fetch {completed : true}');
    console.log(JSON.stringify(docs, undefined, 2));
  }, () => {
    console.log('Unable to fetch data');
  })

  db.collection('Todos').find(
    {'_id' : new ObjectID('58ba612ce4ad20758e821e66')}
  ).toArray().then((docs) => {
    console.log('Todos - fetch by id');
    console.log(JSON.stringify(docs, undefined, 2));
  }, () => {
    console.log('Unable to fetch data');
  })

  db.close();
})
