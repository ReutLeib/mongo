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

var consts    = require('./consts'),
    mongoose  = require('mongoose');

mongoose.connect(consts.MLAB_KEY);
//define the MODEL:
var User = require('./define_schema_2');

mongoose.connect(consts.MLAB_KEY).then(
  () =>{
    console.log(`connected: ${User}`);
    mongoose.disconnect();
  },
  err => {
    console.log(`connection error:${err}`);
  }
  )