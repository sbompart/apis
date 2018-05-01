/**
 * Created by Saul Bompart on 28-04-2018.
 */
var express = require('express');
var controller = require('./async.controller');

var router = express.Router();

router.get('/', controller.all);
/* router.post('/', controller.create);
router.get('/:idHero', controller.get);
router.put('/:idHero', controller.update);
router.delete('/:idHero', controller.delete); */

module.exports = router;