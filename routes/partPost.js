//route file to handle post req by parts  form

var express = require('express');
var router = express.Router();
var db = require('./../database');


router.route('/post').post(function (req, res, next) {
  //var sr_no = req.body.sr_no;
  var rm_code = req.body.rm_code;
  var lot_qty = req.body.lot_qty;
  var used_qty = req.body.used_qty;
  var UoM = req.body.UoM;
  var lot_no = req.body.lot_no;
  var storage_loc = req.body.storage_loc;
  //var in_timestamp = req.body.in_timestamp;


  var sql = `INSERT INTO rmqty ( rm_code, lot_qty, used_qty,UoM,lot_no,storage_loc) VALUES ("${rm_code}", "${lot_qty}", "${used_qty}", "${UoM}", "${lot_no}", "${storage_loc}")`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log('record inserted');
    //req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});


module.exports = router;