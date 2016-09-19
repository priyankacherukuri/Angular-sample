var http = require('http');

var vash = require('vash');

var path = require('path');

//var mongoose = require('mongoose');

var mongodb = require('mongodb');

var bodyParser = require("body-parser");

var methodOverride = require("method-override");

var express = require('express');



var app = express();

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  next();

});

app.use(bodyParser.urlencoded({extended:true}));



app.use(bodyParser.json());

app.use(methodOverride());

app.set("view engine", "vash");

app.use(express.static(__dirname + '/public'));

var controller = require("./controller");

controller.init(app);

var server = http.createServer(app);

//mongoose.connect('mongodb://localhost/dash');

app.listen(8000);

var server = http.createServer(app).listen(app.get('port'), function(){

  console.log('Express server listening on port ' + app.get('port'));

});