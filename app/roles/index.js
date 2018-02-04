/**
 * Created by Saul Bompart on 21-11-2017.
 */
var express = require('express');
var controller = require('./roles.controller');

var router = express.Router();

router.get('/', controller.all);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;