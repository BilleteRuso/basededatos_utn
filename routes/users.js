var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')


/* GET users listing. */
router.post('/', usersController.create);
router.post('/login', usersController.login);
router.get('/', usersController.getAll);



module.exports = router;