var mongoose = require('mongoose'),
    consts   = require('./consts');
mongoose.connect(consts.MLAB_KEY);
//define the MODEL 1:  
var UserSchema = require('./define_schema_1');

var User = mongoose.model('User',UserSchema);

mongoose.connect(consts.MLAB_KEY).then( () =>{
    User.find({}, (err,user) => {
      if(err)
        console.log(`query error: ${err}`);
      console.log(`User: ${user}`);
      mongoose.disconnect();
    });
    // console.log(`connected: ${User}`);
  },
  err =>{
    console.log(`connection error: ${err}`);
  }
);