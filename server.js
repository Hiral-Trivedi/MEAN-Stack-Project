
var logger = require('morgan');
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
var bodyParser= require('body-parser');




var movies = require('./routes/movie-crud');
var theatres = require('./routes/theatre-crud');
var cities= require('./routes/city-crud');
var showtimings= require('./routes/showtiming-crud');
//var assigns= require('./routes/assignmovies-crud');
var mappings= require('./routes/mapping-crud');
// var authentication = require('./routes/auth');
// var bookings= require('./routes/booking-crud');
// var homes=require('./routes/home-crud');


var mongoose = require('mongoose');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;


var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

 app.use('/movie', movies)
app.use('/theatre', theatres);
app.use('/city',cities);
app.use('/showtiming', showtimings);
//app.use('/assign', assigns);
app.use('/mapping',mappings);
// app.use('/', authentication);
// app.use('/home',homes);
// app.use('./booking',bookings);
// app.use(passport.initialize());
// app.use(passport.session());
app.post('/api/login', passport.authenticate('local'), function(req, res) {
  res.cookie('user', JSON.stringify(req.user));
  res.send(req.user);
});
app.post('/api/signup', function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err) {
    if (err) return next(err);
    res.send(200);
  });
});
app.get('/api/logout', function(req, res, next) {
  req.logout();
  res.send(200);
});
app.use(function(req, res, next) {
  if (req.user) {
    res.cookie('user', JSON.stringify(req.user));
  }
  next();
});
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);
    // user.comparePassword(password, function(err, isMatch) {
      // if (err) return done(err);
      // if (isMatch) return done(null, user);
      // return done(null, false);
    // });
  });
}));



var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}



var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
