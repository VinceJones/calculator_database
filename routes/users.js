var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Expressions = require('../models/expressions');

// READ: GET data from database
router.get('/', function(req, res, next) {
  Expressions.find(function(err, data){
    if (err) return next("Hey bozo, you gots GET error ", err);
    res.json(data);
  });
});

// CREATE: Post data to the Database
router.post('/', function(req, res, next){
  Expressions.create(req.body, function(err, postBackData){
    if (err) return next("Hey bozo, you gots CREATE error ", err);
    res.json(postBackData);
  });
});

// DELETE:
router.delete('/:id', function(req, res, next){
  Expressions.findByIdAndRemove(req.params.id, req.body, function(err, postBackData){
    if (err) return next("Hey bozo, you gots DELETE error ", err);
    res.json(postBackData);
  });
});

console.log("Hey Bud, users.js Loads, ya hoosier");

module.exports = router;
