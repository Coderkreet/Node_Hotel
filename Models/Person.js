const mongoose = require('mongoose')


const PersonSchema = new mongoose.Schema({
name :{
    type : String,
    require : true
}
, 
age :{
    type :Number,
    require:true
}
,
Work :{
type:String,
enum : ["chef" , "Customer" , "Manager"],
require : true
},
email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique in the collection
  },
  phone: {
    type: String,
    required: true,
  },

})


const Person = mongoose.model('Person',PersonSchema)
module.exports = Person;