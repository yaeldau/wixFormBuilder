
var express = require('express');
var router = express.Router();
const service = require('../Service');

/* GET home page. */
router.get('/', function(req, res, next) {

    let forms = service.get_forms();

  res.render('index', { title: 'Express', forms: forms});
});

module.exports = router;
