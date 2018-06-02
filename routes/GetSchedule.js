var express = require('express');
var router = express.Router();
var note = require('../models/Note');

router.post('/', function(req, res){
    var title = req.body.title;

    note.find({title: title}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0) {
            var res_data = new Object();
            res_data.code = "4444";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.schedule = doc[0].schedule;

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;