var express = require('express');
var router = express.Router();
var transaction = require('../models/Transaction');

router.post('/', function(req, res){
    var id_email = req.body.id_email;
    var title = req.body.title;
    var pre_price = req.body.pre_price;
    var funding_price = req.body.funding_price;

    transaction.find({id_email: id_email}, function(err, doc){
        if(err){
            console.log(err.message);
        }
        if(doc.length == 0){
            var new_transaction = new info();
            new_transaction.id_email = id_email;
            new_transaction.title = title;
            new_transaction.pre_price = pre_price;
            new_transaction.funding_price = funding_price;
            new_transaction.save();

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