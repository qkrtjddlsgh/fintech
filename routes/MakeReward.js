var express = require('express');
var router = express.Router();
var reward = require('../models/Reward');

router.post('/', function(req, res){
    var recv_data = req.body;

    var title = recv_data.title;
    var rewardName = recv_data.rewardName;
    var rewardContent = recv_data.rewardContent;

    reward.find({title : title}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        else {
            var new_reward = new reward();
            new_reward.title = title;
            new_reward.rewardName = rewardName;
            new_reward.rewardContent = rewardContent;
            new_reward.save();

            var res_data = new Object();
            res_data.code = "4100";

            res.send(res_data);
            res.end();
        }
    });

});

module.exports = router;