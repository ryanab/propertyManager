var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Profile.find(params, function(err, profiles){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(profiles)
          return
        }
        var list = []
        profiles.forEach(function(profile){
          list.push(profile.summary())
        })
        resolve(list)
        return
      })
    })
  },
  findById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Profile.findById(id, function(err, profile){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(profile)
           return
        }
        resolve(profile.summary())
      })
    })
  },
  
  create: function(params, isRaw){
    return new Promise(function(resolve, reject){
      
      if(params['password'])
        params['password'] = bcrypt.hashSync(params['password'], 10)
      
      Profile.create(params, function(err, profile){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
           resolve(profile)
           return
        }
        resolve(profile.summary())
      })
    })
  }
}