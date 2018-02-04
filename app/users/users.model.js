/**
 * Created by Saul Bompart 15-11-2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    user: String,
    mail: String,
    role: String,
    password: String,
    status: String
});