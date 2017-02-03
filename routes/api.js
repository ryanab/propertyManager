var express = require('express');
var router = express.Router();
var controllers = require('../controllers')
/* GET users listing. */
router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource
    var controller = controllers[resource]
    
    if(controller==null){
        res.json({
            confirmation: 'fail',
            message: 'Resource not found'
        })
        return
    }
    
    controller.find(req.query, false)
    .then(function(results){
        res.json({
            confirmation: 'success',
            data: results
        })
        return
    })
    .catch(function(err){
        console.log(err)
        res.json({
            confirmation: 'fail',
            error: err.message
        })
        return
    })
})

router.get('/:resource/:id', function(req, res, next){
    var resource = req.params.resource
    var controller = controllers[resource]
    var id = req.params.id
    
    if(controller==null){
        res.json({
            confirmation: 'fail',
            message: 'Resource not found'
        })
        return
    }
    
    controller.findById(id, false)
    .then(function(result){
        res.json({
            confirmation: 'success',
            data: result
        })
        return
    })
    .catch(function(err){
        console.log(err)
        res.json({
            confirmation: 'fail',
            error: err.message
        })
        return
    })
})

router.post('/:resource', function(req, res, next){
    var resource = req.params.resource
    var controller = controllers[resource]
    
    if(controller==null){
        res.json({
            confirmation: 'fail',
            message: 'Resource not found'
        })
        return
    }
    
    controller.create(req.body, false)
    .then(function(result){
        res.json({
            confirmation: 'success',
            data: result
        })
        return
    })
    .catch(function(err){
        console.log(err)
        res.json({
            confirmation: 'fail',
            error: err.message
        })
        return
    })    
})



module.exports = router;
