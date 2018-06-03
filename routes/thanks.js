
var express = require('express');
var router = express.Router();
const service = require('../Service');


/* GET thanks page. */
router.get('/', function(req, res, next) {
    res.render('thanks', { title: 'Express'});
});


module.exports = router;
