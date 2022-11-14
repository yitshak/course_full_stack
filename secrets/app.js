//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const findOrCreate = require("mongoose-findorcreate")
const googleStrategy = require("passport-google-oauth20").Strategy;
const gitHubStrategy = require("passport-github2").Strategy;

const saltRound = 10;

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret:"ourLittleSecret.",
  resave:false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  githubId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(findOrCreate)

const User = new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  done(null,user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err,user){
    done(err,user);
  });
});

passport.use(new googleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3030/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new gitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3030/auth/github/secrets"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/secrets',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });

app.route("/submit")
.get(function(req,res){
  res.render("submit")
})
.post(function(req, res){
  const submittedSecret = req.body.secret
  User.findById(req.user.id, function(err,foundUser){
    if (err) {
      console.log(err);
    }
    else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/secrets")
        });
      }
    }
  });
});


app.get("/",function(req,res){
  res.render("home")
});



app.route("/register")

.get(function(req,res){
  res.render("register")
})

.post(function(req,res){
  User.register({username: req.body.username},req.body.password, function(err,user){
    if (err){
      console.log(err);
      res.redirect("/register")
    } else {
      console.log("success")
      passport.authenticate("local")(req,res, function(){
        console.log("success")
        res.redirect("/secrets");
      });
    }
  });
});

app.route("/login")

.get(function(req,res){
  res.render("login")
})

.post(function(req,res){
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    }
    else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets")
      });
    }
  });
});

app.get("/logout",function(req,res) {
  req.logout();
  res.redirect("/")
})

app.get("/secrets",function(req,res){
  if (req.isAuthenticated()) {
    User.find({ secret: { $exists: true}},"secret", function(err,foundUsers){
      if (err) {
        console.log(err);
      }
      else {
        res.render("secrets", {usersWithSecrets: foundUsers});
      }
    });
  } else {
    res.redirect("login")
  }
});

app.get("/auth/google",
  passport.authenticate("google", {scope:["profile"]}));

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect('/secrets');
  });









app.listen(3030, function() {
  console.log("Server started on port 3030.");
});
