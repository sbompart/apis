/**
 * Created by Saul Bompart on 22-07-2017.
 */
var express = require('express');
var controller = require('./heroes.controller');

var router = express.Router();

router.get('/', controller.all);
router.post('/', controller.create);
router.get('/:idHero', controller.get);
router.put('/:idHero', controller.update);
router.delete('/:idHero', controller.delete);

module.exports = router;