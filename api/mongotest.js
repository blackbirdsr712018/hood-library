const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  const db = client.db('hood-lib')
  const collection = db.collection('dogs')
  collection.insertOne({name: 'Roger'}, (err, result) => {
  
  })
  collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {
  
  })
  collection.find().toArray((err, items) => {
      console.log(items)
    })


  //...
})
