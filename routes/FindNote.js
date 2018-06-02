var express = require('express');
var router = express.Router();
var note = require('../models/Note');

router.post('/', function(req, res){
    var title = req.body.title;

    note.find({title: title}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "3200";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.title = doc[0].title;
            res_data.category = doc[0].category;
            res_data.content = doc[0].content;
            res_data.goalPrice = doc[0].goalPrice;
            res_data.fundingPeriod = doc[0].fundingPeriod;
            res_data.schedule = doc[0].schedule;

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;