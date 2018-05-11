var express = require('express');
var dbsql = require('../models/mysql')

var router = express.Router();

router.get('/',function(req,res){
    res.send('admin ok')     
});

module.exports = router
