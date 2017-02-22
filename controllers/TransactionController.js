var Transaction = require('../models/Transaction')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Transaction.find(params, function(err, transactions){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(transactions)
          return
        }

        var list = []
        transactions.forEach(function(transaction){
          list.push(transaction.summary())
        })
        resolve(list)
        return
      })
    })
  },
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Transaction.findById(id, function(err, transaction){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(transaction)
           return
        }
        resolve(transaction.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Transaction.create(params, function(err, transaction){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(transaction)
           return
        }
        resolve(transaction.summary())
      })
    })
  }
}