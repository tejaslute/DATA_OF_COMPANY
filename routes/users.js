//route file to handle post req by rm list form

var express = require('express');
var router = express.Router();
var db = require('./../database');


router.route('/').post(req, res, next){

}

module.exports = router;