var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberData = new Schema({
    name : String,
    doc_type : Number, // 0 : 사업자, 1 : 투자자
    id_email : String,
    pwd : String
});

var member = mongoose.model('member', memberData, 'members');

module.exports = member;