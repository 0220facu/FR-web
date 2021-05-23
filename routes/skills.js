var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skillsController')
/* GET users listing. */
router.get('/javascript', skillsController.javascript);

module.exports = router;
