var mongoose = require('mongoose')
var CompanySchema = new mongoose.Schema({
    name: {type: String, default: ''},
    slug: {type:String, default:''},
    companyType: {type:String, default: ''},
    timestamp: {type:Date, default: Date.now()}
})

//need method for company slug on create
PropertySchema.methods.summary = function(){
    var summary = {
       name: this.address,
       slug: this.slug,
       companyType: this.companyType,
       timestamp: this.timestamp,
       id: this._id.toString()
    }
    return summary
}

module.exports = mongoose.model('PropertySchema', PropertySchema)