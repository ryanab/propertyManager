var mongoose = require('mongoose')
var MessageSchema = new mongoose.Schema({
  tenant: {type: String, default: ''},
  content: {type: String, default:''},
  subject: {type: String, default:''},
  category: {type: String, default:''},
  timestamp: {type:Date, default: Date.now()}
})

MessageSchema.methods.summary = function(){
  var summary = {
    tenant: this.tenant,
    content: this.content,
    subject: this.subject,
    category: this.category,
    timestamp: this.timestamp,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('MessageSchema', MessageSchema)