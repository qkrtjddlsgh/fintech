var express = require('express');
var router = express.Router();
var member = require('../models/Member');

router.post('/', function(req, res){
    //var recv_data = req.body;

    var id_email = req.body.id_email;
    var pwd = req.body.pwd;
    var doc_type = req.body.doc_type;
    var name = req.body.name;

    member.find({id_email: id_email}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        // 회원가입 가능
        if(doc.length == 0){
            var new_member = new member();
            new_member.id_email = id_email;
            new_member.pwd = pwd;
            new_member.doc_type = doc_type;
            new_member.name = name;
            new_member.save();

            console.log(name);
            console.log(new_member.name);

            var res_data = new Object();
            res_data.code = "2200"; // register success

            res.send(res_data);
            res.end();
        }
        // 회원가입 불가능
        else{
            var res_data = new Object();
            res_data.code = "1300";

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;