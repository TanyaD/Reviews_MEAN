var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var path =require('path')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist' ));
//mongoose.Promise = global.Promise


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  });

app.listen(8000, function(){
    console.log("listening on port 8000");
})