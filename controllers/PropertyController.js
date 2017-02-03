var Property = require('../models/Property')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Property.find(params, function(err, properties){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(properties)
          return
        }
        var list = []
        properties.forEach(function(property){
          list.push(property.summary())
        })
        resolve(list)
        return
      })
    })
  },
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Property.findById(id, function(err, property){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(property)
           return
        }
        resolve(property.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Property.create(params, function(err, property){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(property)
           return
        }
        resolve(property.summary())
      })
    })
  }
}