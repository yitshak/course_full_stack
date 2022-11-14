const mongoose = require("mongoose");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017/People";
mongoose.connect(uri)

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})

// Create a new schema
const personSchema = new mongoose.Schema ({
  name: {
   type: String,
   required: [true, "please specify a name"]
 },
  age: {
    type: Number,
    min: 0,
    max: 33
  },
  favoriteFruit: fruitSchema
})


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Best fruit ever"
});

fruit.save();

const Person = mongoose.model("Person", personSchema);
const charlie = new Person ({
    name: "Hermayani",
    age: 30,
    favoriteFruit: fruit
  });
  charlie.save();

//
// const brown = new Person ({
//   name: "Brown",
//   age: 60
// });
//
// brown.save();

// Person.deleteMany({name: /Charlie/}, function(err) {
//   if (err) {
//     console.log("Problem deleting");
//   }else{
//     console.log("Deleted records");
//   }
// });
// Person.find(function(err, people) {
  // if (err) {
    // console.log(err);
  // }
  // else {
    // mongoose.connection.close()
    // people.forEach((item, i) => {
        // console.log(item.name);
    // });
  // }

// });
