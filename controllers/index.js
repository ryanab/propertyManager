var PropertyController = require('./PropertyController')
var ProfileController = require('./ProfileController')
var TransactionController = require('./TransactionController')

module.exports = {
    property: PropertyController,
    profile: ProfileController,
    transaction: TransactionController
}