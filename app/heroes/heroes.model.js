/**
 * Created by scbr_ on 22-07-2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Heroes', {
    name: String,
    realName: String,
    favorites: String
});