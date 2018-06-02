var express = require('express');
var router = express.Router();
var info = require('../models/Info');

router.post('/', function(req, res){
    var id_email = req.body.id_email;

    info.find({id_email: id_email}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0){
            var res_data = new On
        }
    });
});

module.exports = router;