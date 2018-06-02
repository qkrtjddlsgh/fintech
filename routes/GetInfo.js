var express = require('express');
var router = express.Router();
var info = require('../models/Info');
var member = require('../models/Member');

router.post('/', function(req, res){
    var id_email = req.body.id_email;

    member.find({id_email: id_email}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "4000";

            res.send(res_data);
            res.end();
        }
        else{
            info.find({id_email: doc[0].id_email}, function(err, result){
                if(err){
                    console.log(err.message);
                }
                if(doc.length == 0){
                    var res_data = new Object();
                    res_data.code = "4000";

                    res.send(res_data);
                    res.end();
                }
                else{
                    var res_data = new Object();
                    res_data.fundSuccess = result[0].fundSuccess;
                    res_data.fundNow = result[0].fundNow;
                    res_data.fundNew = result[0].fundNew;

                    res.send(res_data);
                    res.end();
                }
            });
        }
    });
});

module.exports = router;