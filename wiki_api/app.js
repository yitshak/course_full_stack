const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose")
const _ = require("lodash")

mongoose.connect("mongodb://localhost:27017/wikiDB")
const app = express();

const articleSchema = new mongoose.Schema ({
   title: String,
   content: String
});

const Article = mongoose.model("Article",articleSchema)


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route("/articles")

.get(function(req,res){
  Article.find({},function(err,results){
    if (err) {
      res.send(err);
    }
    else {
      res.send(results);
    }
  })
})

.post(function(req,res){
  let title = req.body.title
  let content = req.body.content
  let article = new Article({ title: title,content:content})
  article.save(function(err){
      if (err) {
        res.send(err)
      }
      else {
        res.send("Successfully added a new articale")
      }
  })
})

.delete(function(req,res){
  Article.deleteMany({},function(err){
    if (err) {
      res.send(err)
    }
    else {
      res.send("Successfully deleted all articles")
    }
  })
});

app.route("/articles/:articleTitle")

.get(function(req,res){
  const requestedArticleTitle = req.params.articleTitle //_.kebabCase(req.params.articleTitle.toLowerCase());
  console.log(requestedArticleTitle);
  Article.findOne({title: requestedArticleTitle},function(err,result){
    if (err) {
      res.send(err);
    }
    else if (result){
      res.send(result);
    }
    else {
      res.send("No such article found")
    }
  })
})

.put(function(req,res){
  let requestedArticleTitle = req.params.articleTitle //_.kebabCase(req.params.articleTitle.toLowerCase());
  let updatedContent = req.body.content
  let updatedTitle = req.body.title
  console.log(updatedContent);
  console.log(requestedArticleTitle);
  Article.updateOne(
    {title: requestedArticleTitle},
    {title: updatedTitle,content: updatedContent},
    function(err){
      if (err) {
        res.send(err)
      }
      else {
        res.send("Article updated")
      }
    }
  )
})

.patch(function(req,res){
  let requestedArticleTitle = req.params.articleTitle //_.kebabCase(req.params.articleTitle.toLowerCase());
  let updatedContent = req.body.content
  let updatedTitle = req.body.title
  console.log(updatedContent);
  console.log(requestedArticleTitle);
  Article.updateOne(
    {title: requestedArticleTitle},
    {$set:req.body},
    function(err){
      if (err) {
        res.send(err)
      }
      else {
        res.send("Article updated")
      }
    }
  )
})

.delete(function(req,res){
  Article.deleteOne({title:req.params.articleTitle},function(err){
    if (err == null) {
      res.send("Deleted article")
    }
    else {
      res.send(err)
    }
  })
});


let port = process.env.PORT
if (port == null || port =="") {
	port = 3030;
}

app.listen(port, function(){
  console.log("Server has started properly");
});
