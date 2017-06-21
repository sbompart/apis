/**
 * Created by Saul Bompart on 16-06-2017.
 */

var express = require('express');
var controller = require('./persons.controller');

var router = express.Router();

router.get('/', controller.all);
router.post('/', controller.create);
router.get('/:idPerson', controller.get);
// router.put('/:idPerson', controller.update);
// router.delete('/:idPerson', controller.delete);

module.exports = router;