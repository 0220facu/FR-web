var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
/* GET home page. */
router.get('/', indexController.main);
//router.get('/skills', indexController.skills);

module.exports = router;
