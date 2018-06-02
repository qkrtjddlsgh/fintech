var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rewardData = new Schema({
    title : String,
    rewardName : String,
    rewardContent : String
});

var reward = mongoose.model('reward', rewardData, 'rewards');

module.exports = reward;