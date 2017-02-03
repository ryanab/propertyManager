var mongoose = require('mongoose')
var PropertySchema = new mongoose.Schema({
    address: {type: String, default: ''},
    city: {type: String, default:''},
    state: {type: String, default:''},
    zip: {type: String, default:''},
    geo: {type: [Number], index: '2d'},
    timestamp: {type:Date, default: Date.now()}
})

PropertySchema.methods.summary = function(){
    var summary = {
       address: this.address,
       city: this.city,
       state: this.state,
       zip: this.zip,
       geo: this.geo,
       timestamp: this.timestamp,
       id: this._id.toString()
    }
    return summary
}

module.exports = mongoose.model('PropertySchema', PropertySchema)
