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
/////////////////////////////////////////////////////////////////////
// ● Create=save() 
// ● Read= find() - like select
// ● Update=update() 
// ● Delete =remove()

//var query = model.find(); // ->start selecting, select all

var mongoose = require('mongoose'),
    consts   = require('./consts');
var UserSchema = require('./define_schema_1');

mongoose.connect(consts.MLAB_KEY);



//define the MODEL 1:       // access to data  
                           // 'User' its a nickname to continued    
var User = mongoose.model('User',UserSchema);


mongoose.connect(consts.MLAB_KEY).then( () =>{
    User.find({}, (err,user) => {
      if(err)
        console.log(`query error: ${err}`);
      console.log(`User: ${User}`);
      mongoose.disconnect();
    });
    // console.log(`connected: ${User}`);
  },
  err =>{
    console.log(`connection error: ${err}`);
  }

);




