var mongoose = require('mongoose')
var UnitSchema = new mongoose.Schema({
    property: {type: String, default: ''}, //ID of property
    tenants: {type: [String], default:[]},
    timestamp: {type:Date, default: Date.now()}
})

UnitSchema.methods.summary = function(){
    var summary = {
      property: this.property,
      tenants: this.tenants,
      timestamp: this.timestamp,
      id: this._id.toString()
    }
    return summary
}

module.exports = mongoose.model('UnitSchema', UnitSchema)
