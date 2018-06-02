var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteData = new Schema({
    title : String,
    farmerName : String,
    category : String,
    content : String,
    mainContent : String,
    schedule : String, // 단계별 계획
    goalPrice : String,
    curPrice : String,
    fundingPeriod : String
});

var note = mongoose.model('note', noteData, 'notes');

module.exports = note;