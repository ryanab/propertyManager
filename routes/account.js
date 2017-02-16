var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var Profile = require('../controllers/ProfileController')

router.get('/:action', function(req, res, next){
  var action = req.params.action

  if(action=='currentuser'){
    if(req.session==null){
      res.json({
        confirmation: 'success',
        user: null
      })
      return
    }

    if(req.session.token==null){
      res.json({
        confirmation: 'success',
        user: null
      })
      return
    }

    jwt.verify(req.session.token, process.env.TOKEN_SECRET, function(err, decoded){
      if(err){
        req.session.reset()
        res.json({
          confirmation: 'success',
          user: null
        })
        return
      }
      Profile.findById(decoded.id, false)
      .then(function(result){
        res.json({
          confirmation: 'success',
          user: result
        })
        return
      })
      .catch(function(err){
        res.json({
          confirmation: 'fail',
          message: err.message
        })
        return
      })
    })
  }

  if(action=='logout'){
    req.session.reset()
    res.json({
      confirmation: 'success',
      user: null
    })
    return
  }
})

router.post('/:action', function(req, res, next){
  var action = req.params.action

  if(action=='register'){
    Profile.create(req.body, false)
    .then(function(result){
      var token = jwt.sign({id: result.id}, process.env.TOKEN_SECRET, {expiresIn: 4000})
      req.session.token = token

      res.json({
        confirmation: 'success',
        user: result,
        token: token //will use later for authenticated requests
      })
      return
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err.message
      })
      return
    })
  }

  if(action=='login'){
    Profile.find({email: req.body.email}, true)
    .then(function(results){
      if(results.length==0){
        throw new Error('No user found')
        return
      }
      var profile = results[0]
      
      var isPasswordCorrect = bcrypt.compareSync(req.body.password, profile.password)
      if(isPasswordCorrect==false){
        throw new Error('Wrong password')
        return
      }
      var token = jwt.sign({id: profile.id}, process.env.TOKEN_SECRET, {expiresIn: 4000})
      req.session.token = token

      res.json({
        confirmation: 'success',
        user: profile.summary()
      })
      return
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err.message
      })
      return
    })
  }
})

module.exports = router