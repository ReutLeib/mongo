// var express = require('express');
// var app = express();

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;
// app.get('/', function(req, res) {
//     res.send("HELLO");
// });

// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });

var mongoose = require('mongoose'),
    consts   = require('./consts');

mongoose.connect(consts.MLAB_KEY);

//define the MODEL:
var UserSchema = require('./define_schema_1');
var User = mongoose.model('User',UserSchema);


mongoose.connect(consts.MLAB_KEY).then( () =>{
    console.log(`connected: ${User}`);
    mongoose.disconnect();
  },
  err =>{
    console.log(`connection error: ${err}`);
  }

);