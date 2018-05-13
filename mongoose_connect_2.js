var consts   = require('./consts');
var mongoose = require('mongoose');
mongoose.connect(consts.MLAB_KEY);

//define the MODEL 2:
var User = require('./define_schema_2');

mongoose.connect(consts.MLAB_KEY).then( () =>{
    console.log(`connected: ${User}`);
    mongoose.disconnect();
  },
  err =>{
    console.log(`connection error: ${err}`);
  }

);