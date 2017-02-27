var mongoose = require('mongoose')
var MessageSchema = new mongoose.Schema({
  tenant: {type: String, default: ''},
  content: {type: String, default:''},
  creator: {type: mongoose.Schema.Types.Mixed, default:{}},
  category: {type: String, default:'misc'},
  timestamp: {type:Date, default: Date.now()}
})

MessageSchema.methods.summary = function(){
  var summary = {
    tenant: this.tenant,
    content: this.content,
    creator: this.creator,
    category: this.category,
    timestamp: this.timestamp,
    id: this._id.toString()
  }
  return summary
}

module.exports = mongoose.model('MessageSchema', MessageSchema)