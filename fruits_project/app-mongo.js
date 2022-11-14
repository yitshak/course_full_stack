const MongoClient = require("mongodb").MongoClient;
const assert = require("assert")
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";

const dbName = 'fruitsDB';
const client = new MongoClient(uri);

client.connect(function(err) {
  assert.equal(null, err)
  console.log("Connected successsfully to server");
  const db = client.db(dbName);

  // insertDocuments(db, function(result){
  //   console.log(result);
  //   client.close();
  // })
  findDocuments(db, function(result) {
    client.close()
  })
});

const insertDocuments = function(db, callback) {
  const collection = db.collection("fruits")
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 10,
      review: "Great orange fruit"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(2, result.insertedCount);
    // assert.equal(2, result.ops.length);
    console.log("Inserted 2 documents");
    callback(result);
  })
}

const findDocuments = function (db, callback) {
  const collection = db.collection("fruits");

  collection.find({}).toArray(function(err,fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits)
  })
}
