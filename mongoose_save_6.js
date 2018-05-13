var mongoose = require('mongoose'),
    consts   = require('./consts');
mongoose.connect(consts.MLAB_KEY);

//define the MODEL 1:  
var User = require('./define_schema_validate');

mongoose.connect(consts.MLAB_KEY).then( () =>{
    var newUser1 = new User({
      name: "Shay",
      age:44,
      status:"B",
      groups: ["TV","Dance"]
      // groups: ["sports","music","books"]
    });
     newUser1.save((err) => {
      if(err)
        console.log(`error: ${err}`);
      else{
        console.log(`Saved doc: ${JSON.stringify(newUser1)}`);
        mongoose.disconnect();
      }
     });
     // console.log(`User: ${user}`);
  },
  err =>{
    console.log(`connection error: ${err}`);
  }
);