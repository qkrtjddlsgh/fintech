var express = require('express');
var router = express.Router();
var note = require('../models/Note');

router.post('/', function(req, res){
    var recv_data = req.body;

    var title = recv_data.title;
    var farmerName = recv_data.farmerName;
    var category = recv_data.category;
    var content = recv_data.content;
    var mainContent = recv_data.mainContent;
    var schedule = recv_data.schedule;
    var goalPrice = recv_data.goalPrice;
    var fundingPeriod = recv_data.fundingPeriod;

    note.find({title : title}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_note = new note();
            new_note.title = title;
            new_note.farmerName = farmerName;
            new_note.category = category;
            new_note.content = content;
            new_note.mainContent = mainContent;
            new_note.schedule = schedule;
            new_note.goalPrice = goalPrice;
            new_note.fundingPeriod = fundingPeriod;
            new_note.save();

            var res_data = new Object();
            res_data.code = "4000";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "3000";

            res.send(res_data);
            res.end();
        }
    });

});

module.exports = router;