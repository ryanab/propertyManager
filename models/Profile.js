var mongoose = require('mongoose')
var ProfileSchema = new mongoose.Schema({
  password: {type:String, default:''},
  email: {type:String, default:''},
  phoneNumber: {type:String, default:''},
  name: {type:String, default:''},
  role: {type:String, default:''},
  timestamp: {type:Date, default: Date.now()}
})

ProfileSchema.methods.summary = function(){
  var summary = {
    password: this.password,
    email: this.email,
    phoneNumber: this.phoneNumber,
    name: this.name,
    role: this.role,
    timestamp: this.timestamp,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)