var express = require('express');
var router = express.Router();
var info = require('../models/Info');

router.post('/', function(req, res){
    var id_email = req.body.id_email;
    var fundSuccess = req.body.fundSuccess;
    var fundNew = req.body.fundNew;
    var fundNow = req.body.fundNow;

    info.find({id_email: id_email}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0){
            var new_info = new info();
            new_info.id_email = id_email;
            new_info.fundSuccess = fundSuccess;
            new_info.fundNew = fundNew;
            new_info.fundNow = fundNow;
            new_info.save();

            var res_data = new Object();
            res_data.code = "3333";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "4444";

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;