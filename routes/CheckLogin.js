var express = require('express');
var router = express.Router();
var member = require('../models/Member');

router.post('/', function(req, res){
    var recv_data = req.body;

    var id = recv_data.id_email;
    var pwd = recv_data.pwd;

    member.find({id_email: id}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        // id가 존재 하지 않는 경우
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "1100";

            res.send(res_data);
            res.end();
        }
        // id가 존재 하는 경우
        else{
            member.find({id_email: id, pwd: pwd}, function(err, doc){
                if(err){
                    console.log(err.message);
                }
                // pwd가 틀린 경우
                if(doc.length == 0){
                    var res_data = new Object();
                    res_data.code = "1200";

                    res.send(res_data);
                    res.end();
                }
                // pwd가 맞는 경우
                else{
                    var res_data = new Object();
                    res_data.code = "2100"; // login success code

                    res.send(res_data);
                    res.end();
                }
            });
        }
    });

});

module.exports = router;