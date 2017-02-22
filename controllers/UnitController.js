var Unit = require('../models/Unit')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Unit.find(params, function(err, units){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(units)
          return
        }
        var list = []
        units.forEach(function(unit){
          list.push(unit.summary())
        })
        resolve(list)
        return
      })
    })
  },
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Unit.findById(id, function(err, unit){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(unit)
           return
        }
        resolve(unit.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Unit.create(params, function(err, unit){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(unit)
           return
        }
        resolve(unit.summary())
      })
    })
  }
}