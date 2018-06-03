
var express = require('express');
var router = express.Router();


/* GET builder page. */
router.get('/', function(req, res, next) {
    res.render('builder', { title: 'Express'});
});

module.exports = router;
