var PropertyController = require('./PropertyController')
var ProfileController = require('./ProfileController')
var TransactionController = require('./TransactionController')
var MessageController = require('./MessageController')

module.exports = {
    property: PropertyController,
    profile: ProfileController,
    transaction: TransactionController,
    message: MessageController
}