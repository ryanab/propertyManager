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
       tenant: this.tenant,
       amount: this.amount,
       description: this.description,
       date: this.date,
       timestamp: this.timestamp,
       id: this._id.toString()
    }
    return summary
}

module.exports = mongoose.model('TransactionSchema', TransactionSchema)