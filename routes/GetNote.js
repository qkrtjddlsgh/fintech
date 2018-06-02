var express = require('express');
var router = express.Router();
var note = require('../models/Note');

router.post('/', function(req, res){

    note.find().sort({fundingPeriod: -1}).exec(function(err, doc){
        if(err){
            console.error(err.message);
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