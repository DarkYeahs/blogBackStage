const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName:String,
    password:String,
    email:String,
    create_date: { type: Date, default: Date.now }
});
//访问todo对象模型
const model = mongoose.model('user', userSchema);
module.exports = model;
