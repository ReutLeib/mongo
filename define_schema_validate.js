  // for all module there is one connect
var mongoose  = require('mongoose');
var schema = mongoose.Schema;   
    // create Schema, for all vars needs to declare a type
var UserSchema = new mongoose.Schema({

      name: {type:String,index:1},  
      age: Number,
      status: {        
        type:String,         
        required:true      
        },    
      groups: [String]  
    
    });
    //  }, {strict:true} );

// setters:
UserSchema.path('name').set((val)=>{
  let sval = String(val).toUpperCase();
  console.log(`\n capitalized: ${sval}`);
  return sval;
})


// validate a single key (=field)
UserSchema.path('age').validate((val) => {
  console.log(`\n validate ${val}`);
  let ival = Number(val);
  return ival > 18; // means a>18 -> return true
}, "user is too young" ); // msg s for error 

UserSchema.pre('save', (next) =>{
  console.log(`\n Before saving do something...\n`);
  return next();
})

// console.log(`required paths: ${user.requiredPaths()}`); 
// console.log(`indexes: ${JSON.stringify(user.indexes())}`);
var User = mongoose.model('User',UserSchema);
module.exports = User;