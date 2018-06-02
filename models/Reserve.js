var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reserveData = new Schema({
    id_email : String,
    title : String,
    name : String,
    phone : String,
    receiver : String,
    address : String
});

var reserve = mongoose.model('reserve', reserveData, 'reserves');

module.exports = reserve;