  // for all module there is one connect
var mongoose  = require('mongoose'),    
    // create Schema, for all vars needs to declare a type
    user      = new mongoose.Schema({

      name: {type:String,index:1},  
      age: Number,
      status: {        
        type:String,         
        required:true      
        },    
      groups: [String]  
    
    });
    //  }, {strict:true} );


// console.log(`required paths: ${user.requiredPaths()}`); 
// console.log(`indexes: ${JSON.stringify(user.indexes())}`);

module.exports = user;