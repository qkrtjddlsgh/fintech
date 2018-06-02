var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var infoData = new Schema({
    id_email : String,
    fundSuccess : Number,
    fundNow : Number,
    fundNew : Number
});

var info = mongoose.model('info', infoData, 'infos');

module.exports = info;