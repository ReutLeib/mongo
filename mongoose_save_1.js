var mongoose = require('mongoose'),
    consts   = require('./consts');
mongoose.connect(consts.MLAB_KEY);

//define the MODEL 1:  
var UserSchema = require('./define_schema_1');

var User = mongoose.model('User',UserSchema);

mongoose.connect(consts.MLAB_KEY).then( () =>{
    var newUser1 = new User({
      name: "Nimrod",
      age:20,
      status:"A",
      groups: ["sports","music","books"]
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