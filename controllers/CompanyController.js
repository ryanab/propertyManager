var Company = require('../models/Company')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Cpmpany.find(params, function(err, companies){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(companies)
          return
        }
        var list = []
        companies.forEach(function(company){
          list.push(company.summary())
        })
        resolve(list)
        return
      })
    })
  },
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Company.findById(id, function(err, company){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(company)
           return
        }
        resolve(company.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Company.create(params, function(err, company){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(company)
           return
        }
        resolve(company.summary())
      })
    })
  }
}