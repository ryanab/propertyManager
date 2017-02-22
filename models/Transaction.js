var mongoose = require('mongoose')
var TransactionSchema = new mongoose.Schema({
    tenant: {type: String, default: ''},
    amount: {type: String, default:''},
    description: {type: String, default:''},
    date: {type:Date, default: Date.now()},
    timestamp: {type:Date, default: Date.now()}
})

TransactionSchema.methods.summary = function(){
    var summary = {
       tenant: this.address,
       amount: this.city,
       description: this.state,
       date: this.zip,
       timestamp: this.timestamp,
       id: this._id.toString()
    }
    return summary
}

module.exports = mongoose.model('TransactionSchema', TransactionSchema)