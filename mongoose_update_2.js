var mongoose = require('mongoose'),
    consts   = require('./consts');
mongoose.connect(consts.MLAB_KEY);

//define the MODEL 1:  
var UserSchema = require('./define_schema_1');

var User = mongoose.model('User',UserSchema);

mongoose.connect(consts.MLAB_KEY).then( () =>{
    var cond = {name:"Reut"},
        update = {$set:{name:'Reut',age:61},
                  $push:{groups:'TV'}},
        opts = {multi: true};

     User.update(cond,update,opts, (err) => {
      if(err)
        console.log(`error: ${err}`);
      else{
        console.log(`Update doc:${User}`);
        mongoose.disconnect();
      }
     });
     // console.log(`User: ${user}`);
  },
  err =>{
    console.log(`connection error: ${err}`);
  }
);