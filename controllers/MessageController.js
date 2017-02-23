var Message = require('../models/Message')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Message.find(params, function(err, messages){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(messages)
          return
        }
        var list = []
        messages.forEach(function(message){
          list.push(message.summary())
        })
        resolve(list)
        return
      })
    })
  },
  
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Message.findById(id, function(err, message){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(message)
           return
        }
        resolve(message.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Message.create(params, function(err, message){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(message)
           return
        }
        resolve(message.summary())
      })
    })
  }
}