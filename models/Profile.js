var mongoose = require('mongoose')
var ProfileSchema = new mongoose.Schema({
  password: {type:String, default:''},
  email: {type:String, default:''},
  phoneNumber: {type:String, default:''},
  name: {type:String, default:''},
  //holdover image until i can upload locally
  imageUrl: {type:String, default:'https://img.clipartfest.com/4f5a463492b31a318d6236223a4fed53_women-s-face-silhouette-human-head-silhouette-black-and-white-clipart_324-371.png'},
  role: {type:String, default:'tenant'},
  timestamp: {type:Date, default: Date.now()}
})

ProfileSchema.methods.summary = function(){
  var summary = {
    password: this.password,
    email: this.email,
    phoneNumber: this.phoneNumber,
    name: this.name,
    imageUrl: this.imageUrl,
    role: this.role,
    timestamp: this.timestamp,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)