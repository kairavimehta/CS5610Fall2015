var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//var connectionString = 'mongodb://127.0.0.1:27017/cs5610fall2015Assignment5';
var connectionString = 'mongodb://127.0.0.1:27017/cs5610fall2015Project';


if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for passport
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());

//require("./experiments/nodejs/expressjs/server.js")(app);
//require("./public/angularjsClient/server.js")(app);
//require("./public/angularjsClient/jsonp/server/MovieService.js")(app);
//require("./public/movies/server/app.js")(app);
require("./public/assignment/server/app.js")(app, mongoose, db);
require("./public/project/server/app.js")(app);

app.listen(port, ipaddress);