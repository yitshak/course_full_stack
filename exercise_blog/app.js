//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose")
const _ = require('lodash');



const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const previewLength = 100
const app = express();

mongoose.connect("mongodb+srv://blog-app:r5USQR9tJ62UoHCR@lilium-cluster.iuqxq.mongodb.net/personal_blog?retryWrites=true&w=majority")

const postsSchema = new mongoose.Schema ({
   title: String,
   body: String
});

const Post = mongoose.model("Post",postsSchema)


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = []


app.get("/",function(req,res){
  Post.find({},function(err,results){
    if (err){
      console.log(err);
    }
    else {
      console.log(results);
      res.render("home",
        {
          starting_content:homeStartingContent,
          posts: results
        });
    }
  });
});

app.get("/about",function(req,res){
  res.render("about",{about_content:aboutContent});
})

app.get("/contact",function(req,res){
  res.render("contact",{contact_content:contactContent});
})

app.get("/compose",function(req,res){
  res.render("compose");
})

app.post("/compose", function(req,res){
  const post = new Post({
    title : req.body.title,
    body : req.body.post_body
  });
  post.save(function(err){
    if (err){
      console.log(err);
    }
    else {
      res.redirect("/");
    }
  })
})

app.get("/posts/:postName",function(req,res){

  const requestedPostName = _.kebabCase(req.params.postName.toLowerCase());
  Post.find({},function(err,results){
    if (err){
      console.log(err);
    }
    else {
      results.forEach(function(post){
        const currentPostName = _.kebabCase(post.title.toLowerCase());
        if (currentPostName===requestedPostName) {
          res.render("post",
            {
              post_title:post.title,
              post_body:post.body
            });
          return
        }
      });
    }
  });
});

let port = process.env.PORT
if (port == null || port =="") {
	port = 3000
}

app.listen(port, function(){
  console.log("Server has started properly");
});