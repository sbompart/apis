/**
 * Created by Saul Bompart on 21-11-2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Roles', {
    role: String,
    description: String,
    status: String
});