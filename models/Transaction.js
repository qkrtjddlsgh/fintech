var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionData = new Schema({
    id_email : String,
    title : String,
    pre_price : String,
    funding_price : String
});

var transaction = mongoose.model('transaction', transactionData, 'transactions');

module.exports = transaction;