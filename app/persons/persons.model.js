/**
 * Created by Saul Bompart on 16-06-2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Persons', {
    name: String,
    edad: String
});