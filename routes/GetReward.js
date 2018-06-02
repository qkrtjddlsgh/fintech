var express = require('express');
var router = express.Router();
var reward = require('../models/Reward');

router.post('/', function(req, res){
    var recv_data = req.body;

    var title = recv_data.title;

    reward.find({title : title}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "4200";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.response = doc;

            res.send(res_data);
            res.end();
        }
    });

});

module.exports = router;