
var express = require('express');
var router = express.Router();


/* GET submit page. */
router.get('/:form_id', function(req, res, next) {
    res.render('submit', { title: 'Express', form_id: req.params.form_id});
});


module.exports = router;
