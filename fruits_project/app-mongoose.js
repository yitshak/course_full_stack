const mongoose = require("mongoose");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017/fruitsDB";
mongoose.connect(uri)

// Create a new schema
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Best fruit ever"
});

fruit.save();

// const insertDocuments = function(db, callback) {
//   const collection = db.collection("fruits")
//   collection.insertMany([
//     {
//       name: "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name: "Orange",
//       score: 10,
//       review: "Great orange fruit"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(2, result.insertedCount);
//     // assert.equal(2, result.ops.length);
//     console.log("Inserted 2 documents");
//     callback(result);
//   })
// }
//
// const findDocuments = function (db, callback) {
//   const collection = db.collection("fruits");
//
//   collection.find({}).toArray(function(err,fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits)
//   })
// }
