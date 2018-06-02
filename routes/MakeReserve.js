var express = require('express');
var router = express.Router();
var reserve = require('../models/Reserve');

router.post('/', function(req, res){
    var recv_data = req.body;

    var id_email = recv_data.id_email;
    var title = recv_data.title;
    var name = recv_data.name;
    var phone = recv_data.phone;
    var receiver = recv_data.receiver;
    var address = recv_data.address;

    reserve.find({id_email: id_email, title: title}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0){
            var new_reserve = new reserve();
            new_reserve.id_email = id_email;
            new_reserve.title = title;
            new_reserve.name = name;
            new_reserve.phone = phone;
            new_reserve.receiver = receiver;
            new_reserve.address = address;
            new_reserve.save();

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