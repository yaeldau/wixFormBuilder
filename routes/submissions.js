
var express = require('express');
var router = express.Router();


/* GET submissions page. */
router.get('/:form_id', function(req, res, next) {
    res.render('submissions', { title: 'Express', form_id: req.params.form_id});
});

module.exports = router;
